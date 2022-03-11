import React from 'react';
import { homeObjOne,} from './Data';
import { InfoSection } from '../../Components';
import { EmailForm } from '../../Components';

const Contact = () => {
  return (
    <>
      <InfoSection {...homeObjOne} ></InfoSection>
      <EmailForm />

    </>
  );
}

export default Contact;
