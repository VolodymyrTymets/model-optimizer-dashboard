import gql from 'graphql-tag';

export const ImageFragment = gql`
  fragment Image on ImageEntity {
    id
    base64
  }
`;

export const RecordResultFragment = gql`
  fragment RecordResult on RecordResultEntity {
      id
      image {
          ...Image
      }
      accuracy
      ${ImageFragment}
  }
`;

export const ModelSchemaFragment = gql`
  fragment ModelSchema on ModelSchemaEntity {
    id
    modelLayers {
      type
      regularizer
      activation
      units
    }
    loss
    optimizer
    plot {
      ...Image
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
    training_history_plot {
      ...Image
    }
    recordResults {
      ...RecordResult
    }
  }
  ${ModelSchemaFragment}
`;
