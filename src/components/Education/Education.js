import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaUniversity, FaSchool } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyles';

const Education = () => {
  return(
    <Section id='education'>
      <SectionDivider /><br/>
      <SectionTitle>Education</SectionTitle>
      <List>
      <ListItem>
        <AiOutlineCode size='3rem' />
        <ListContainer>
          <ListTitle>Makers Academy <br/> (May 2021 - August 2021)</ListTitle>
          <ListParagraph>
            A 16 week intense coding bootcamp in London<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaUniversity size='3rem' />
        <ListContainer>
          <ListTitle>Brunel University<br/></ListTitle>
          <ListParagraph>
            Year One - History BA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaSchool size='3rem' />
        <ListContainer>
          <ListTitle>A Levels <br/></ListTitle>
          <ListParagraph>
            - History - B<br/>
            - Government & Politics - B<br/>
            - Economics - B<br/>
            - General Studies - B<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaSchool size='3rem' />
        <ListContainer>
          <ListTitle>GCSE's <br/></ListTitle>
          <ListParagraph>
            10 GCSE's grades A - C<br/>
            including Maths, English & 3 Sciences
  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>
    </Section>
  )
}

export default Education;