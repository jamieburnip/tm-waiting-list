import styled from "styled-components";
import mq from "@style/mq";
import { colors } from "@consts/style";
import { blink } from "@style/animations";

// Layout Elements
export const Wrapper = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

// Typeography Elements
export const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const P = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

// Form Elements
export const InputGroup = styled.div`
  position: relative;
  margin: 0 0 1.4rem 0;
  position: relative;
`;

export const Label = styled.label`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 0.3rem;
  display: block;
  font-weight: bold;
  color: #768692;
  text-align: left;
  text-transform: uppercase;
  text-transform: none;

  ${mq.md`
    font-size: 1.1rem;
  `}

  ${mq.lg`
    font-size: 1.3rem;
  `}
`;

export const InputError = styled.span`
  display: inline-block;
  color: ${colors.error};
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  font-size: 1.6rem;
  line-height: 1.4;
  padding-right: 1.4rem;
  padding-left: 1.4rem;
  width: 100%;
  height: 44px;
  color: #475058;
  background: #fff;
  border: 1px solid #a3a8ac;
  border-radius: 1px;
  appearance: none;
  padding: 0.4rem 0.6rem 0.4rem 0.6rem;
  width: 100%;
  height: 36px;
`;

export const Button = styled.button`
  font-size: 1rem;
  line-height: 34px;
  padding: 0 1.4rem 0 1.4rem;
  display: inline-block;
  min-height: 34px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 1px;
  box-shadow: none;
  color: ${colors.white};
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  text-transform: capitalize;
  width: 100%;

  ${mq.md`
    font-size: 1.1rem;
  `}

  ${mq.lg`
    font-size: 1.3rem;
  `}
`;

// Misc Elements
export const Loading = styled.span`
  display: inline-flex;
  align-items: center;
  height: auto;

  & span {
    animation-name: ${blink};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${colors.white};
    display: inline-block;
    margin: 0 1px;
  }

  & span:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  & span:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`;
