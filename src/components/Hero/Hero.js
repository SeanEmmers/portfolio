import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Sean Phillips' Portfolio
      </SectionTitle>
      <SectionText>
        An aspiring Software Developer and former student of the Makers Acedemy in London. Here you can find key infomation about my skills, experiences and projects.
      </SectionText>
      <Button onClick = {() => window.location = 'https://github.com/SeanEmmers'}>GitHub</Button>
    </LeftSection>
  </Section>
);

export default Hero;