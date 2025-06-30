/**
 * Vercel Icon
 * @param size - width/height(px|em|rem)
 * @param className - custom class
 * @param title - accessible label
 */
export function VercelIcon({
  size = 24,
  className,
  title = 'Vercel',
}: {
  size?: number | string;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <path d="m12 1.608 12 20.784H0Z" />
    </svg>
  );
}
