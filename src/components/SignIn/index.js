import React from 'react'
import { Container, Form, FormButton, FormContent, FormHeading, FormInput, FormLabel, FormWrap, Icon, Text} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/" >PetMe</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormHeading>Sign in to your account</FormHeading>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
