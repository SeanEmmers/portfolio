import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href = "mailto:seanphillips9696@gmail.com"> Contact </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <SocialContainer>
        <SocialIcons href='https://github.com/SeanEmmers'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://github.com/SeanEmmers'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </SocialContainer>  
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
