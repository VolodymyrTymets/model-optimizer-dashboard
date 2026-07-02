import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type ExperimentDataSetDetailsEntity = {
  __typename?: 'ExperimentDataSetDetailsEntity';
  /** af_type */
  af_type: Scalars['String']['output'];
  /** argumentation_types */
  argumentation_types: Scalars['String']['output'];
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**   duration */
  duration: Scalars['Float']['output'];
  /** regularizer */
  experiment_id: Scalars['Int']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** labels */
  labels: Scalars['String']['output'];
};

export type ExperimentDetailsEntity = {
  __typename?: 'ExperimentDetailsEntity';
  /** activation */
  activation: Scalars['String']['output'];
  /** batch_size */
  batch_size: Scalars['Int']['output'];
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** epochs */
  epochs: Scalars['Int']['output'];
  /** regularizer */
  experiment_id: Scalars['Int']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** layers */
  layers: Scalars['String']['output'];
  /** loss */
  loss: Scalars['String']['output'];
  /** optimizer */
  optimizer: Scalars['String']['output'];
  /** regularizer */
  regularizer?: Maybe<Scalars['String']['output']>;
};

export type ExperimentEntity = {
  __typename?: 'ExperimentEntity';
  bestStep: ExperimentStepsEntity;
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** dataSetDetails */
  dataSetDetails: ExperimentDataSetDetailsEntity;
  /** details */
  details: ExperimentDetailsEntity;
  /** endAt */
  endAt?: Maybe<Scalars['DateTime']['output']>;
  /** id */
  id: Scalars['Int']['output'];
};

export type ExperimentPaginatedEntity = {
  __typename?: 'ExperimentPaginatedEntity';
  collection: Array<ExperimentEntity>;
  total: Scalars['Int']['output'];
};

export type ExperimentStepsEntity = {
  __typename?: 'ExperimentStepsEntity';
  /** accuracy_delta */
  accuracy_delta: Scalars['Float']['output'];
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** endAt */
  endAt?: Maybe<Scalars['DateTime']['output']>;
  /** epochs */
  epochs: Scalars['Int']['output'];
  /** experiment_id */
  experiment_id: Scalars['Int']['output'];
  /** fingerprint */
  fingerprint: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  modelSchema: ModelSchemaEntity;
  /** recordResults */
  recordResults?: Maybe<Array<RecordResultEntity>>;
  /** record_accuracy */
  record_accuracy: Scalars['Float']['output'];
  /** schema */
  schema: ModelSchemaEntity;
  /** step */
  step: Scalars['Int']['output'];
  /** training_history_plot */
  training_history_plot?: Maybe<ImageEntity>;
  /** validation_accuracy */
  validation_accuracy: Scalars['Float']['output'];
};

export type ExperimentStepsPaginatedEntity = {
  __typename?: 'ExperimentStepsPaginatedEntity';
  collection: Array<ExperimentStepsEntity>;
  total: Scalars['Int']['output'];
};

export type ImageEntity = {
  __typename?: 'ImageEntity';
  /** base64 */
  base64: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
};

export type ModelLayerEntity = {
  __typename?: 'ModelLayerEntity';
  /** activation */
  activation?: Maybe<Scalars['String']['output']>;
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** experiment_id */
  experiment_id: Scalars['Int']['output'];
  /** experiment_step_id */
  experiment_step_id: Scalars['Int']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** model_schema_id */
  model_schema_id: Scalars['Int']['output'];
  /** regularizer */
  regularizer?: Maybe<Scalars['String']['output']>;
  /** type */
  type: Scalars['String']['output'];
  /** units */
  units: Scalars['Int']['output'];
};

export type ModelSchemaEntity = {
  __typename?: 'ModelSchemaEntity';
  /** createdAt */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** experiment_id */
  experiment_id: Scalars['Int']['output'];
  /** experiment_step_id */
  experiment_step_id: Scalars['Int']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** loss */
  loss: Scalars['String']['output'];
  /** layers */
  modelLayers?: Maybe<Array<ModelLayerEntity>>;
  /** optimizer */
  optimizer: Scalars['String']['output'];
  /** plot */
  plot?: Maybe<ImageEntity>;
};

