import gql from 'graphql-tag';
import { ExperimentFragment } from './fragment';

export const Experiments = gql`
  query Experiments($pagination: PaginationInput!) {
    experiments(pagination: $pagination) {
      collection {
        ...Experiment
      }
      total
    }
  }
  ${ExperimentFragment}
`;
