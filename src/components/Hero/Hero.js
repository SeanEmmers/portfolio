import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Sean Phillips' Portfolio
      </SectionTitle>
      <SectionText>
        I am an aspiring Software Developer and a former student of the Makers Acedemy in London. Here you can find key infomation about my skills, experiences and projects.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;