export type PaginationInput = {
  /** sorting */
  orderBy?: InputMaybe<Array<SortingInput>>;
  /** skip */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** take */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get Best Experiment */
  bestExperiment: ExperimentEntity;
  /** Get Single Experiment */
  experiment: ExperimentEntity;
  /** Get Experiments Steps with pagination */
  experimentSteps: ExperimentStepsPaginatedEntity;
  /** Get Experiments with pagination */
  experiments: ExperimentPaginatedEntity;
};

export type QueryExperimentArgs = {
  experiment_id: Scalars['Int']['input'];
};

export type QueryExperimentStepsArgs = {
  experiment_id: Scalars['Int']['input'];
  pagination: PaginationInput;
};

export type QueryExperimentsArgs = {
  pagination: PaginationInput;
};

export type RecordResultEntity = {
  __typename?: 'RecordResultEntity';
  /** accuracy */
  accuracy: Scalars['Float']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** image */
  image?: Maybe<ImageEntity>;
};

export type SortingInput = {
  /** sorting field */
  field: Scalars['String']['input'];
  /** sorting order */
  order: Scalars['String']['input'];
};

export type ImageFragment = {
  __typename?: 'ImageEntity';
  id: number;
  base64: string;
};

export type RecordResultFragment = {
  __typename?: 'RecordResultEntity';
  id: number;
  accuracy: number;
  image?: { __typename?: 'ImageEntity'; id: number; base64: string } | null;
};

export type ModelSchemaFragment = {
  __typename?: 'ModelSchemaEntity';
  id: number;
  loss: string;
  optimizer: string;
  modelLayers?: Array<{
    __typename?: 'ModelLayerEntity';
    type: string;
    regularizer?: string | null;
    activation?: string | null;
    units: number;
  }> | null;
  plot?: { __typename?: 'ImageEntity'; id: number; base64: string } | null;
};

export type ExperimentStepFragment = {
  __typename?: 'ExperimentStepsEntity';
  id: number;
  step: number;
  accuracy_delta: number;
  record_accuracy: number;
  validation_accuracy: number;
  modelSchema: {
    __typename?: 'ModelSchemaEntity';
    id: number;
    loss: string;
    optimizer: string;
    modelLayers?: Array<{
      __typename?: 'ModelLayerEntity';
      type: string;
      regularizer?: string | null;
      activation?: string | null;
      units: number;
    }> | null;
    plot?: { __typename?: 'ImageEntity'; id: number; base64: string } | null;
  };
  training_history_plot?: {
    __typename?: 'ImageEntity';
    id: number;
    base64: string;
  } | null;
  recordResults?: Array<{
    __typename?: 'RecordResultEntity';
    id: number;
    accuracy: number;
    image?: { __typename?: 'ImageEntity'; id: number; base64: string } | null;
  }> | null;
};

export type ExperimentStepsQueryVariables = Exact<{
  experiment_id: Scalars['Int']['input'];
  pagination: PaginationInput;
}>;

export type ExperimentStepsQuery = {
  __typename?: 'Query';
  experimentSteps: {
    __typename?: 'ExperimentStepsPaginatedEntity';
    total: number;
    collection: Array<{
      __typename?: 'ExperimentStepsEntity';
      id: number;
      step: number;
      accuracy_delta: number;
      record_accuracy: number;
      validation_accuracy: number;
    }>;
  };
};

export type ExperimentFragment = {
  __typename?: 'ExperimentEntity';
  id: number;
  createdAt?: any | null;
  endAt?: any | null;
  dataSetDetails: {
    __typename?: 'ExperimentDataSetDetailsEntity';
    argumentation_types: string;
    af_type: string;
    labels: string;
    duration: number;
  };
  details: {
    __typename?: 'ExperimentDetailsEntity';
    layers: string;
    activation: string;
    optimizer: string;
    loss: string;
    regularizer?: string | null;
  };
  bestStep: {
    __typename?: 'ExperimentStepsEntity';
    id: number;
    step: number;
    accuracy_delta: number;
    record_accuracy: number;
    validation_accuracy: number;
    modelSchema: {
      __typename?: 'ModelSchemaEntity';
      id: number;
      loss: string;
      optimizer: string;
      modelLayers?: Array<{
        __typename?: 'ModelLayerEntity';
        type: string;
        regularizer?: string | null;
        activation?: string | null;
        units: number;
      }> | null;
      plot?: { __typename?: 'ImageEntity'; id: number; base64: string } | null;
    };
    training_history_plot?: {
      __typename?: 'ImageEntity';
      id: number;
      base64: string;
    } | null;
    recordResults?: Array<{
      __typename?: 'RecordResultEntity';
      id: number;
      accuracy: number;
      image?: { __typename?: 'ImageEntity'; id: number; base64: string } | null;
    }> | null;
  };
};

