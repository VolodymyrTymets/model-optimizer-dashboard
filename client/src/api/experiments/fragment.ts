import gql from 'graphql-tag';
import { ExperimentStepFragment } from '../experiment-step/fragment';

export const ExperimentFragment = gql`
  fragment Experiment on ExperimentEntity {
    id
    createdAt
    endAt
    dataSetDetails {
      argumentation_types
      af_type
      labels
      duration
    }
    details {
      layers
      activation
      optimizer
      loss
      regularizer
    }
    bestStep {
      ...ExperimentStep
    }
  }
  ${ExperimentStepFragment}
`;
