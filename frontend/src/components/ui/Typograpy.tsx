import type { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@/lib/utils';

type Variant =
  | 'display'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'button'
  | 'caption';

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'body1',
  children,
  className,
  ...rest
}: TypographyProps<T>) => {
  const baseStyle = 'block min-w-0 max-w-full break-words leading-tight align-top';

  const variantStyle: Record<Variant, string> = {
    display: 'text-6xl lg:text-7xl font-semibold',
    heading1: 'text-4xl lg:text-5xl font-semibold',
    heading2: 'text-2xl lg:text-3xl font-semibold',
    heading3: 'text-xl font-semibold',
    body1: 'text-base font-normal leading-relaxed',
    body2: 'text-base font-medium leading-relaxed',
    body3: 'text-sm font-normal leading-relaxed',
    button: 'text-sm font-bold',
    caption: 'text-xs font-normal leading-relaxed',
  };

  const Component = as || 'p';
  return (
    <Component className={cn(baseStyle, variantStyle[variant], className)} {...rest}>
      {children}
    </Component>
  );
};
