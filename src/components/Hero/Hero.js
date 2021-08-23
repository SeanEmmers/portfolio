import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Sean Phillips Portfolio
      </SectionTitle>
      <SectionText>
        In here write a short bio, one or two sentences...
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;