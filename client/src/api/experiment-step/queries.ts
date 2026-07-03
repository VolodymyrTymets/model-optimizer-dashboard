import gql from 'graphql-tag';
import { ExperimentStepFragment } from '@/api/experiment-step/fragment.ts';

export const ExperimentSteps = gql`
  query ExperimentSteps($experiment_id: Int!, $pagination: PaginationInput!) {
    experimentSteps(experiment_id: $experiment_id, pagination: $pagination) {
      collection {
        id
        step
        accuracy_delta
        record_accuracy
        validation_accuracy
      }
      total
    }
  }
`;

export const ExperimentStep = gql`
  query ExperimentStep($experiment_id: Int!, $step_id: Int!) {
    experimentStep(experiment_id: $experiment_id, step_id: $step_id) {
        ...ExperimentStep
    }
    ${ExperimentStepFragment}
  }
`;
