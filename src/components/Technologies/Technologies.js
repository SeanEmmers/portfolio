import React from 'react';
import { DiFirebase, DiReact, DiRubyRough } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br/>
            Bootstrap<br/>
            Capybara<br/>
            Bulma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Ruby On Rails <br/>
            PostgreSQL<br/>
            Sinatra <br/>
            RSpec Testing Framework<br/>
            Jasmine Testing Framework <br/>
            React Router
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRubyRough size='3rem' />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Ruby <br/>
            JavaScript <br/>
            JSX <br/>
            Python <br/>
            HTML <br/>
            CSS <br/>
            SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
