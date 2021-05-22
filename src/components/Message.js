import React, { useContext } from 'react';
import { Context } from './context/AppContext';
import { animated, useSpring } from 'react-spring';

export const Message = () => {
  const AppContext = useContext(Context);

  const showMessage = useSpring({
    transform: AppContext.showMessage ? 'translateX(0%)' : 'translateX(100%)',
    display: AppContext.messageDis ? 'grid' : 'none'
  });

  return (
    <animated.div style={showMessage} className='message'>
      <div className='message-text'>Pick all games to continue...</div>
    </animated.div>
  );
};

export default Message;