export type ExperimentsQueryVariables = Exact<{
  pagination: PaginationInput;
}>;

export type ExperimentsQuery = {
  __typename?: 'Query';
  experiments: {
    __typename?: 'ExperimentPaginatedEntity';
    total: number;
    collection: Array<{
      __typename?: 'ExperimentEntity';
      id: number;
      createdAt?: any | null;
      endAt?: any | null;
      dataSetDetails: {
        __typename?: 'ExperimentDataSetDetailsEntity';
        argumentation_types: string;
        af_type: string;
        labels: string;
        duration: number;
      };
      details: {
        __typename?: 'ExperimentDetailsEntity';
        layers: string;
        activation: string;
        optimizer: string;
        loss: string;
        regularizer?: string | null;
      };
      bestStep: {
        __typename?: 'ExperimentStepsEntity';
        id: number;
        step: number;
        accuracy_delta: number;
        record_accuracy: number;
        validation_accuracy: number;
        modelSchema: {
          __typename?: 'ModelSchemaEntity';
          id: number;
          loss: string;
          optimizer: string;
          modelLayers?: Array<{
            __typename?: 'ModelLayerEntity';
            type: string;
            regularizer?: string | null;
            activation?: string | null;
            units: number;
          }> | null;
          plot?: {
            __typename?: 'ImageEntity';
            id: number;
            base64: string;
          } | null;
        };
        training_history_plot?: {
          __typename?: 'ImageEntity';
          id: number;
          base64: string;
        } | null;
        recordResults?: Array<{
          __typename?: 'RecordResultEntity';
          id: number;
          accuracy: number;
          image?: {
            __typename?: 'ImageEntity';
            id: number;
            base64: string;
          } | null;
        }> | null;
      };
    }>;
  };
};

export type ExperimentQueryVariables = Exact<{
  experiment_id: Scalars['Int']['input'];
}>;

export type ExperimentQuery = {
  __typename?: 'Query';
  experiment: {
    __typename?: 'ExperimentEntity';
    id: number;
    createdAt?: any | null;
    endAt?: any | null;
    dataSetDetails: {
      __typename?: 'ExperimentDataSetDetailsEntity';
      argumentation_types: string;
      af_type: string;
      labels: string;
      duration: number;
    };
    details: {
      __typename?: 'ExperimentDetailsEntity';
      layers: string;
      activation: string;
      optimizer: string;
      loss: string;
      regularizer?: string | null;
    };
    bestStep: {
      __typename?: 'ExperimentStepsEntity';
      id: number;
      step: number;
      accuracy_delta: number;
      record_accuracy: number;
      validation_accuracy: number;
      modelSchema: {
        __typename?: 'ModelSchemaEntity';
        id: number;
        loss: string;
        optimizer: string;
        modelLayers?: Array<{
          __typename?: 'ModelLayerEntity';
          type: string;
          regularizer?: string | null;
          activation?: string | null;
          units: number;
        }> | null;
        plot?: {
          __typename?: 'ImageEntity';
          id: number;
          base64: string;
        } | null;
      };
      training_history_plot?: {
        __typename?: 'ImageEntity';
        id: number;
        base64: string;
      } | null;
      recordResults?: Array<{
        __typename?: 'RecordResultEntity';
        id: number;
        accuracy: number;
        image?: {
          __typename?: 'ImageEntity';
          id: number;
          base64: string;
        } | null;
      }> | null;
    };
  };
};

export type BestExperimentQueryVariables = Exact<{ [key: string]: never }>;

