/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
};

export type Boat = {
  __typename?: 'Boat';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  length: Scalars['Float']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sold: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

/** A paginated list of Boat items. */
export type BoatPaginator = {
  __typename?: 'BoatPaginator';
  /** A list of Boat items. */
  data: Array<Boat>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  /** Find a single user by an identifying attribute. */
  boat?: Maybe<Boat>;
  boats: BoatPaginator;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryBoatArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryBoatsArgs = {
  first: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type BoatsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type BoatsQuery = { __typename?: 'Query', boats: { __typename?: 'BoatPaginator', data: Array<{ __typename?: 'Boat', id: string, name: string, description?: string | null, price: number, sold: number }>, paginatorInfo: { __typename?: 'PaginatorInfo', currentPage: number, hasMorePages: boolean } } };

export type BoatQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BoatQuery = { __typename?: 'Query', boat?: { __typename?: 'Boat', id: string, name: string, description?: string | null, price: number, year: number, length: number, location: string, sold: number } | null };


export const BoatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"boats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sold"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}}]}}]}}]}}]} as unknown as DocumentNode<BoatsQuery, BoatsQueryVariables>;
export const BoatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"boat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"sold"}}]}}]}}]} as unknown as DocumentNode<BoatQuery, BoatQueryVariables>;