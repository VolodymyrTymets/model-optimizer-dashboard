import gql from 'graphql-tag';
export const ModelSchemaFragment = gql`
  fragment ModelSchema on ModelSchemaEntity {
    id
    modelLayers {
      regularizer
      activation
      units
    }
  }
`;

export const ExperimentStepFragment = gql`
  fragment ExperimentStep on ExperimentStepsEntity {
    id
    step
    accuracy_delta
    record_accuracy
    validation_accuracy
    modelSchema {
      ...ModelSchema
    }
  }
  ${ModelSchemaFragment}
`;
