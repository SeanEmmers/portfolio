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
        In January of this year I made the decision to try and learn to program. I wanted to learn a new skill and see if it was something I could turn into a career. I have always had an interest in computers and tech and was positive I would enjoy programming. Having recently finished Makers Academy I am even more confident that this is the career for me. I have become very passionate about the industry and am incredibly excited to continue my growth within it. Currently I am continuing my learning and building projects to become a Software Developer. Some of my other interests include, Bouldering, Travelling, Gigs, Cooking and Gaming!
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
            - I took on the resposibility to be left alone for over a week at a time as the only person on the property, using my initiative to find solutions to problems <br/>
            - Able to get along with people in a small area for a long period of time <br/>
            - This work was an amazing opportunity to learn about myself and to have to privilidge to live inside an Indiginous community in a remote area of Australia, it is an experience I will never forget
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
            - Managing the online website, creating product listing and sending out orders <br/>
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
            - Learnt valuable lessons about the world of work <br/>
            - Developed financial skills, earning and saving money <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>

    </Section>
  );
};

export default AboutMe;
