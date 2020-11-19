import Link from 'next/link';
import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';

import { LinkIcon, Instagram, Twitter, Facebook, Mail } from './icons';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background: var(--color-black);
  color: var(--color-white);
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;

  > li {
    padding: 0 1rem;
  }
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

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <SocialList>
          <li>
            <a
              href="https://github.com/foxtrotco/front-end-interview-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisuallyHidden>External Link</VisuallyHidden>
              <LinkIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/foxtrotco/front-end-interview-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisuallyHidden>Instagram</VisuallyHidden>
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/foxtrotco/front-end-interview-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisuallyHidden>Twitter</VisuallyHidden>
              <Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/foxtrotco/front-end-interview-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisuallyHidden>Facebook</VisuallyHidden>
              <Facebook />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/foxtrotco/front-end-interview-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisuallyHidden>Mail</VisuallyHidden>
              <Mail />
            </a>
          </li>
        </SocialList>
      </div>
      <div>
        <Link href="/" passHref>
          <CustomLink>Terms Of Service</CustomLink>
        </Link>
        <Link href="/" passHref>
          <CustomLink>Privacy</CustomLink>
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
