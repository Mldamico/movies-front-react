import {
  MdOutlineLocalMovies,
  MdOutlinePersonOutline,
  MdOutlineRecentActors,
  MdOutlineScreenshotMonitor,
} from "react-icons/md";
import { GiSupersonicArrow } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

interface SidebarItemsProps {
  to: string;
  Icon: JSX.Element;
  label: string;
}

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-600);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export const SidebarNav = () => {
  return (
    <nav>
      <NavList>
        {sidebarItems.map((item, i) => (
          <SidebarItem
            key={i}
            label={item.label}
            to={item.to}
            Icon={item.Icon}
          />
        ))}
      </NavList>
    </nav>
  );
};

const sidebarItems: SidebarItemsProps[] = [
  {
    label: "Movies",
    Icon: <MdOutlineLocalMovies />,
    to: "/movies",
  },
  {
    label: "Actors",
    Icon: <MdOutlineRecentActors />,
    to: "/actors",
  },
  {
    label: "Genres",
    Icon: <GiSupersonicArrow />,
    to: "/genres",
  },
  {
    label: "Cinemas",
    Icon: <MdOutlineScreenshotMonitor />,
    to: "/cinemas",
  },
  {
    label: "Login",
    Icon: <MdOutlinePersonOutline />,
    to: "/login",
  },
];

const SidebarItem = ({ label, Icon, to }: SidebarItemsProps) => {
  return (
    <li>
      <StyledNavLink to={to}>
        {Icon}
        <span>{label}</span>
      </StyledNavLink>
    </li>
  );
};
