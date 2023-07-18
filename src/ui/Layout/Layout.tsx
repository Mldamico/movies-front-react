import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { styled } from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
`;

const StyledMain = styled.main`
  padding: 4rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />

      <Sidebar />
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
    </StyledLayout>
  );
};
