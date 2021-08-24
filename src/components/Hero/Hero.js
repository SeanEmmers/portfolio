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
      In January of this year I made the decision to try and learn to program. I wanted to learn a new skill and see if it was something I could turn into a career. I have always had an interest in computers and tech and was positive I would enjoy programming. Having recently finished Makers Academy I am even more confident that this is the career for me. I have become very passionate about the industry and am incredibly excited to continue my growth within it. Currently I am continuing my learning and building projects to further my skillset as a Software Developer. My background is in Publishing & Client Support. Some of my other interests include, Bouldering, Travelling, Gigs, Cooking and Gaming!
      </SectionText>
      <Button onClick = {() => window.location = 'https://github.com/SeanEmmers'}>GitHub</Button>
    </LeftSection>
  </Section>
);

export default Hero;