import { ArrowLeft } from '@tailgrids/icons';
import { Link } from '@/components/tailgrids/core/link.tsx';
import { useNavigate } from 'react-router';

export const Back = ({ label = 'Back' }: { label?: string }) => {
  const navigate = useNavigate();

  return (
    <Link href="#" variant="primary" size="md" onClick={() => navigate(-1)}>
      <ArrowLeft /> <span>{label}</span>
    </Link>
  );
};
