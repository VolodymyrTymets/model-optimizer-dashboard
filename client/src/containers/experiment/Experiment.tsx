import type { ExperimentEntity } from '@/api/generated.graphql.tsx';
import {
  TabContent,
  TabList,
  TabRoot,
  TabTrigger,
} from '@/components/tailgrids/core/tabs';
import ExperimentDetails from '@/containers/experiment/components/ExperimentDetails/ExperimentDetails.tsx';
import ExperimentDataSetDetails from '@/containers/experiment/components/ExperimentDataSetDetails/ExperimentDataSetDetails.tsx';
import ExperimentSteps from '@/containers/experiment/components/ExperimentSteps/ExperimentSteps.tsx';

export default function Experiment({
  experiment,
}: {
  experiment: ExperimentEntity;
}) {
  const { details, dataSetDetails } = experiment;
  return (
    <div className="w-full">
      <TabRoot defaultValue="overview" variant="default">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="details">Data Details</TabTrigger>
          <TabTrigger value="data-set">Data Set Details</TabTrigger>
          <TabTrigger value="steps">Steps</TabTrigger>
        </TabList>
        <TabContent value="overview">
          <p>Overview</p>
        </TabContent>
        <TabContent value="details">
          <ExperimentDetails details={details} />
        </TabContent>
        <TabContent value="data-set">
          <ExperimentDataSetDetails details={dataSetDetails} />
        </TabContent>
        <TabContent value="steps">
          <ExperimentSteps experiment={experiment} />
        </TabContent>
      </TabRoot>
    </div>
  );
}
