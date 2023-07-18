import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 5rem;
  border-bottom: 1px solid var(--color-grey-300);
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1 className="text-center">Movies Api</h1>
    </StyledHeader>
  );
};
