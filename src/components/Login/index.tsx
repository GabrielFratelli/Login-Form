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
  ButtonLogin,
  Footer,
} from "./styles";

export const Login = () => {
  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <LoginContent>
          <Title>
            <span>Welcome back</span>
            <strong>Login to your account</strong>
          </Title>
          <Form>
            <label>
              <span>Email</span>
              <input type="text" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
          </Form>
          <ButtonRemember>
            <input type="checkbox" />
            <span>Remember me</span>
            <button>Forgot password?</button>
          </ButtonRemember>
          <ButtonLogin>
            <button id="login" type="submit">
              Login Now
            </button>
            <button id="google" type="submit">
              <img src={Icon} alt="Icon Google" />
              Or sign with google
            </button>
          </ButtonLogin>
        </LoginContent>
        <Footer>
          <span>Dont have an account?</span>
          <button>Join free today</button>
        </Footer>
      </FormContainer>
      <Outlet />
    </Container>
  );
};
