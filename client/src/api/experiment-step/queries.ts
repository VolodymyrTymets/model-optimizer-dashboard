import gql from 'graphql-tag';

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
