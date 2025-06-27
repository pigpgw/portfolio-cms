import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/Typography';
import { useNavigate } from 'react-router-dom';
export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="heading1" as="h1">
        Not Found
      </Typography>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로
      </Button>
    </div>
  );
};
