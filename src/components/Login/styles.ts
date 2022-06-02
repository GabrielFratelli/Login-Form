import styled from "styled-components";
import Image from "../../assets/img/image.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;
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
  justify-content: center;
  flex-direction: column;
`;

export const LoginContent = styled.div`
  height: 28rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 1.2rem;
    color: var(--subtitle);
  }

  strong {
    font-size: 2rem;
    color: var(--title);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;

  input {
    width: 23rem;
    height: 4rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 1rem;
    border: 2px solid var(--borderinput);
    border-radius: 0.5rem;
  }

  span {
    font-size: 1.2rem;
    color: var(--titleinput);
  }
`;

export const ButtonRemember = styled.div`
  width: 23rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    color: var(--checkbox);
  }

  span {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-right: 5rem;
    font-weight: 600;
    color: var(--remember);
  }

  button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    background: none;
    color: var(--footerbutton);
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  gap: 1rem;

  button#login {
    width: 23rem;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
  }
  button {
    width: 23rem;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
  }
`;

export const Footer = styled.div`
  border: 1px solid #000;
`;
