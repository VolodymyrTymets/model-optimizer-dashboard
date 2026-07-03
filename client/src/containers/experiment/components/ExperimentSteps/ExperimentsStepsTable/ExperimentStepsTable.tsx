import { ArrowRight } from '@tailgrids/icons';
import { Link } from '@/components/tailgrids/core/link';
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table';
import { type ExperimentStepEntity } from '@/api/generated.graphql.tsx';
import { STEP } from '@/routes/routes.ts';

export default function ExperimentStepsTable({
  experiment_id,
  experimentSteps,
}: {
  experiment_id: number;
  experimentSteps: ExperimentStepEntity[];
}) {
  return (
    <>
      <TableRoot fullBleed>
        <TableHeader>
          <TableRow className="[&>th]:text-title-50 [&>th]:font-semibold">
            <TableHead scope="col">#</TableHead>
            <TableHead scope="col">Step</TableHead>
            <TableHead scope="col">Epoch</TableHead>
            <TableHead scope="col">Delta </TableHead>
            <TableHead scope="col">Accuracy </TableHead>
            <TableHead scope="col">Record Accuracy </TableHead>
            <TableHead scope="col"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {experimentSteps.map((item) => (
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
                {item.step}
              </TableCell>
              <TableCell
                  scope="row"
                  className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.epochs}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.accuracy_delta}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.validation_accuracy}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.record_accuracy}
              </TableCell>
              <TableCell>
                <Link
                  variant="primary"
                  size="md"
                  href={STEP.replace(
                    ':experimentId',
                    experiment_id.toString(),
                  ).replace(':stepId', item.id.toString())}
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
