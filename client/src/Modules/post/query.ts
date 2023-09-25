import { gql } from "@apollo/client";

export const GET_POST = gql`
    query GetPostById ($postId: ID!){
         post(id: $postId) {
            id,
            title,
            price,
            mark,
            description,
            length,
            date,
            users {
                phone,
                email
            }
            images{
                image_url
            }
        }
    }
`