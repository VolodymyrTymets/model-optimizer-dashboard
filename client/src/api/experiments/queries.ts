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

export const Experiment = gql`
  query Experiment($experiment_id: Int!) {
    experiment(experiment_id: $experiment_id) {
      ...Experiment
    }
  }
  ${ExperimentFragment}
`;

export const BestExperiment = gql`
  query BestExperiment {
    bestExperiment {
      ...Experiment
    }
  }
  ${ExperimentFragment}
`;

export const DeleteExperiment = gql`
  mutation DeleteExperiment($experiment_id: Int!) {
    deleteExperiment(experiment_id: $experiment_id) {
      id
    }
  }
`;
