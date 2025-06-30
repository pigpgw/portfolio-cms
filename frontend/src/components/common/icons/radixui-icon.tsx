import type { IconProps } from '@/components/common/icons/icon.type';

/**
 * Radix UI Icon
 * @param size - width/height(px|em|rem)
 * @param className - custom class
 * @param title - accessible label
 */
export function RadixuiIcon({ size = 24, className, title = 'Radix UI' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#161618"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <path d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z" />
    </svg>
  );
}
