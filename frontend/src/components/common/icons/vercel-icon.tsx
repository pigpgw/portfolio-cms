import type { IconProps } from '@/components/common/icons/icon.type';

/**
 * Vercel Icon
 * @param size - width/height(px|em|rem)
 * @param className - custom class
 * @param title - accessible label
 */
export function VercelIcon({ size = 24, className, title = 'Vercel' }: IconProps) {
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
      <path d="m12 1.608 12 20.784H0Z" fill="#000000" />
    </svg>
  );
}
