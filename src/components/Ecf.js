import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Ecf = () => {
  const AppContext = useContext(Context);

  const [pick14, setPick14] = useState(false);
  const [pick14Switch, setPick14Switch] = useState(false);

  const pick14An = useSpring({
    opacity: pick14Switch ? 1 : 0
  });

  const showWcf = useSpring({
    opacity: AppContext.showEcf ? 1 : 0,
    display: AppContext.showEcf ? 'flex' : 'none'
  });

  const pickFourteen = e => {
    let last = AppContext.pick14;
    if (e.target.src) {
      AppContext.setPick14({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick14({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick14({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick14({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick14) {
      setPick14Switch(false);
    }
    setTimeout(() => {
      setPick14Switch(true);
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
              style={{ background: AppContext.pick12.background }}
              // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
              onClick={e => {
                pickFourteen(e);
                setPick14(true);
              }}
            >
              <div className='seed'>{AppContext.pick12.seed}</div>
              <div className='city'>{AppContext.pick12.name}</div>
              <img src={AppContext.pick12.logo} className=''></img>
            </div>
            <div
              style={{ background: AppContext.pick13.background }}
              id='0'
              className='team'
              onClick={e => {
                pickFourteen(e);
                setPick14(true);
              }}
            >
              <div className='seed'>{AppContext.pick13.seed}</div>
              <div className='city'>{AppContext.pick13.name}</div>
              <img src={AppContext.pick13.logo} className=''></img>
            </div>
          </div>{' '}
        </div>
        <div className='winners'>
          {pick14 ? (
            <animated.div style={pick14An}>
              <div
                style={{ background: `${AppContext.pick14.background}` }}
                className='winner'
              >
                {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
                <div className='seed'>{AppContext.pick14.seed}</div>
                <div className='city'>{AppContext.pick14.name}</div>
                <img src={AppContext.pick14.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick12.name}</div>
              <div>/</div>
              <div>{AppContext.pick13.name}</div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default Ecf;
