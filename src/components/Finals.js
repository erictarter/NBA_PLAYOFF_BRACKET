import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Finals = () => {
  const AppContext = useContext(Context);

  const [pick15, setPick15] = useState(false);
  const [pick15Switch, setPick15Switch] = useState(false);

  const pick15An = useSpring({
    opacity: pick15Switch ? 1 : 0
  });

  const showFinals = useSpring({
    opacity: AppContext.showFinals ? 1 : 0,
    display: AppContext.showFinals ? 'flex' : 'none'
  });

  const pickFifteen = e => {
    let last = AppContext.pick15;
    if (e.target.src) {
      AppContext.setPick15({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick15({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick15({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick15({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick15) {
      setPick15Switch(false);
    }
    setTimeout(() => {
      setPick15Switch(true);
    }, 250);
  };

  return (
    <animated.div style={showFinals} className='wcf' id='wcf'>
      <div className='wcr2'>
        <div className='games'>
          <div className='series'>
            <div
              id='0'
              className='team'
              style={{ background: AppContext.pick7.background }}
              // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
              onClick={e => {
                pickFifteen(e);
                setPick15(true);
              }}
            >
              <div className='seed'>{AppContext.pick7.seed}</div>
              <div className='city'>{AppContext.pick7.name}</div>
              <img src={AppContext.pick7.logo} className=''></img>
            </div>
            <div
              style={{ background: AppContext.pick14.background }}
              id='0'
              className='team'
              onClick={e => {
                pickFifteen(e);
                setPick15(true);
              }}
            >
              <div className='seed'>{AppContext.pick14.seed}</div>
              <div className='city'>{AppContext.pick14.name}</div>
              <img src={AppContext.pick14.logo} className=''></img>
            </div>
          </div>{' '}
        </div>
        <div className='winners'>
          {pick15 ? (
            <animated.div style={pick15An}>
              <div
                style={{ background: `${AppContext.pick15.background}` }}
                className='winner'
              >
                {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
                <div className='seed'>{AppContext.pick15.seed}</div>
                <div className='city'>{AppContext.pick15.name}</div>
                <img src={AppContext.pick15.logo} className='team-logo'></img>
              </div>
            </animated.div>
          ) : (
            <div className='winner empty'>
              <div>{AppContext.pick7.name}</div>
              <div>/</div>
              <div>{AppContext.pick14.name}</div>
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default Finals;
