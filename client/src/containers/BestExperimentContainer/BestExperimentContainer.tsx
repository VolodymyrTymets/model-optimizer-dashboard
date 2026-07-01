import type { ExperimentEntity } from '@/api/generated.graphql.tsx';
import { useBestExperimentQuery } from '@/api/generated.graphql.tsx';
import Experiment from '@/containers/experiment/Experiment.tsx';
import { Loading } from '@/components/Loading/Loading.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';
import { Error } from '@/components/Error/Error.tsx';

export default function BestExperimentContainer() {
  const { data, loading, error } = useBestExperimentQuery({});
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data.bestExperiment) return <NoData />;
  return <Experiment experiment={data.bestExperiment as ExperimentEntity} />;
}
