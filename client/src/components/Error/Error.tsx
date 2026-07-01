export const Error = ({ error }: { error: Error }) => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-red-500">{error.message}</p>
  </div>
);
