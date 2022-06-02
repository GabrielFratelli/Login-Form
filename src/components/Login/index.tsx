import React from "react";
import { Outlet } from "react-router-dom";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import Icon from "../../assets/icon/google_icon.svg";

import {
  Container,
  ImageContainer,
  FormContainer,
  LoginContent,
  Title,
  Form,
  ButtonRemember,
  ButtonContent,
  Footer,
} from "./styles";

export const Login = () => {
  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <LoginContent>
          <Title>
            <p>Welcome back</p>
            <strong>Login to your account</strong>
          </Title>
          <Form>
            <label>
              Email:
              <input type="text" placeholder="Informe seu email" />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Informe sua senha" />
            </label>
          </Form>
          <ButtonRemember>
            <input type="checkbox" />

            <button>Forgot password?</button>
          </ButtonRemember>
          <ButtonContent>
            <button type="submit">Login Now</button>
            <button type="submit">
              <img src={Icon} alt="Icon Google" />
              Or sign with google
            </button>
          </ButtonContent>
          <Footer>
            <p>
              Dont have an account?
              <button>Join free today</button>
            </p>
          </Footer>
        </LoginContent>
      </FormContainer>
      {/* <Outlet /> */}
    </Container>
  );
};
