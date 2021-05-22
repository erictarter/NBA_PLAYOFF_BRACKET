import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const WcRound2 = () => {
  const AppContext = useContext(Context);

  const [pick5, setPick5] = useState(false);
  const [pick6, setPick6] = useState(false);
  const [pick5Switch, setPick5Switch] = useState(false);
  const [pick6Switch, setPick6Switch] = useState(false);

  const pick5An = useSpring({
    opacity: pick5Switch ? 1 : 0
  });
  const pick6An = useSpring({
    opacity: pick6Switch ? 1 : 0
  });

  const showWcr2 = useSpring({
    opacity: AppContext.showWcr2 ? 1 : 0,
    display: AppContext.showWcr2 ? 'flex' : 'none'
  });

  const pickFive = e => {
    let last = AppContext.pick6;
    if (e.target.src) {
      AppContext.setPick5({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick5({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick5({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick5({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick5) {
      setPick5Switch(false);
    }
    setTimeout(() => {
      setPick5Switch(true);
    }, 250);
  };

  const pickSix = e => {
    let last = AppContext.pick6;
    if (e.target.src) {
      AppContext.setPick6({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick6({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick6({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick6({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick6) {
      setPick6Switch(false);
    }
    setTimeout(() => {
      setPick6Switch(true);
    }, 250);
  };

  return (
    <animated.div style={showWcr2} className='wcr2' id='wcr2'>
      <div className='wcr2'>
        <div className='games'>
          <div className='series'>
            <div
              id='0'
              className='team'
              style={{ background: AppContext.pick1.background }}
              // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
              onClick={e => {
                pickFive(e);
                setPick5(true);
              }}
            >
              <div className='seed'>{AppContext.pick1.seed}</div>
              <div className='city'>{AppContext.pick1.name}</div>
              <img src={AppContext.pick1.logo} className=''></img>
            </div>
            <div
              style={{ background: AppContext.pick2.background }}
              id='0'
              className='team'
              onClick={e => {
                pickFive(e);
                setPick5(true);
              }}
            >
              <div className='seed'>{AppContext.pick2.seed}</div>
              <div className='city'>{AppContext.pick2.name}</div>
              <img src={AppContext.pick2.logo} className=''></img>
            </div>
          </div>{' '}
          <div className='series'>
            <div
              className='team'
              style={{ background: AppContext.pick3.background }}
              onClick={e => {
                pickSix(e);
                setPick6(true);
              }}
            >
              <div className='seed'>{AppContext.pick3.seed}</div>
              <div className='city'>{AppContext.pick3.name}</div>
              <img src={AppContext.pick3.logo} className=''></img>
            </div>
            <div
              className='team'
              style={{ background: AppContext.pick4.background }}
              onClick={e => {
                pickSix(e);
                setPick6(true);
              }}
            >
              <div className='seed'>{AppContext.pick4.seed}</div>
              <div className='city'>{AppContext.pick4.name}</div>
              <img src={AppContext.pick4.logo} className=''></img>
            </div>
          </div>{' '}
        </div>
        <div className='winners'>
          {pick5 ? (
            <animated.div style={pick5An}>
              <div
                style={{ background: `${AppContext.pick5.background}` }}
                className='winner'
              >
                {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
                <div className='seed'>{AppContext.pick5.seed}</div>
                <div className='city'>{AppContext.pick5.name}</div>
                <img src={AppContext.pick5.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick1.name}</div>
              <div>/</div>
              <div>{AppContext.pick2.name}</div>
            </div>
          )}
          {pick6 ? (
            <animated.div style={pick6An}>
              <div
                style={{ background: `${AppContext.pick6.background}` }}
                className='winner'
              >
                <div className='seed'>{AppContext.pick6.seed}</div>
                <div className='city'>{AppContext.pick6.name}</div>
                <img src={AppContext.pick6.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick3.name}</div>
              <div>/</div>
              <div>{AppContext.pick4.name}</div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};
export default WcRound2;
