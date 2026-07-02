import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table';
import { Badge } from '@/components/tailgrids/core/badge';
import { type ExperimentFragment } from '@/api/generated.graphql.tsx';
import { Link } from '@/components/tailgrids/core/link.tsx';
import { EXPERIMENT } from '@/routes/routes.ts';
import { ArrowRight } from '@tailgrids/icons';

export default function ExperimentsTable({
  experiments,
}: {
  experiments: ExperimentFragment[];
}) {
  return (
    <>
      <TableRoot fullBleed>
        <TableHeader>
          <TableRow className="[&>th]:text-title-50 [&>th]:font-semibold">
            <TableHead scope="col">#</TableHead>
            <TableHead scope="col">Delta Accuracy</TableHead>
            <TableHead scope="col">Layers</TableHead>
            <TableHead scope="col">Data Set Details </TableHead>
            <TableHead scope="col"> Ended </TableHead>
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
                {item.bestStep.accuracy_delta.toFixed(2)} %
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
                <Link
                  variant="primary"
                  size="md"
                  href={EXPERIMENT.replace(':experimentId', item.id.toString())}
                >
                  <ArrowRight />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </>
  );
}
