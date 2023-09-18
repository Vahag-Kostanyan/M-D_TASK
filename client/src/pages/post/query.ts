import { gql } from "@apollo/client";

export const GET_POST = gql`
    query GetPostById ($postId: ID!){
         post(id: $postId) {
            id,
            title,
            price,
            mark,
            users {
                name
            }
        }
    }
`