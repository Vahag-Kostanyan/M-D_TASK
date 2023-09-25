import { gql } from "@apollo/client";

export const GET_POSTS_LIST = gql`
    query{
         posts {
            id,
            title,
            price,
            mark,
            images{
                image_url
            }
        }
    }
`