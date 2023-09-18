import { gql } from "@apollo/client";

export const GET_POSTS_LIST = gql`
    query{
         {
            id,
            title,
            price
        }
    }
`