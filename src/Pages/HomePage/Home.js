import React from 'react';
import { homeObjOne, homeObjTwo,homeObjThree,homeObjFour} from './Data';
import { InfoSection } from '../../Components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>

    </>
  );
}

export default Home;
