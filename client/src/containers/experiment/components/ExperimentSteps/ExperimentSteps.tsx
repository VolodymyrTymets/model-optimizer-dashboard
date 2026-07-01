import type { ExperimentEntity } from '@/api/generated.graphql.tsx';

export default function ExperimentSteps({
  experiment,
}: {
  experiment: ExperimentEntity;
}) {
  return <p>Experiment Steps {experiment.id} ...</p>;
}
