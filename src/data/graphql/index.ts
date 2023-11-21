
import { TypedDocumentNode, gql } from "@apollo/client";
import { Boat, BoatPaginator } from "../../__generated__/graphql";

interface GetBoatsData {
    boats: BoatPaginator;
}

interface GetBoatsDataVars {
    page: number;
    name?: string;
}

export const GET_BOATS: TypedDocumentNode<GetBoatsData, GetBoatsDataVars>  = gql(`
    query boats($page: Int!, $name: String) {
        boats(first: 5, page: $page, name: $name) {
            data {
                id
                name
                description
                year
                length
                price
                sold
                location
            }
            paginatorInfo {
                currentPage
                hasMorePages
            }
        }
    }
`);

interface GetBoatData {
    boat: Boat;
}

interface GetBoatData {
    id: number;
}
export const GET_BOAT: TypedDocumentNode<GetBoatData, GetBoatData>   = gql(`
  query boat($id: ID!) {
    boat(id: $id) {
        id
        name
        description
        price
        year
        length
        location
        sold
    }
  }
`);
