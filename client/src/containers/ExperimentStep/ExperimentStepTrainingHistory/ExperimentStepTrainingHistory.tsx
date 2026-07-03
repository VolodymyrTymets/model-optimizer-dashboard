import type { ExperimentStepEntity } from '@/api/generated.graphql.tsx';

import Image from '@/components/Image/Image.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';

export default function ExperimentStepTrainingHistory({
  step,
}: {
  step: ExperimentStepEntity;
}) {
  if (!step.training_history_plot) return <NoData />;
  return (
    <Image className="object-contain" image={step.training_history_plot} />
  );
}
