import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";
import Icon from "../../assets/icon/google_icon.svg";

import {
  Container,
  ImageContainer,
  FormContainer,
  LoginContent,
  Title,
  Form,
  RememberFooter,
  ButtonLogin,
  Footer,
} from "./styles";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Este campo é obrigatório"),
  })
  .required();

export const Login = () => {
  const navigate = useNavigate();
  const [autenticate, setAutenticate] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      // console.log(response.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData: Inputs) {
    const account =
      Response && userData ? "/autenticate" : alert("No records found");
    console.log(account);
    // navigate("/autenticate");
  }

  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <LoginContent>
          <Title>
            <span>Welcome back</span>
            <strong>Login to your account</strong>
          </Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>Email</span>
              <input
                type="text"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />
              {errors.email && <section>{errors.email?.message}</section>}
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                placeholder="Inform your Password"
                {...register("password", { required: true })}
              />
              {errors.password && <section>{errors.password?.message}</section>}
            </label>
            <RememberFooter>
              <div>
                <input type="radio" />
                <span>Remember me</span>
              </div>
              <button>Forgot password?</button>
            </RememberFooter>
            <ButtonLogin>
              <button id="login" type="submit">
                Login Now
              </button>
              <button id="google" type="submit">
                <img src={Icon} alt="Icon Google" />
                Or sign with google
              </button>
            </ButtonLogin>
          </Form>
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
