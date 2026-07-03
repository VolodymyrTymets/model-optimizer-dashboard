import type { RecordResultEntity } from '@/api/generated.graphql.tsx';

import Image from '@/components/Image/Image.tsx';
import { NoData } from '@/components/NoData/NoData.tsx';

export default function RecordResults({
  recordResults,
}: {
  recordResults?: RecordResultEntity[];
}) {
  if (!recordResults) return <NoData />;
  return (
    <div className="flex flex-col gap-2">
      {recordResults &&
        recordResults.map((recordResult) => (
          <div
            className="flex flex-col gap-1"
            key={`${recordResult.__typename}-${recordResult.id}`}
          >
            <p className="text-md text-text-50">
              <span className="font-bold">{recordResult.accuracy} % - </span>
              {recordResult.name}
            </p>
            <Image
              className="object-contain h-[100px]"
              image={recordResult.image}
            />
          </div>
        ))}
    </div>
  );
}
