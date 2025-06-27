import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  shadow-sm shadow-gray-400",
  {
    variants: {
      variant: {
        // 등록, 추가, 링크이동
        primary: 'bg-[#2563EB] text-white hover:bg-[#2B76F4]',

        // 수정
        secondary: 'bg-[#FFFFFF] text-[#2563EB] border border-[#2563EB] hover:bg-[#F0F7FF]',

        // 취소, 돌아가기
        ghost: 'bg-[#F1F2F5] text-[#6B7280] hover:text-[#374151]',

        // 미리보기
        utility: 'bg-[#F76666] text-[#FFFFFF] hover:bg-[#FCA5A5]',

        // 삭제
        danger: 'bg-[#FECACA] text-[#B91C1C] hover:bg-[#991B1B]',

        // 깃헙 사이트 이동, 상세보기
        external: 'bg-[#000000] text-white hover:opacity-80',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
