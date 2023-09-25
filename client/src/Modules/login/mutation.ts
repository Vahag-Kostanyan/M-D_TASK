import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation($email: String!, $password: String!, $device: String!){
        login(email: $email, password: $password, device: $device)
    }
`