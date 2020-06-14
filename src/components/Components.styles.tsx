import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #e5e5e5;
    padding: 16px;
  }

  h1 {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 52px;
    color: #1F2041;
  }

  @media (min-width: 992px) {
    html {
      padding: 16px 32px;
    }
  }
  @media (min-width: 1200px) {
    html {
      padding: 16px 72px;
    }
  }
  @media (min-width: 1400px) {
    html {
      padding: 16px 20%;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 420px;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  color: #1f2041;
  margin-bottom: 16px;
`;

export const Body = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(31, 32, 65, 0.75);
  margin-bottom: 16px;

  & > b {
    color: rgba(31, 32, 65);
  }
`;

export const Caption = styled(Body)`
  color: rgba(31, 32, 65, 0.5);
  font-style: italic;
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  border: none;
  border-radius: 22px;
  padding: 14px 21px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    opacity: 0.85;
  }

  :active {
    background: linear-gradient(180deg, #9379c9 0%, #627bd1 100%);
  }
`;

export const TextInput = styled.input.attrs(() => ({ type: 'text' }))`
  width: 320px;
  max-width: 100%;
  height: 44px;
  background: #ffffff;
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: rgba(31, 32, 65, 0.75);
  padding: 12px;
  margin-bottom: 24px;

  :hover,
  :focus {
    border: 1px solid rgba(31, 32, 65, 0.5);
    outline: none;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(31, 32, 65, 0.35);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(31, 32, 65, 0.35);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(31, 32, 65, 0.35);
  }
`;

export const Footer = styled(Caption)`
  width: 100%;
  font-style: unset;
  font-size: 14px;
  line-height: 24px;
  margin-top: 64px;

  & > a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    color: #1f2041;
  }
`;
