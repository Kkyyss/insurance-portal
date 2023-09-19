import { useCallback } from "react";

import styled from "@emotion/styled";

import { signOut, useSession } from "next-auth/react";

import { Button } from "antd";

const HeaderRoot = styled(`header`)`
  left: 0;
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const HeaderContainer = styled("div")`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const NavRoot = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  max-width: 1024px;
`;

const ListItem = styled("div")`
  display: flex;
`;

const ListActions = styled("div")`
  display: flex;
`;

const Space = styled("div")`
  flex: 1 1 auto;
`;

export function Header() {
  const { data, status } = useSession();

  const signOutButtonOnClicked = useCallback(() => {
    signOut({
      callbackUrl: "/login"
    });
  });

  const isAuthenticated = status === "authenticated";
  return (
    <HeaderRoot>
      <HeaderContainer>
        <NavRoot>
          {isAuthenticated && (
            <ListItem>{`Welcome Back, ${data.user.name}`}</ListItem>
          )}
          <Space />
          <ListActions>
            {isAuthenticated && (
              <Button onClick={signOutButtonOnClicked}>Sign Out</Button>
            )}
          </ListActions>
        </NavRoot>
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default Header;
