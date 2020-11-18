import Link from 'next/link';
import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';

import { Menu, Basket } from './icons';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--color-black);
  color: var(--color-white);
`;

const NavContainer = styled.nav`
  flex-basis: 25%;

  > ul {
    list-style: none;
    display: flex;
    padding-left: 0;

    @media (max-width: 640px) {
      display: none;
    }
  }

  > div {
    display: none;

    @media (max-width: 640px) {
      display: flex;
    }
  }
`;

const BrandContainer = styled.div`
  flex-basis: 50%;
  text-align: center;

  > span {
    font-size: 1.5rem;
  }
`;

const CartContainer = styled.div`
  flex-basis: 25%;
  text-align: right;
`;

const CustomLink = styled.a`
  position: relative;
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;

  &::before {
    right: 50%;
  }

  &::after {
    left: 50%;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    background: var(--color-white);
    width: 0;
    height: 1px;
    transition: width 200ms ease-out;
  }

  &:hover::before,
  &:hover::after {
    width: 50%;
    transition: width 200ms ease-in;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--color-white);
  }

  /* Firefox support for :focus-visible */
  &:-moz-focusring {
    box-shadow: 0 0 0 1px var(--color-white);
  }
`;

const CustomButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:focus:not(.focus-visible) {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--color-white);
  }

  /* Firefox support for :focus-visible */
  &:-moz-focusring {
    box-shadow: 0 0 0 1px var(--color-white);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>
            <Link href="/" passHref>
              <CustomLink>Stores</CustomLink>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <CustomLink>Contact Us</CustomLink>
            </Link>
          </li>
        </ul>
        <div>
          <CustomButton>
            <VisuallyHidden>Toggle Menu</VisuallyHidden>
            <Menu />
          </CustomButton>
        </div>
      </NavContainer>
      <BrandContainer>
        <span>Foxtrot</span>
      </BrandContainer>
      <CartContainer>
        <CustomButton>
          <VisuallyHidden>Basket</VisuallyHidden>
          <Basket />
        </CustomButton>
      </CartContainer>
    </HeaderContainer>
  );
};

export default Header;