export type BestExperimentQuery = {
  __typename?: 'Query';
  bestExperiment: {
    __typename?: 'ExperimentEntity';
    id: number;
    createdAt?: any | null;
    endAt?: any | null;
    dataSetDetails: {
      __typename?: 'ExperimentDataSetDetailsEntity';
      argumentation_types: string;
      af_type: string;
      labels: string;
      duration: number;
    };
    details: {
      __typename?: 'ExperimentDetailsEntity';
      layers: string;
      activation: string;
      optimizer: string;
      loss: string;
      regularizer?: string | null;
    };
    bestStep: {
      __typename?: 'ExperimentStepsEntity';
      id: number;
      step: number;
      accuracy_delta: number;
      record_accuracy: number;
      validation_accuracy: number;
      modelSchema: {
        __typename?: 'ModelSchemaEntity';
        id: number;
        loss: string;
        optimizer: string;
        modelLayers?: Array<{
          __typename?: 'ModelLayerEntity';
          type: string;
          regularizer?: string | null;
          activation?: string | null;
          units: number;
        }> | null;
        plot?: {
          __typename?: 'ImageEntity';
          id: number;
          base64: string;
        } | null;
      };
      training_history_plot?: {
        __typename?: 'ImageEntity';
        id: number;
        base64: string;
      } | null;
      recordResults?: Array<{
        __typename?: 'RecordResultEntity';
        id: number;
        accuracy: number;
        image?: {
          __typename?: 'ImageEntity';
          id: number;
          base64: string;
        } | null;
      }> | null;
    };
  };
};

