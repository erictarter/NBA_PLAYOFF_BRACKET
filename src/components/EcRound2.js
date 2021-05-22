import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const EcRound2 = () => {
  const AppContext = useContext(Context);

  const [pick12, setPick12] = useState(false);
  const [pick13, setPick13] = useState(false);
  const [pick12Switch, setPick12Switch] = useState(false);
  const [pick13Switch, setPick13Switch] = useState(false);

  const pick12An = useSpring({
    opacity: pick12Switch ? 1 : 0
  });
  const pick13An = useSpring({
    opacity: pick13Switch ? 1 : 0
  });

  const showEcr2 = useSpring({
    opacity: AppContext.showEcr2 ? 1 : 0,
    display: AppContext.showEcr2 ? 'flex' : 'none'
  });

  const pickTwelve = e => {
    let last = AppContext.pick12;
    if (e.target.src) {
      AppContext.setPick12({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick12({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick12({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick12({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick12) {
      setPick12Switch(false);
    }
    setTimeout(() => {
      setPick12Switch(true);
    }, 250);
  };

  const pickThirteen = e => {
    let last = AppContext.pick13;
    if (e.target.src) {
      AppContext.setPick13({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick13({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick13({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick13({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick13) {
      setPick13Switch(false);
    }
    setTimeout(() => {
      setPick13Switch(true);
    }, 250);
  };

  return (
    <animated.div style={showEcr2} className='wcr2' id='wcr2'>
      <div className='wcr2'>
        <div className='games'>
          <div className='series'>
            <div
              id='0'
              className='team'
              style={{ background: AppContext.pick8.background }}
              // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
              onClick={e => {
                pickTwelve(e);
                setPick12(true);
              }}
            >
              <div className='seed'>{AppContext.pick8.seed}</div>
              <div className='city'>{AppContext.pick8.name}</div>
              <img src={AppContext.pick8.logo} className=''></img>
            </div>
            <div
              style={{ background: AppContext.pick9.background }}
              id='0'
              className='team'
              onClick={e => {
                pickTwelve(e);
                setPick12(true);
              }}
            >
              <div className='seed'>{AppContext.pick9.seed}</div>
              <div className='city'>{AppContext.pick9.name}</div>
              <img src={AppContext.pick9.logo} className=''></img>
            </div>
          </div>{' '}
          <div className='series'>
            <div
              className='team'
              style={{ background: AppContext.pick10.background }}
              onClick={e => {
                pickThirteen(e);
                setPick13(true);
              }}
            >
              <div className='seed'>{AppContext.pick10.seed}</div>
              <div className='city'>{AppContext.pick10.name}</div>
              <img src={AppContext.pick10.logo} className=''></img>
            </div>
            <div
              className='team'
              style={{ background: AppContext.pick11.background }}
              onClick={e => {
                pickThirteen(e);
                setPick13(true);
              }}
            >
              <div className='seed'>{AppContext.pick11.seed}</div>
              <div className='city'>{AppContext.pick11.name}</div>
              <img src={AppContext.pick11.logo} className=''></img>
            </div>
          </div>{' '}
        </div>
        <div className='winners'>
          {pick12 ? (
            <animated.div style={pick12An}>
              <div
                style={{ background: `${AppContext.pick12.background}` }}
                className='winner'
              >
                {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
                <div className='seed'>{AppContext.pick12.seed}</div>
                <div className='city'>{AppContext.pick12.name}</div>
                <img src={AppContext.pick12.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick8.name}</div>
              <div>/</div>
              <div>{AppContext.pick9.name}</div>
            </div>
          )}
          {pick13 ? (
            <animated.div style={pick13An}>
              <div
                style={{ background: `${AppContext.pick13.background}` }}
                className='winner'
              >
                <div className='seed'>{AppContext.pick13.seed}</div>
                <div className='city'>{AppContext.pick13.name}</div>
                <img src={AppContext.pick13.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick10.name}</div>
              <div>/</div>
              <div>{AppContext.pick11.name}</div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};
export default EcRound2;
