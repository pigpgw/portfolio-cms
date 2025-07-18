import type { IconProps } from '@/components/common/icons/icon.type';

/**
 * Shadcn UI Icon
 * @param size - width/height(px|em|rem)
 * @param className - custom class
 * @param title - accessible label
 */
export function ShadcnuiIcon({ size = 24, className, title = 'shadcn/ui' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <path
        fill="#000000"
        d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z"
      />
    </svg>
  );
}
