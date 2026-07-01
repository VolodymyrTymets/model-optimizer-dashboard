import gql from 'graphql-tag';
export const ExperimentFragment = gql`
  fragment Experiment on ExperimentEntity {
    id
    createdAt
    endAt
  }
`;
