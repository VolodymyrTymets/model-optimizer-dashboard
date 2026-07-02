import type { ExperimentStepsEntity } from '@/api/generated.graphql.tsx';

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table.tsx';

export default function ExperimentStep({
  step,
}: {
  step: ExperimentStepsEntity;
}) {
  // const { schema } = step;
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex">
        <TableRoot fullBleed>
          <TableHeader>
            <TableRow className="[&>th]:text-title-50 [&>th]:font-semibold">
              <TableHead scope="col">Step</TableHead>
              <TableHead scope="col">Validation accuracy</TableHead>
              <TableHead scope="col">Record accuracy </TableHead>
              <TableHead scope="col">Delta accuracy </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="text-sm">
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {step.step}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {step.validation_accuracy}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {step.record_accuracy}
              </TableCell>
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {step.accuracy_delta}
              </TableCell>
            </TableRow>
          </TableBody>
        </TableRoot>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text-100">Schema:</p>
        <p className="text-text-50">Schema Component here</p>
      </div>
    </div>
  );
}
