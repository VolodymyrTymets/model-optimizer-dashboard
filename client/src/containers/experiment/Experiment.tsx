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
import ExperimentStep from '@/containers/ExperimentStep/ExperimentStep.tsx';
import RecordResults from '@/containers/ExperimentStep/RecordResults/RecordResults.tsx';
import ExperimentStepTrainingHistory from '@/containers/ExperimentStep/ExperimentStepTrainingHistory/ExperimentStepTrainingHistory.tsx';

export default function Experiment({
  experiment,
}: {
  experiment: ExperimentEntity;
}) {
  const { details, dataSetDetails, bestStep } = experiment;
  return (
    <div className="w-full">
      <TabRoot defaultValue="overview" variant="default">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="history">History</TabTrigger>
          <TabTrigger value="record-results">Record Results</TabTrigger>
          <TabTrigger value="details">Data Details</TabTrigger>
          <TabTrigger value="data-set">Data Set Details</TabTrigger>
          <TabTrigger value="steps">Steps</TabTrigger>
        </TabList>
        <TabContent value="overview">
          <ExperimentStep step={bestStep} />
        </TabContent>
        <TabContent value="history">
          <ExperimentStepTrainingHistory step={bestStep} />
        </TabContent>
        <TabContent value="record-results">
          <RecordResults recordResults={bestStep.recordResults} />
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
