import React, { useContext } from 'react';
import { Context } from './context/AppContext';
import WcRound1 from './WcRound1';
import WcRound2 from './WcRound2';
import Wcf from './Wcf';
import EcRound1 from './EcRound1';
import EcRound2 from './EcRound2';
import Ecf from './Ecf';
import Finals from './Finals';
import FinishedBracket from './FinishedBracket';
export const Bracket = () => {
  const AppContext = useContext(Context);

  return (
    <div className='bracket'>
      <WcRound1></WcRound1>
      <WcRound2></WcRound2>
      <Wcf></Wcf>
      <EcRound1></EcRound1>
      <EcRound2></EcRound2>
      <Ecf></Ecf>
      <Finals></Finals>
      <FinishedBracket></FinishedBracket>
    </div>
  );
};

export default Bracket;
