import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { userLogin } from "../apollo";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import PageTitle from "../components/PageTitle";
import routes from "../routes";

const Title = styled.h1``;

const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;

function Login() {
    const location = useLocation();

    const { register, handleSubmit, formState, getValues, setError, clearErrors } = useForm({
        mode: "onChange",
        defaultValues: {
            username: location?.state?.username || "",
            password: location?.state?.password || "",
        }
    });

    const onCompleted = (data) => {
        const { login: { ok, error, token }} = data;
        
        if (!ok) {
            return setError("result", {
                message: error,
            });
        }

        if (token) {
            userLogin(token);
        }
    }

    const [login, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    });

    const onValid = (data) => {
        if (loading) {
            return;
        }
        const { username, password } = getValues();
        login({
            variables: {
                username,
                password
            }
        })
    }

    const clearLoginError = () => clearErrors("result");

    return (
        <AuthLayout>
            <PageTitle title="Log in" />
            <Title>Login</Title>
            <FormBox>
                <p>{location?.state?.message}</p>
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
                                onChange: clearLoginError,
                            }
                        )}                        
                        hasError={Boolean(formState.errors?.username?.message)}                        
                        type="text" 
                        placeholder="Username" 
                    />
                    <FormError message={formState.errors?.username?.message} />
                    <Input 
                        {...register(
                            "password",
                            {
                                required: "Password is required.",
                                onChange: clearLoginError,
                            }
                        )}                        
                        hasError={Boolean(formState.errors?.password?.message)} 
                        type="password" 
                        placeholder="Password" 
                    />
                    <FormError message={formState.errors?.password?.message} />
                    <Button type="submit" value={loading ? "Loading..." : "Log in now"} disabled={!formState.isValid || loading}>Log in now!</Button>
                    <FormError message={formState.errors?.result?.message} />
                </form>

            </FormBox>
            <BottomBox
                cta="cretate Account"
                link={routes.signUp}
                linkText="Sign Up" 
            />
        </AuthLayout>
    );
}

export default Login;

