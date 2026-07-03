import type { ModelSchemaEntity } from '@/api/generated.graphql.tsx';
import { List } from '@/components/tailgrids/core/list';
import Image from '@/components/Image/Image.tsx';

export default function ModelSchema({
  modelSchema,
}: {
  modelSchema: ModelSchemaEntity;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg text-text-50">Model schema</p>
      <List direction={'vertical'} className="w-full max-w-none">
        {modelSchema.modelLayers.map((layer, index) => (
          <li key={`${layer.__typename}-${layer.id}`}>
            Layer {index + 1}:{' '}
            <span className="text-text-50 font-bold">{layer.type}</span>
            <span className="text-text-50 font-bold">{layer.units}</span>{' '}
            Activation:
            <span className="text-text-50 font-bold">
              {layer.activation ?? 'Default'}
            </span>
            Regularization:{' '}
            <span className="text-text-50 font-bold">
              {layer.regularizer ?? 'Default'}
            </span>{' '}
          </li>
        ))}
      </List>

      <List direction="horizontal">
        <li>
          Loss:{' '}
          <span className="text-text-50 font-bold">{modelSchema.loss}</span>
        </li>
        <li>
          Optimizer:{' '}
          <span className="text-text-50 font-bold">
            {modelSchema.optimizer}
          </span>
        </li>
      </List>

      <div className="flex flex-col gap-2">
        <Image
          className="max-w-[400px] object-contain"
          image={modelSchema.plot}
        />
      </div>
    </div>
  );
}
