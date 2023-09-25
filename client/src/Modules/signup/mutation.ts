import { gql } from "@apollo/client";


export const REGISTRATE_USER = gql`
    mutation signup($name: String!, $phone: String!, $bank_account: String!, $email: String!, $password: String!){
        signup(name: $name, phone: $phone, bank_account: $bank_account, email: $email, password: $password)
    }
`