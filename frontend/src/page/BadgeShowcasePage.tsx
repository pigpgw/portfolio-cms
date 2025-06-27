import { Badge } from '@/components/ui/badge';

export const BadgeShowcasePage = () => {
  return (
    <div className="flex gap-1">
      <Badge variant="default">default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
    </div>
  );
};
