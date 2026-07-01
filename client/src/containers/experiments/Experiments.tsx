import { useExperimentsQuery } from '@/api/generated.graphql.tsx';
import ExperimentsTable from '@/containers/experiments/components/ExperimentsTable/ExperimentsTable';

export default function Experiments() {
  const { data, loading, error } = useExperimentsQuery({
    variables: {
      pagination: {
        take: 10,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data.experiments) return <p>No data</p>;
  return <ExperimentsTable experiments={data.experiments.collection} />;
}
