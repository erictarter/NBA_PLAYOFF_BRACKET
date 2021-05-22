import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const WcRound1 = () => {
  const AppContext = useContext(Context);

  const [pick1, setPick1] = useState(false);
  const [pick2, setPick2] = useState(false);
  const [pick3, setPick3] = useState(false);
  const [pick4, setPick4] = useState(false);
  const [pick1Switch, setPick1Switch] = useState(false);
  const [pick2Switch, setPick2Switch] = useState(false);
  const [pick3Switch, setPick3Switch] = useState(false);
  const [pick4Switch, setPick4Switch] = useState(false);

  const pick1An = useSpring({
    opacity: pick1Switch ? 1 : 0
  });

  const pick2An = useSpring({
    opacity: pick2Switch ? 1 : 0
  });
  const pick3An = useSpring({
    opacity: pick3Switch ? 1 : 0
  });
  const pick4An = useSpring({
    opacity: pick4Switch ? 1 : 0
  });

  //   MOVE WCR1
  const showWcr1 = useSpring({
    opacity: AppContext.showWcr1 ? 1 : 0,
    display: AppContext.showWcr1 ? 'flex' : 'none'
  });

  const pick = e => {
    let last = AppContext.pick1;
    if (e.target.src) {
      AppContext.setPick1({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick1({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick1({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick1({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    // SWITCH ANIMATION
    // SAME?
    if (last !== AppContext.pick1) {
      setPick1Switch(false);
    }
    setTimeout(() => {
      setPick1Switch(true);
    }, 250);
  };

  const pickTwo = e => {
    let last = AppContext.pick2;
    if (e.target.src) {
      AppContext.setPick2({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick2({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick2({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick2({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick2) {
      setPick2Switch(false);
    }
    setTimeout(() => {
      setPick2Switch(true);
    }, 250);
  };

  const pickThree = e => {
    let last = AppContext.pick3;
    if (e.target.src) {
      AppContext.setPick3({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick3({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick3({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick3({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick3) {
      setPick3Switch(false);
    }
    setTimeout(() => {
      setPick3Switch(true);
    }, 250);
  };

  const pickFour = e => {
    let last = AppContext.pick4;
    if (e.target.src) {
      AppContext.setPick4({
        seed: e.target.previousSibling.previousSibling.innerText,
        name: e.target.previousSibling.innerText,
        logo: e.target.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'seed') {
      AppContext.setPick4({
        seed: e.target.innerText,
        name: e.target.nextSibling.innerText,
        logo: e.target.nextSibling.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else if (e.target.className === 'city') {
      AppContext.setPick4({
        seed: e.target.previousSibling.innerText,
        name: e.target.innerText,
        logo: e.target.nextSibling.src,
        background: e.target.parentElement.style.background
      });
    } else {
      AppContext.setPick4({
        seed: e.target.children[0].innerText,
        name: e.target.children[1].innerText,
        logo: e.target.children[2].src,
        background: e.target.style.background
      });
    }

    if (last !== AppContext.pick4) {
      setPick4Switch(false);
    }
    setTimeout(() => {
      setPick4Switch(true);
    }, 250);
  };

  return (
    <animated.div style={showWcr1} className='wcr1'>
      <div className='games'>
        <div className='series'>
          <div
            id='0'
            className='team'
            style={{ background: 'rgba(18, 10, 100, 0.7)' }}
            // MAKE ONE FUNCTION WORK BY ADDING ID 'WC1' insert to
            onClick={e => {
              pick(e);
              setPick1(true);
            }}
          >
            <div className='seed'>1</div>
            <div className='city'>Utah</div>
            <img
              src='http://loodibee.com/wp-content/uploads/utah-jazz-1996-2004-480x480.png'
              className=''
            ></img>
          </div>
          <div
            style={{ background: 'rgba(25, 185, 175, 0.838)' }}
            id='0'
            className='team'
            onClick={e => {
              pick(e);
              setPick1(true);
            }}
          >
            <div className='seed'>8</div>
            <div className='city'>Memphis</div>
            <img
              src='http://loodibee.com/wp-content/uploads/memphis-grizzlies-2001-2004-480x480.png'
              className=''
            ></img>
          </div>
        </div>{' '}
        <div className='series'>
          <div
            className='team'
            style={{ background: 'rgba(255, 226, 226, 0.838)' }}
            onClick={e => {
              pickTwo(e);
              setPick2(true);
            }}
          >
            <div className='seed'>4</div>
            <div className='city'>LAC</div>
            <img
              src='http://loodibee.com/wp-content/uploads/los-angeles-clippers-2010-2015-480x480.png'
              alt=''
            />
          </div>
          <div
            className='team'
            style={{ background: 'rgba(44, 62, 221, 0.838)' }}
            onClick={e => {
              pickTwo(e);
              setPick2(true);
            }}
          >
            <div className='seed'>5</div>
            <div className='city'>Dallas</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo-480x480.png'
              alt=''
            />
          </div>
        </div>{' '}
        <div className='series'>
          <div
            className='team'
            style={{ background: 'rgba(190, 147, 37, 0.838)' }}
            onClick={e => {
              pickThree(e);
              setPick3(true);
            }}
          >
            <div className='seed'>3</div>
            <div className='city'>Denver</div>
            <img
              src='http://loodibee.com/wp-content/uploads/denver-nuggets-2009-2018-480x480.png'
              alt=''
            />
          </div>
          <div
            className='team'
            style={{ background: 'rgba(221, 33, 33, 0.838)' }}
            onClick={e => {
              pickThree(e);
              setPick3(true);
            }}
          >
            <div className='seed'>6</div>
            <div className='city'>Portland</div>
            <img
              src='http://loodibee.com/wp-content/uploads/portland-trail-blazers-2002-2003-480x480.png'
              alt=''
            />
          </div>
        </div>
        <div className='series'>
          <div
            id='1'
            className='team'
            style={{ background: 'rgba(240, 116, 39, 0.838)' }}
            onClick={e => {
              pickFour(e);
              setPick4(true);
            }}
          >
            <div className='seed'>2</div>
            <div className='city'>Phoenix</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-phoenix-suns-logo-480x480.png'
              alt=''
            />
          </div>
          <div
            className='team'
            style={{ background: 'rgba(101, 53, 245, 0.838)' }}
            onClick={e => {
              pickFour(e);
              setPick4(true);
            }}
          >
            <div className='seed'>7</div>
            <div className='city'>LAL</div>
            <img
              src='http://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo-480x480.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='winners'>
        {pick1 ? (
          <animated.div style={pick1An}>
            <div
              style={{ background: `${AppContext.pick1.background}` }}
              className='winner'
            >
              {/* <div className='seed'>{AppContext.wcr1[0].seed}</div> */}
              <div className='seed'>{AppContext.pick1.seed}</div>
              <div className='city'>{AppContext.pick1.name}</div>
              <img src={AppContext.pick1.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>Utah</div>
            <div>/</div>
            <div>Memphis</div>
          </div>
        )}
        {pick2 ? (
          <animated.div style={pick2An}>
            <div
              style={{ background: `${AppContext.pick2.background}` }}
              className='winner'
            >
              <div className='seed'>{AppContext.pick2.seed}</div>
              <div className='city'>{AppContext.pick2.name}</div>
              <img src={AppContext.pick2.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>LAC</div>
            <div>/</div>
            <div>Dallas</div>
          </div>
        )}
        {pick3 ? (
          <animated.div style={pick3An}>
            <div
              style={{ background: `${AppContext.pick3.background}` }}
              className='winner'
            >
              <div className='seed'>{AppContext.pick3.seed}</div>
              <div className='city'>{AppContext.pick3.name}</div>
              <img src={AppContext.pick3.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>Denver</div>
            <div>/</div>
            <div>Portland</div>
          </div>
        )}
        {pick4 ? (
          <animated.div style={pick4An}>
            <div
              style={{ background: `${AppContext.pick4.background}` }}
              className='winner'
            >
              <div className='seed'>{AppContext.pick4.seed}</div>
              <div className='city'>{AppContext.pick4.name}</div>
              <img src={AppContext.pick4.logo} className='team-logo'></img>
            </div>
          </animated.div>
        ) : (
          <div className='winner empty'>
            <div>Phoenix</div>
            <div>/</div>
            <div>LAL</div>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default WcRound1;
