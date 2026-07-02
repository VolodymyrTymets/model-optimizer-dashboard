import type { ExperimentStepEntity } from '@/api/generated.graphql.tsx';

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table.tsx';
import ModelSchema from '@/containers/ModelSchema/ModelSchema.tsx';

export default function ExperimentStep({
  step,
}: {
  step: ExperimentStepEntity;
}) {
  const { modelSchema } = step;
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
      <ModelSchema modelSchema={modelSchema} />
    </div>
  );
}
