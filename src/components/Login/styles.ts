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
  height: 31rem;
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
    font-size: 1rem;
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
  gap: 2.5rem;

  input {
    width: 25rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 1rem;
    border: 1px solid var(--borderinput);
    border-radius: 0.5rem;
  }

  span {
    font-size: 1rem;
    color: var(--titleinput);
  }

  p {
    font-size: 1rem;
    position: absolute;
    color: var(--error);
  }
`;

export const RememberFooter = styled.div`
  width: 25rem;
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

  > div {
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 600;
      color: var(--remember);
    }
  }

  button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    background: none;
    color: var(--footerbutton);
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ButtonLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  button#login {
    width: 25rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    background: var(--loginbutton);
    color: var(--white);
    transition: filter 0.1s;
    text-decoration: none;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button#google {
    width: 25rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    background: var(--googlebutton);
    color: var(--white);
    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }

    > img {
      display: flex;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 10px;
    }
  }
`;

export const Footer = styled.div`
  width: 25rem;
  height: 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  span {
    color: var(--footer);
    font-size: 1rem;
  }

  button {
    color: var(--footerbutton);
    border: none;
    background: none;
    font-size: 1rem;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
