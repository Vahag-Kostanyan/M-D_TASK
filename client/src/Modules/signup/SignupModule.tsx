import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react'
import { REGISTRATE_USER } from './mutation';
import { formType } from './types';
import Content from './components/Content';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/alerts/ErrorAlert';

function SignupModule() {
    const [form, setForm] = useState<formType>({
        name: 'test',
        phone: '+37498696969',
        bank_account: '1234567891234567',
        email: 'test@mail.com',
        password: '123456',
    });

    const [registrationUser, {error}] = useMutation(REGISTRATE_USER);
    const navigation = useNavigate();

    const registration = async (event: FormEvent)  => {
        event.preventDefault();

        try{
            const response = await registrationUser({
                variables: {...form}
            });     

            localStorage.setItem('accessToken', response.data.signup);
            navigation('/profile');
        }catch(error) {
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
                <Content form={form} setForm={setForm} registration={registration} />
            </div>
        </section>
    )
}

export default SignupModule