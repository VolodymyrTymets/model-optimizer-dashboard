import { useMemo } from 'react';
import type { ExperimentStepEntity } from '@/api/generated.graphql.tsx';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/tailgrids/core/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

export default function ExperimentStepsChart({
  experimentSteps,
}: {
  experimentSteps: ExperimentStepEntity[];
}) {
  const data = useMemo(() => {
    return experimentSteps
      .map((step) => ({
        step: step.step,
        record_accuracy: step.record_accuracy,
        validation_accuracy: step.validation_accuracy,
        delta_accuracy: step.accuracy_delta,
      }))
      .reverse();
  }, [experimentSteps]);
  return (
    <div className="w-80 p-4 md:p-8 md:w-140 aspect-video bg-background-50 rounded">
      <ChartContainer initialDimension={{ width: 280, height: 160 }}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="step"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tickCount={6}
          />
          <YAxis axisLine={false} tickLine={false} />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            dataKey="record_accuracy"
            type="monotone"
            stroke="#eff542"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="validation_accuracy"
            type="monotone"
            stroke="#f5a442"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="delta_accuracy"
            type="monotone"
            stroke="#48f542"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
