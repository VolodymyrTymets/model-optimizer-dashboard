import type { ExperimentEntity } from '@/api/generated.graphql.tsx';
import { useExperimentQuery } from '@/api/generated.graphql.tsx';
import Experiment from '@/containers/experiment/Experiment.tsx';
import { Loading } from '@/components/Loading/Loading.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';
import { Error } from '@/components/Error/Error.tsx';
import { useParams } from 'react-router';
import { Back } from '@/components/Back/Back.tsx';

export default function ExperimentPage() {
  const params = useParams();
  const { data, loading, error } = useExperimentQuery({
    variables: {
      experiment_id: parseInt(params.experimentId),
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data.experiment) return <NoData />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <Back label="Experiments" />
      </div>
      <Experiment experiment={data.experiment as ExperimentEntity} />;
    </div>
  );
}
