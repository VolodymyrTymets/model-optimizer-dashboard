import gql from 'graphql-tag';
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
      id
      accuracy_delta
      record_accuracy
      validation_accuracy
    }
  }
`;
