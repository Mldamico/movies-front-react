import { styled } from "styled-components";
import { SidebarNav } from "./SidebarNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-300);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarNav />
    </StyledSidebar>
  );
};
