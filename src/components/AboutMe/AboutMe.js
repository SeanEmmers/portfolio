import React from 'react';
import { ListTitle } from './AboutMeStyles';
import { List, ListContainer, ListItem, ListParagraph } from '../Technologies/TechnologiesStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const AboutMe = () => {

  return (
    <Section id='about'>
      <SectionDivider /><br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        An aspiring Software Developer and former student of the Makers Academy in London. Here you can find key infomation about my skills and experiences
      </SectionText>
      <SectionTitle>Work Experience</SectionTitle>
      <List>
      <ListItem>
        <ListContainer>
          <ListTitle>
            North Parade Publishing - Shopfitting <br/>
            (July 2020 - April 2021)
          </ListTitle>
          <ListParagraph>
            <br/>
            - Working during the UK lockdown to help with the refurbishment of the company office <br/>
            - Helping out with logistical challenges when the warehouse was going through a busy period<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Place Settings - Team Leader & Offsider <br/>
            (November 2018 - January 2020)
          </ListTitle>
          <ListParagraph>
            <br/>
            - I joined as an Offsider. During my time at Place Settings I took on an increasing amount of resposibility, becoming the youngest Team Leader in the company. <br/>
            - Delivering designer hire furniture for high profile private and corporate events, Melbourne Open, Formula 1 and The Presidents Cup <br/>
            - Leading small teams on site, having to solve complex issues quickly and to the satisfaction of the client <br/>
            - Maintaining a professional attitude while working discreetly and quickly in busy environments
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Regional Work Australia - Deckhand & Farmhand <br/>
            (April 2018 - October 2018)
          </ListTitle>
          <ListParagraph>
            <br/>
            - I took on the responsibility to be left alone for over a week at a time as the only person on the property, using my initiative to find solutions to problems <br/>
            - Able to get along with people in a small area for a long period of time <br/>
            - This work was an amazing opportunity to learn about myself and to have the privilege to live inside an Indigenous community in a remote area of Australia, it is an experience I will never forget
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            North Parade Publishing - Operations Assistant <br/>
            (August 2016 - February 2018)
          </ListTitle>
          <ListParagraph>
            <br/>
            - Managing the online website, creating product listings and sending out orders <br/>
            - IT support for the office <br/>
            - Using InDesign to create a weekly marketing email that would circulate to our entire customer base informing them of the new products that had arrived into the warehouse that week
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Robert Frederick - Operations Assistant <br/>
            (July 2014 to February 2015)
          </ListTitle>
          <ListParagraph>
            <br/>
            - Working at and constructing stands at large UK trade shows - Autumn & Spring fair (NEC), Harrogate Book Fair & London Book Fair <br/>
            - Providing Assistance with building and restoration projects <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Sainsbury's Supermarket - Customer Service Assistant <br/>
            (October 2011 to September 2013)
          </ListTitle>
          <ListParagraph>
            <br/>
            - Learnt valuable lessons about the world of work, including developing strong customer service skills <br/>
            - Developed financial skills, earning and saving money <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>

    </Section>
  );
};

export default AboutMe;
