import { gql } from "@apollo/client";


export const CREATE_POST = gql`
    mutation createPost($title: String!, $mark: String!, $date: String!, $length: String!, $price: String!, $image: String!, $description: String!, $location: String!){
        createPost(title: $title, mark: $mark, date: $date, length: $length, price: $price, image: $image, description: $description,  location: $location)
    }
`;