import type { ExperimentDetailsEntity } from '@/api/generated.graphql.tsx';

export default function ExperimentDetails({
  details,
}: {
  details: ExperimentDetailsEntity;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Epoch:</p>
        <p className="text-text-50">{details.epochs}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Layers:</p>
        <p className="text-text-50">{details.layers}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Activation:</p>
        <p className="text-text-50">{details.activation}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Regularizer:</p>
        <p className="text-text-50">{details.regularizer}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Loss:</p>
        <p className="text-text-50">{details.loss}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Optimizer:</p>
        <p className="text-text-50">{details.optimizer}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-text-100">Batch Size:</p>
        <p className="text-text-50">{details.batch_size}</p>
      </div>
    </div>
  );
}
