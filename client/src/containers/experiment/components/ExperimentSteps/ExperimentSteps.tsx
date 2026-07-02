import {
  type ExperimentEntity,
  type ExperimentStepEntity,
  useExperimentStepsQuery,
} from '@/api/generated.graphql.tsx';
import { Loading } from '@/components/Loading/Loading.tsx';
import { Error } from '@/components/Error/Error.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';
import ExperimentStepsTable from '@/containers/experiment/components/ExperimentSteps/ExperimentsStepsTable/ExperimentStepsTable.tsx';
import ExperimentStepsChart from '@/containers/experiment/components/ExperimentSteps/ExperimentStepsChart/ExperimentStepsChart.tsx';

export default function ExperimentSteps({
  experiment,
}: {
  experiment: ExperimentEntity;
}) {
  const { data, loading, error } = useExperimentStepsQuery({
    variables: {
      experiment_id: experiment.id,
      pagination: {
        take: 100,
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data.experimentSteps.collection.length) return <NoData />;
  return (
    <div className="flex flex-col gap-4">
      <ExperimentStepsChart
        experimentSteps={
          data.experimentSteps.collection as ExperimentStepEntity[]
        }
      />

      <ExperimentStepsTable
        experiment_id={experiment.id}
        experimentSteps={
          data.experimentSteps.collection as ExperimentStepEntity[]
        }
      />
    </div>
  );
}
