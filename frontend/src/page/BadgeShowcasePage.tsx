import { Badge } from '@/components/ui/badge';

export const BadgeShowcasePage = () => {
  return (
    <div className="flex gap-1">
      <Badge variant="default">default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge
        variant="outline"
        onClick={() => {
          console.log('hi');
        }}
      >
        outline
      </Badge>
      <Badge variant="default" href="https://tailwindcss.com/docs/font-size">
        default
      </Badge>
      <Badge variant="secondary" href="https://tailwindcss.com/docs/font-size">
        secondary
      </Badge>
      <Badge variant="destructive" href="https://tailwindcss.com/docs/font-size">
        destructive
      </Badge>
      <Badge variant="outline" href="https://tailwindcss.com/docs/font-size">
        outline
      </Badge>
    </div>
  );
};
