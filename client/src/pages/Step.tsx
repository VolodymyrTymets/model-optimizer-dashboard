import {
  type ExperimentStepEntity,
  useExperimentStepQuery,
} from '@/api/generated.graphql.tsx';
import ExperimentStep from '@/containers/ExperimentStep/ExperimentStep.tsx';
import { Loading } from '@/components/Loading/Loading.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';
import { Error } from '@/components/Error/Error.tsx';
import { useParams } from 'react-router';
import { Back } from '@/components/Back/Back.tsx';

export default function ExperimentStepPage() {
  const params = useParams();
  const { data, loading, error } = useExperimentStepQuery({
    variables: {
      experiment_id: parseInt(params.experimentId),
      step_id: parseInt(params.stepId),
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data.experimentStep) return <NoData />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <Back label="Experiment" />
      </div>
      <ExperimentStep step={data.experimentStep as ExperimentStepEntity} />
    </div>
  );
}
