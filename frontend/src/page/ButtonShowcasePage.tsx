import { Button } from '@/components/ui/button'; // 경로 맞게 조정

export const ButtonShowcasePage = () => {
  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* primary */}
      <Button variant="primary" size="default">
        primary default
      </Button>
      <Button variant="primary" size="sm">
        primary sm
      </Button>
      <Button variant="primary" size="lg">
        primary lg
      </Button>
      <Button variant="primary" size="icon">
        primary icon
      </Button>

      {/* secondary */}
      <Button variant="secondary" size="default">
        secondary default
      </Button>
      <Button variant="secondary" size="sm">
        secondary sm
      </Button>
      <Button variant="secondary" size="lg">
        secondary lg
      </Button>
      <Button variant="secondary" size="icon">
        secondary icon
      </Button>

      {/* ghost */}
      <Button variant="ghost" size="default">
        ghost default
      </Button>
      <Button variant="ghost" size="sm">
        ghost sm
      </Button>
      <Button variant="ghost" size="lg">
        ghost lg
      </Button>
      <Button variant="ghost" size="icon">
        ghost icon
      </Button>

      {/* utility */}
      <Button variant="utility" size="default">
        utility default
      </Button>
      <Button variant="utility" size="sm">
        utility sm
      </Button>
      <Button variant="utility" size="lg">
        utility lg
      </Button>
      <Button variant="utility" size="icon">
        utility icon
      </Button>

      {/* danger */}
      <Button variant="danger" size="default">
        danger default
      </Button>
      <Button variant="danger" size="sm">
        danger sm
      </Button>
      <Button variant="danger" size="lg">
        danger lg
      </Button>
      <Button variant="danger" size="icon">
        danger icon
      </Button>

      {/* external */}
      <Button variant="external" size="default">
        external default
      </Button>
      <Button variant="external" size="sm">
        external sm
      </Button>
      <Button variant="external" size="lg">
        external lg
      </Button>
      <Button variant="external" size="icon">
        external icon
      </Button>
    </div>
  );
};
