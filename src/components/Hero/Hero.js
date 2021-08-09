import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm a Frontend Developer <br />
        Turning Your Paperball <br/>
        Into Paperplane
      </SectionTitle>
      <SectionText>
        Just Creating My Own Things Try To Inspire Others.
      </SectionText>
      
    </LeftSection>
  </Section>
);

export default Hero;