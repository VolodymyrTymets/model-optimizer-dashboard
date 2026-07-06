import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle,
} from '@/components/tailgrids/core/alert';

export const Error = ({ error }: { error: Error }) => {
  if (!error) return null;
  return (
    <div className="flex flex-col items-center justify-center">
      <Alert status="error">
        <AlertIndicator />
        <AlertContent>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message || 'Something went wrong'}.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
};
