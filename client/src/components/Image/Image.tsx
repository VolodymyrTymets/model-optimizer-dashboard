import { type ImageEntity } from '@/api/generated.graphql.tsx';

export default function Image({
  image,
  ...props
}: {
  image?: ImageEntity;
  className?: string;
}) {
  if (!image) return null;
  return (
    <img
      src={`data:image/png;base64, ${image.base64}`}
      alt={`${image.__typename}-${image.id}`}
      {...props}
    />
  );
}
