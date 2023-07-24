import {
  Dispatch,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { styled } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

interface Toggle {
  onClick: (e: React.ChangeEvent) => void;
}

const StyledToggle = styled.button<Toggle>`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

interface IList {
  position: {
    x: number;
    y: number;
  };
  ref: RefObject<HTMLDivElement>;
}

const StyledList = styled.ul<IList>`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

interface MenuProp {
  children: React.ReactNode;
}

interface MenusContextProps {
  openId?: number;
  close: () => void;
  open: (id: number) => void;
  position: { x: number; y: number } | null;
  setPosition: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}

const MenusContext = createContext<MenusContextProps | null>(null);

export const Menus = ({ children }: MenuProp) => {
  const [openId, setOpenId] = useState<number>();
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const close = () => setOpenId(-1);
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
};

interface ToggleProps {
  id?: number;
}

interface ButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
}

function Toggle({ id }: ToggleProps) {
  const { open, close, openId, setPosition } = useContext(
    MenusContext
  ) as MenusContextProps;

  function handleClick(e: React.ChangeEvent) {
    const rect = e.target.closest("button")!.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect?.height + 8,
    });

    if (openId === -1 || openId !== id) {
      open(id!);
    } else {
      close();
    }
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}
interface ListProps {
  id?: number;
  children: React.ReactNode;
}
function List({ id, children }: ListProps) {
  const { openId, position, close } = useContext(
    MenusContext
  ) as MenusContextProps;
  const ref = useOutsideClick(close);
  if (openId !== id || !position) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}
function Button({ children, icon, onClick }: ButtonProps) {
  const { close } = useContext(MenusContext) as MenusContextProps;
  const handleClick = () => {
    onClick?.();
    close();
  };
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
