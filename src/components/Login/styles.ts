import styled from "styled-components";
import Image from "../../assets/img/image.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;
    border: 1px solid red;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  img {
    height: 100vh;
    display: flex;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #000;
`;

export const LoginContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  border: 1px solid red;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;

  input {
    margin: 15px;
    display: flex;
    align-items: center;
  }
`;

export const ButtonRemember = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid blue;

  input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
`;

export const Footer = styled.div`
  border: 1px solid #000;
`;
