import { useExperimentsQuery } from '@/api/generated.graphql.tsx';
import ExperimentsTable from '@/containers/experiments/components/ExperimentsTable/ExperimentsTable';
import { Loading } from '@/components/Loading/Loading.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';
import { Error } from '@/components/Error/Error.tsx';

export default function Experiments() {
  const { data, loading, error } = useExperimentsQuery({
    variables: {
      pagination: {
        take: 100,
      },
    },
  });
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data.experiments.collection.length) return <NoData />;
  return <ExperimentsTable experiments={data.experiments.collection} />;
}
