import React, { useState, useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

import NamePopup from './NamePopup';

export const Nav = () => {
  const AppContext = useContext(Context);

  const [mdArrowClick, setMdArrowClick] = useState(false);

  const arrowClick = useSpring({
    color: mdArrowClick ? 'grey' : '#fff'
  });

  const showBracket = () => {
    if (AppContext.pick15.seed !== '') {
      // NAME POPUP MODAL - SEND NAME AND CONTEXT
      console.log('name popup modal');
      AppContext.setShowFinals(false);
      AppContext.setShowFullBracket(true);
    } else {
      AppContext.setShowMessage(true);
      AppContext.setMessageDis(true);
      setTimeout(() => {
        AppContext.setShowMessage(false);
      }, 1600);
      setTimeout(() => {
        AppContext.setMessageDis(false);
      }, 2000);
    }
  };

  const next = () => {
    if (AppContext.showWcr1) {
      if (
        AppContext.pick1.seed !== '' &&
        AppContext.pick2.seed !== '' &&
        AppContext.pick3.seed !== '' &&
        AppContext.pick4.seed !== ''
      ) {
        AppContext.setShowWcr2(true);
        AppContext.setShowWcr1(false);
      } else {
        AppContext.setShowMessage(true);
        AppContext.setMessageDis(true);
        setTimeout(() => {
          AppContext.setShowMessage(false);
        }, 1600);
        setTimeout(() => {
          AppContext.setMessageDis(false);
        }, 2000);
      }
    }
    if (AppContext.showWcr2) {
      if (AppContext.pick5.seed !== '' && AppContext.pick6.seed !== '') {
        AppContext.setShowWcr2(false);
        AppContext.setShowWcf(true);
      } else {
        AppContext.setShowMessage(true);
        AppContext.setMessageDis(true);
        setTimeout(() => {
          AppContext.setShowMessage(false);
        }, 1600);
        setTimeout(() => {
          AppContext.setMessageDis(false);
        }, 2000);
      }
    }
    if (AppContext.showWcf) {
      if (AppContext.pick7.seed !== '') {
        AppContext.setShowWcf(false);
        AppContext.setShowEcr1(true);
      } else {
        AppContext.setShowMessage(true);
        AppContext.setMessageDis(true);
        setTimeout(() => {
          AppContext.setShowMessage(false);
        }, 1600);
        setTimeout(() => {
          AppContext.setMessageDis(false);
        }, 2000);
      }
    }
    if (AppContext.showEcr1) {
      if (
        AppContext.pick8.seed !== '' &&
        AppContext.pick9.seed !== '' &&
        AppContext.pick10.seed !== '' &&
        AppContext.pick11.seed !== ''
      ) {
        AppContext.setShowEcr1(false);
        AppContext.setShowEcr2(true);
      } else {
        AppContext.setShowMessage(true);
        AppContext.setMessageDis(true);
        setTimeout(() => {
          AppContext.setShowMessage(false);
        }, 1600);
        setTimeout(() => {
          AppContext.setMessageDis(false);
        }, 2000);
      }
    }
    if (AppContext.showEcr2) {
      if (AppContext.pick12.seed !== '' && AppContext.pick13.seed !== '') {
        AppContext.setShowEcr2(false);
        AppContext.setShowEcf(true);
      } else {
        AppContext.setShowMessage(true);
        AppContext.setMessageDis(true);
        setTimeout(() => {
          AppContext.setShowMessage(false);
        }, 1600);
        setTimeout(() => {
          AppContext.setMessageDis(false);
        }, 2000);
      }
    }
    if (AppContext.showEcf) {
      if (AppContext.pick14.seed !== '') {
        AppContext.setShowEcf(false);
        AppContext.setShowFinals(true);
      } else {
        AppContext.setShowMessage(true);
        AppContext.setMessageDis(true);
        setTimeout(() => {
          AppContext.setShowMessage(false);
        }, 1600);
        setTimeout(() => {
          AppContext.setMessageDis(false);
        }, 2000);
      }
    }
  };
  return (
    <div className='round-top'>
      <div style={{ display: AppContext.showWcr1 ? 'block' : 'none' }}>
        WC Round 1
      </div>
      <div style={{ display: AppContext.showWcr2 ? 'block' : 'none' }}>
        WC Round 2
      </div>
      <div style={{ display: AppContext.showWcf ? 'block' : 'none' }}>WCF</div>
      <div style={{ display: AppContext.showEcr1 ? 'block' : 'none' }}>
        EC Round 1
      </div>
      <div style={{ display: AppContext.showEcr2 ? 'block' : 'none' }}>
        EC Round 2
      </div>
      <div style={{ display: AppContext.showEcf ? 'block' : 'none' }}>ECF</div>
      <div style={{ display: AppContext.showFinals ? 'block' : 'none' }}>
        Finals
      </div>
      <div>NBA Playoffs</div>
      {AppContext.showFinals ? (
        <div onClick={showBracket} className='sub1'>
          See Your Bracket
        </div>
      ) : (
        <animated.i
          style={arrowClick}
          onClick={next}
          onMouseDown={() => {
            setMdArrowClick(true);
          }}
          onMouseUp={() => {
            setMdArrowClick(false);
          }}
          onMouseLeave={() => {
            setMdArrowClick(false);
          }}
          class='fas fa-chevron-right'
        ></animated.i>
      )}
      {AppContext.showFinals ? (
        <div className='sub2' onClick={showBracket}>
          See Your Bracket
        </div>
      ) : null}
      {AppContext.namePopup ? <NamePopup></NamePopup> : null}
      {/* <NamePopup></NamePopup> */}
    </div>
  );
};

export default Nav;
