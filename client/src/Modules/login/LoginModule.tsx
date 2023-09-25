import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import Content from './components/Content';
import { formType } from './types';
import { useMutation } from '@apollo/client';
import { LOGIN } from './mutation';
import ErrorAlert from '../../components/alerts/ErrorAlert';

function LoginModule(): JSX.Element {
    const [form, setForm] = useState<formType>({
        email: '',
        password: '',
    });
    const navigation = useNavigate();

    const [actionLogin, { error }] = useMutation(LOGIN);

    const login = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        try {
            const response = await actionLogin({
                variables: { ...form, device: "web" }
            });

            localStorage.setItem('accessToken', response.data.login);
            navigation('/profile');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            {error?.message ? (
                <ErrorAlert message={error?.message} />
            ) : (
                <></>
            )}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Boat365
                </Link>
                <Content form={form} setForm={setForm} login={login} />
            </div>
        </section>
    )
}

export default LoginModule