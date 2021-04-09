import styled from "styled-components";
import Logo from "@components/Logo";
import mq from "@style/mq";
import { colors, lg } from "@consts/style";

const HeaderWrapper = styled.div`
  background-color: ${colors.primary};
  background-image: ${lg.azure};
  margin-bottom: 5rem;
`;

// The main header for the application.
const AppHeader = styled.header`
  position: relative;
  top: 0px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;

  ${mq.md`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `}

  ${mq.lg`
    padding: 24px 40px;
  `}
`;

const LogoLink = styled.a`
  width: 180px;
  height: 32px;

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -14px;
  padding: 10px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <AppHeader data-testid="stickyHeader">
        <LogoLink href="https://www.ticketmaster.co.uk/">
          <Logo />
        </LogoLink>
      </AppHeader>
    </HeaderWrapper>
  );
}
