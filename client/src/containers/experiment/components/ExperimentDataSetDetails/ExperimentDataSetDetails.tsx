import type { ExperimentDataSetDetailsEntity } from '@/api/generated.graphql.tsx';

export default function ExperimentDataSetDetails({
  details,
}: {
  details: ExperimentDataSetDetailsEntity;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Duration:</p>
        <p className="text-text-50">{details.duration}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Audio feature:</p>
        <p className="text-text-50">{details.af_type}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Labels:</p>
        <p className="text-text-50">{details.labels}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Argumentation:</p>
        <p className="text-text-50">{details.argumentation_types}</p>
      </div>
    </div>
  );
}
