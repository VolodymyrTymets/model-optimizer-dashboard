import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table';
import { Trash1 } from '@tailgrids/icons';
import { Button } from '@/components/tailgrids/core/button';
import { Badge } from '@/components/tailgrids/core/badge';
import {
  type ExperimentFragment,
  useDeleteExperimentMutation,
} from '@/api/generated.graphql.tsx';
import { Link } from '@/components/tailgrids/core/link.tsx';
import { EXPERIMENT } from '@/routes/routes.ts';
import { ArrowRight } from '@tailgrids/icons';
import { Error } from '@/components/Error/Error.tsx';
import { useCallback } from 'react';

export default function ExperimentsTable({
  experiments,
}: {
  experiments: ExperimentFragment[];
}) {
  const [deleteExperiment, { loading, error }] = useDeleteExperimentMutation();
  const handleDelete = useCallback(
    (id: number) => {
      deleteExperiment({
        variables: { experiment_id: id },
        optimisticResponse: { deleteExperiment: { id } },
        refetchQueries: ['experiments'],
        update(cache, { data }) {
          const cacheId = cache.identify({
            __typename: 'Experiment',
            id: data.deleteExperiment.id,
          });

          // 2. Remove the object directly from the cache
          cache.evict({ id: cacheId });
          cache.modify({
            id: 'ROOT_QUERY',
            fields: {
              // Match the exact name of your query field
              experiments(existingRefs, { readField }) {
                return {
                  collection: existingRefs.collection.filter(
                    (ref) => readField('id', ref) !== cacheId,
                  ),
                  total: existingRefs.total - 1,
                };
              },
            },
          });

          // 3. Clear out any now-unreachable references to this item
          cache.gc();
        },
      });
    },
    [deleteExperiment],
  );
  return (
    <>
      <Error error={error} />
      <TableRoot fullBleed>
        <TableHeader>
          <TableRow className="[&>th]:text-title-50 [&>th]:font-semibold">
            <TableHead scope="col">#</TableHead>
            <TableHead scope="col">Delta Accuracy</TableHead>
            <TableHead scope="col">Layers</TableHead>
            <TableHead scope="col">Data Set Details </TableHead>
            <TableHead scope="col"> Ended </TableHead>
            <TableHead scope="col">Action</TableHead>
            <TableHead scope="col"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {experiments.map((item) => (
            <TableRow key={`${item.__typename}-${item.id}`} className="text-sm">
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.id}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.bestStep ? item.bestStep.accuracy_delta.toFixed(2) : '-'}{' '}
                %
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.details.layers}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.dataSetDetails.duration} / {item.dataSetDetails.af_type} /{' '}
                {item.dataSetDetails.argumentation_types}
              </TableCell>
              <TableCell>
                <Badge
                  color={!item.endAt ? 'warning' : 'success'}
                  prefixIcon={
                    <span
                      className={`size-1.5 rounded-full ${
                        !item.endAt ? 'bg-warning-500' : 'bg-success-500'
                      }`}
                    />
                  }
                >
                  {!item.endAt ? 'In progress' : 'Done'}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  iconOnly
                  size="xs"
                  variant="danger"
                  onClick={() => handleDelete(item.id)}
                  disabled={loading}
                >
                  <Trash1 />
                </Button>
              </TableCell>
              <TableCell>
                {item.bestStep && (
                  <Link
                    variant="primary"
                    size="md"
                    href={EXPERIMENT.replace(
                      ':experimentId',
                      item.id.toString(),
                    )}
                  >
                    <ArrowRight />
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </>
  );
}
