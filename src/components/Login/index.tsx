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
          <Footer>
            <ButtonContent>
              <button id="login" type="submit">
                Login Now
              </button>
              <button type="submit">
                <img src={Icon} alt="Icon Google" />
                Or sign with google
              </button>
            </ButtonContent>
            <span>
              Dont have an account?
              <button>Join free today</button>
            </span>
          </Footer>
        </LoginContent>
      </FormContainer>
      {/* <Outlet /> */}
    </Container>
  );
};
