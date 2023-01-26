
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import PageTitle from "../components/PageTitle";
import routes from "../routes";

const Title = styled.h1`
`;

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount($username: String!, $email: String!, $name: String, $password: String!) {
        createAccount(username: $username, email: $email, name: $name, password: $password) {
            ok
            error
        }
    }
`;

const SignUp = () => {
    const { register, handleSubmit, formState, getValues } = useForm({
        mode: "onChange",
    });

    const history = useHistory();
    
    const onCompleted = (data) => {
        const { username, password } = getValues();

        const { createAccount: { ok, error }} = data;
        console.log(error);
        
        if (!ok) {
            return;
        }

        history.push(routes.home, { message: "Account created. please login!", username, password });
    }

    const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
        onCompleted,
    })

    const onValid = (data) => {
        if (loading) {
            return;
        }

        createAccount({
            variables: {
                ...data,
            }
        })
    }

    return (
        <AuthLayout>
            <PageTitle title="Sign Up" />
            <Title>Sign Up</Title>
            <FormBox>
                <form onSubmit={handleSubmit(onValid)}>
                    <Input 
                        {...register(
                            "username",
                            {
                                required: "Username is required.",
                                minLength: {
                                    value: 5,
                                    message: "Username should be longer than 5 characters."
                                },
                            }
                        )}
                        hasError={Boolean(formState.errors?.username?.message)}                     
                        type="text" 
                        placeholder="Username" 
                    />
                    <Input 
                        {...register(
                            "email",
                            {
                                required: "Password is required.",
                            }
                        )}
                        hasError={Boolean(formState.errors?.email?.message)}                        
                        type="email" 
                        placeholder="E-mail" 
                    />
                    <Input 
                        {...register(
                            "name",
                            
                        )} 
                        hasError={Boolean(formState.errors?.name?.message)}                    
                        type="text" 
                        placeholder="Name" 
                    />
                    <Input 
                        {...register(
                            "password",
                            {
                                required: "Password is required.",
                            }
                        )}
                        hasError={Boolean(formState.errors?.password?.message)}                     
                        type="password" 
                        placeholder="Password" 
                    />
                    <Button disabled={!formState.isValid || loading}>{loading ? "Loading..." : "Sign Up!!"}</Button>
                </form>

            </FormBox>
            <BottomBox
                cta="Log in now"
                link={routes.home}
                linkText="Login" 
            />
        </AuthLayout>
    );
}

export default SignUp;


