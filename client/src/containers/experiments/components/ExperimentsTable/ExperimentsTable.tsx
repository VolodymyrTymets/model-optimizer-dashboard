import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@/components/tailgrids/core/table';
import { type ExperimentFragment } from '@/api/generated.graphql.tsx';

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
            <TableHead scope="col">Price</TableHead>
            <TableHead scope="col">Stock</TableHead>
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
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </>
  );
}
