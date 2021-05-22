import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Wcf = () => {
  const AppContext = useContext(Context);

  const [pick7, setPick7] = useState(false);
  const [pick7Switch, setPick7Switch] = useState(false);

  const pick7An = useSpring({
    opacity: pick7Switch ? 1 : 0
  });

  const showWcf = useSpring({
    opacity: AppContext.showWcf ? 1 : 0,
    display: AppContext.showWcf ? 'flex' : 'none'
  });

  const pickSeven = e => {
    let last = AppContext.pick7;
    if (e.target.src) {
      AppContext.setPick7({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick7({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick7({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick7({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick7) {
      setPick7Switch(false);
    }
    setTimeout(() => {
      setPick7Switch(true);
    }, 250);
  };

  return (
    <animated.div style={showWcf} className='wcf' id='wcf'>
      <div className='wcr2'>
        <div className='games'>
          <div className='series'>
            <div
              id='0'
              className='team'
              style={{ background: AppContext.pick5.background }}
              // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
              onClick={e => {
                pickSeven(e);
                setPick7(true);
              }}
            >
              <div className='seed'>{AppContext.pick5.seed}</div>
              <div className='city'>{AppContext.pick5.name}</div>
              <img src={AppContext.pick5.logo} className=''></img>
            </div>
            <div
              style={{ background: AppContext.pick6.background }}
              id='0'
              className='team'
              onClick={e => {
                pickSeven(e);
                setPick7(true);
              }}
            >
              <div className='seed'>{AppContext.pick6.seed}</div>
              <div className='city'>{AppContext.pick6.name}</div>
              <img src={AppContext.pick6.logo} className=''></img>
            </div>
          </div>{' '}
        </div>
        <div className='winners'>
          {pick7 ? (
            <animated.div style={pick7An}>
              <div
                style={{ background: `${AppContext.pick7.background}` }}
                className='winner'
              >
                {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
                <div className='seed'>{AppContext.pick7.seed}</div>
                <div className='city'>{AppContext.pick7.name}</div>
                <img src={AppContext.pick7.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick5.name}</div>
              <div>/</div>
              <div>{AppContext.pick6.name}</div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default Wcf;