export const ImageFragmentDoc = gql`
  fragment Image on ImageEntity {
    id
    base64
  }
`;
export const ModelSchemaFragmentDoc = gql`
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
  ${ImageFragmentDoc}
`;
export const RecordResultFragmentDoc = gql`
  fragment RecordResult on RecordResultEntity {
    id
    image {
      ...Image
    }
    accuracy
  }
  ${ImageFragmentDoc}
`;
export const ExperimentStepFragmentDoc = gql`
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
  ${ModelSchemaFragmentDoc}
  ${ImageFragmentDoc}
  ${RecordResultFragmentDoc}
`;
export const ExperimentFragmentDoc = gql`
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
  ${ExperimentStepFragmentDoc}
`;
export const ExperimentStepsDocument = gql`
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

/**
 * __useExperimentStepsQuery__
 *
 * To run a query within a React component, call `useExperimentStepsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperimentStepsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperimentStepsQuery({
 *   variables: {
 *      experiment_id: // value for 'experiment_id'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useExperimentStepsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ExperimentStepsQuery,
    ExperimentStepsQueryVariables
  > &
    (
      | { variables: ExperimentStepsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExperimentStepsQuery, ExperimentStepsQueryVariables>(
    ExperimentStepsDocument,
    options,
  );
}
export function useExperimentStepsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExperimentStepsQuery,
    ExperimentStepsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ExperimentStepsQuery,
    ExperimentStepsQueryVariables
  >(ExperimentStepsDocument, options);
}
// @ts-ignore
export function useExperimentStepsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ExperimentStepsQuery,
    ExperimentStepsQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<
  ExperimentStepsQuery,
  ExperimentStepsQueryVariables
>;
export function useExperimentStepsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ExperimentStepsQuery,
        ExperimentStepsQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  ExperimentStepsQuery | undefined,
  ExperimentStepsQueryVariables
>;
export function useExperimentStepsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ExperimentStepsQuery,
        ExperimentStepsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ExperimentStepsQuery,
    ExperimentStepsQueryVariables
  >(ExperimentStepsDocument, options);
}
export type ExperimentStepsQueryHookResult = ReturnType<
  typeof useExperimentStepsQuery
>;
export type ExperimentStepsLazyQueryHookResult = ReturnType<
  typeof useExperimentStepsLazyQuery
>;
export type ExperimentStepsSuspenseQueryHookResult = ReturnType<
  typeof useExperimentStepsSuspenseQuery
>;
export type ExperimentStepsQueryResult = Apollo.QueryResult<
  ExperimentStepsQuery,
  ExperimentStepsQueryVariables
>;
export const ExperimentsDocument = gql`
  query Experiments($pagination: PaginationInput!) {
    experiments(pagination: $pagination) {
      collection {
        ...Experiment
      }
      total
    }
  }
  ${ExperimentFragmentDoc}
`;

/**
 * __useExperimentsQuery__
 *
 * To run a query within a React component, call `useExperimentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperimentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperimentsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useExperimentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ExperimentsQuery,
    ExperimentsQueryVariables
  > &
    (
      | { variables: ExperimentsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExperimentsQuery, ExperimentsQueryVariables>(
    ExperimentsDocument,
    options,
  );
}
export function useExperimentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExperimentsQuery,
    ExperimentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExperimentsQuery, ExperimentsQueryVariables>(
    ExperimentsDocument,
    options,
  );
}
// @ts-ignore
export function useExperimentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ExperimentsQuery,
    ExperimentsQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<ExperimentsQuery, ExperimentsQueryVariables>;
export function useExperimentsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ExperimentsQuery,
        ExperimentsQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  ExperimentsQuery | undefined,
  ExperimentsQueryVariables
>;
export function useExperimentsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ExperimentsQuery,
        ExperimentsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ExperimentsQuery, ExperimentsQueryVariables>(
    ExperimentsDocument,
    options,
  );
}
export type ExperimentsQueryHookResult = ReturnType<typeof useExperimentsQuery>;
export type ExperimentsLazyQueryHookResult = ReturnType<
  typeof useExperimentsLazyQuery
>;
export type ExperimentsSuspenseQueryHookResult = ReturnType<
  typeof useExperimentsSuspenseQuery
>;
export type ExperimentsQueryResult = Apollo.QueryResult<
  ExperimentsQuery,
  ExperimentsQueryVariables
>;
export const ExperimentDocument = gql`
  query Experiment($experiment_id: Int!) {
    experiment(experiment_id: $experiment_id) {
      ...Experiment
    }
  }
  ${ExperimentFragmentDoc}
`;

/**
 * __useExperimentQuery__
 *
 * To run a query within a React component, call `useExperimentQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperimentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperimentQuery({
 *   variables: {
 *      experiment_id: // value for 'experiment_id'
 *   },
 * });
 */
export function useExperimentQuery(
  baseOptions: Apollo.QueryHookOptions<
    ExperimentQuery,
    ExperimentQueryVariables
  > &
    (
      | { variables: ExperimentQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExperimentQuery, ExperimentQueryVariables>(
    ExperimentDocument,
    options,
  );
}
export function useExperimentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExperimentQuery,
    ExperimentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExperimentQuery, ExperimentQueryVariables>(
    ExperimentDocument,
    options,
  );
}
// @ts-ignore
export function useExperimentSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ExperimentQuery,
    ExperimentQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<ExperimentQuery, ExperimentQueryVariables>;
export function useExperimentSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ExperimentQuery,
        ExperimentQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  ExperimentQuery | undefined,
  ExperimentQueryVariables
>;
export function useExperimentSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ExperimentQuery,
        ExperimentQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ExperimentQuery, ExperimentQueryVariables>(
    ExperimentDocument,
    options,
  );
}
export type ExperimentQueryHookResult = ReturnType<typeof useExperimentQuery>;
export type ExperimentLazyQueryHookResult = ReturnType<
  typeof useExperimentLazyQuery
>;
export type ExperimentSuspenseQueryHookResult = ReturnType<
  typeof useExperimentSuspenseQuery
>;
export type ExperimentQueryResult = Apollo.QueryResult<
  ExperimentQuery,
  ExperimentQueryVariables
>;
export const BestExperimentDocument = gql`
  query BestExperiment {
    bestExperiment {
      ...Experiment
    }
  }
  ${ExperimentFragmentDoc}
`;

/**
 * __useBestExperimentQuery__
 *
 * To run a query within a React component, call `useBestExperimentQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestExperimentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestExperimentQuery({
 *   variables: {
 *   },
 * });
 */
export function useBestExperimentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BestExperimentQuery,
    BestExperimentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BestExperimentQuery, BestExperimentQueryVariables>(
    BestExperimentDocument,
    options,
  );
}
export function useBestExperimentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BestExperimentQuery,
    BestExperimentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BestExperimentQuery, BestExperimentQueryVariables>(
    BestExperimentDocument,
    options,
  );
}
// @ts-ignore
export function useBestExperimentSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    BestExperimentQuery,
    BestExperimentQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<
  BestExperimentQuery,
  BestExperimentQueryVariables
>;
export function useBestExperimentSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        BestExperimentQuery,
        BestExperimentQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  BestExperimentQuery | undefined,
  BestExperimentQueryVariables
>;
export function useBestExperimentSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        BestExperimentQuery,
        BestExperimentQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    BestExperimentQuery,
    BestExperimentQueryVariables
  >(BestExperimentDocument, options);
}
export type BestExperimentQueryHookResult = ReturnType<
  typeof useBestExperimentQuery
>;
export type BestExperimentLazyQueryHookResult = ReturnType<
  typeof useBestExperimentLazyQuery
>;
export type BestExperimentSuspenseQueryHookResult = ReturnType<
  typeof useBestExperimentSuspenseQuery
>;
export type BestExperimentQueryResult = Apollo.QueryResult<
  BestExperimentQuery,
  BestExperimentQueryVariables
>;
