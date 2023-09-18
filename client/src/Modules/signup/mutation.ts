import { gql } from "@apollo/client";


export const REGISTRATE_USER = gql`
    mutation registration($name: string!, $phone: string!, $email: string!, $password: string!,){
        registration(name: $name, phone: $phone, email: $email, password: $password)
    }
`