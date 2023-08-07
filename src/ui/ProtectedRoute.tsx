import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  if (isLoading)
    return (
      <FullPage>
        <LoadingSpinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
};
