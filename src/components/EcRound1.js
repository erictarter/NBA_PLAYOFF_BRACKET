import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const EcRound1 = () => {
  const AppContext = useContext(Context);

  const [pick8, setPick8] = useState(false);
  const [pick9, setPick9] = useState(false);
  const [pick10, setPick10] = useState(false);
  const [pick11, setPick11] = useState(false);
  const [pick8Switch, setPick8Switch] = useState(false);
  const [pick9Switch, setPick9Switch] = useState(false);
  const [pick10Switch, setPick10Switch] = useState(false);
  const [pick11Switch, setPick11Switch] = useState(false);

  const pick8An = useSpring({
    opacity: pick8Switch ? 1 : 0
  });

  const pick9An = useSpring({
    opacity: pick9Switch ? 1 : 0
  });
  const pick10An = useSpring({
    opacity: pick10Switch ? 1 : 0
  });
  const pick11An = useSpring({
    opacity: pick11Switch ? 1 : 0
  });

  //   MOVE WCR1
  const showEcr1 = useSpring({
    opacity: AppContext.showEcr1 ? 1 : 0,
    display: AppContext.showEcr1 ? 'flex' : 'none'
  });

  const pickEight = e => {
    let last = AppContext.pick8;
    if (e.target.src) {
      AppContext.setPick8({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick8({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick8({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick8({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick8) {
      setPick8Switch(false);
    }
    setTimeout(() => {
      setPick8Switch(true);
    }, 250);
  };

  const pickNine = e => {
    let last = AppContext.pick9;
    if (e.target.src) {
      AppContext.setPick9({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick9({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick9({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick9({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick9) {
      setPick9Switch(false);
    }
    setTimeout(() => {
      setPick9Switch(true);
    }, 250);
  };

  const pickTen = e => {
    let last = AppContext.pick10;
    if (e.target.src) {
      AppContext.setPick10({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick10({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick10({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick10({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick10) {
      setPick10Switch(false);
    }
    setTimeout(() => {
      setPick10Switch(true);
    }, 250);
  };

  const pickEleven = e => {
    let last = AppContext.pick11;
    if (e.target.src) {
      AppContext.setPick11({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick11({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick11({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick11({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick11) {
      setPick11Switch(false);
    }
    setTimeout(() => {
      setPick11Switch(true);
    }, 250);
  };

  return (
    <animated.div style={showEcr1} className='wcr1'>
      <div className='games'>
        <div className='series'>
          <div
            id='0'
            className='team'
            style={{ background: 'rgba(18, 10, 100, 0.7)' }}
            // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
            onClick={e => {
              pickEight(e);
              setPick8(true);
            }}
          >
            <div className='seed'>1</div>
            <div className='city'>Phil</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo-480x480.png'
              className=''
            ></img>
          </div>
          <div
            style={{ background: 'rgba(255, 240, 73, 0.738)' }}
            id='0'
            className='team'
            onClick={e => {
              pickEight(e);
              setPick8(true);
            }}
          >
            <div className='seed'>8</div>
            <div className='city'>Washington</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-washington-wizards-logo-480x480.png'
              className=''
            ></img>
          </div>
        </div>{' '}
        <div className='series'>
          <div
            className='team'
            style={{ background: 'rgba(33, 36, 221, 0.838)' }}
            onClick={e => {
              pickNine(e);
              setPick9(true);
            }}
          >
            <div className='seed'>4</div>
            <div className='city'>NY</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo-480x480.png'
              alt=''
            />
          </div>
          <div
            className='team'
            style={{ background: 'rgba(202, 21, 21, 0.838)' }}
            onClick={e => {
              pickNine(e);
              setPick9(true);
            }}
          >
            <div className='seed'>5</div>
            <div className='city'>Atlanta</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo-480x480.png'
              alt=''
            />
          </div>
        </div>{' '}
        <div className='series'>
          <div
            className='team'
            style={{ background: 'rgba(190, 147, 37, 0.838)' }}
            onClick={e => {
              pickTen(e);
              setPick10(true);
            }}
          >
            <div className='seed'>3</div>
            <div className='city'>Milwauki</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo-480x480.png'
              alt=''
            />
          </div>
          <div
            className='team'
            style={{ background: 'rgba(221, 33, 33, 0.838)' }}
            onClick={e => {
              pickTen(e);
              setPick10(true);
            }}
          >
            <div className='seed'>6</div>
            <div className='city'>Heat</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-miami-heat-logo-480x480.png'
              alt=''
            />
          </div>
        </div>
        <div className='series'>
          <div
            id='1'
            className='team'
            style={{ background: 'rgba(63, 63, 63, 0.838)' }}
            onClick={e => {
              pickEleven(e);
              setPick11(true);
            }}
          >
            <div className='seed'>2</div>
            <div className='city'>Brooklyn</div>
            <img
              src='http://loodibee.com/wp-content/uploads/new-jersey-nets-1990-1997-480x480.png'
              alt=''
            />
          </div>
          <div
            className='team'
            style={{ background: 'rgba(34, 83, 41, 0.838)' }}
            onClick={e => {
              pickEleven(e);
              setPick11(true);
            }}
          >
            <div className='seed'>7</div>
            <div className='city'>Boston</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-boston-celtics-logo-480x480.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='winners'>
        {pick8 ? (
          <animated.div style={pick8An}>
            <div
              style={{ background: `${AppContext.pick8.background}` }}
              className='winner'
            >
              {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
              <div className='seed'>{AppContext.pick8.seed}</div>
              <div className='city'>{AppContext.pick8.name}</div>
              <img src={AppContext.pick8.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>Phil</div>
            <div>/</div>
            <div>Washington</div>
          </div>
        )}
        {pick9 ? (
          <animated.div style={pick9An}>
            <div
              style={{ background: `${AppContext.pick9.background}` }}
              className='winner'
            >
              <div className='seed'>{AppContext.pick9.seed}</div>
              <div className='city'>{AppContext.pick9.name}</div>
              <img src={AppContext.pick9.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>NY</div>
            <div>/</div>
            <div>Atlanta</div>
          </div>
        )}
        {pick10 ? (
          <animated.div style={pick10An}>
            <div
              style={{ background: `${AppContext.pick10.background}` }}
              className='winner'
            >
              <div className='seed'>{AppContext.pick10.seed}</div>
              <div className='city'>{AppContext.pick10.name}</div>
              <img src={AppContext.pick10.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>Milwauki</div>
            <div>/</div>
            <div>Miami</div>
          </div>
        )}
        {pick11 ? (
          <animated.div style={pick11An}>
            <div
              style={{ background: `${AppContext.pick11.background}` }}
              className='winner'
            >
              <div className='seed'>{AppContext.pick11.seed}</div>
              <div className='city'>{AppContext.pick11.name}</div>
              <img src={AppContext.pick11.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>Brooklyn</div>
            <div>/</div>
            <div>Boston</div>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default EcRound1;
