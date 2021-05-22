import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const FinishedBracket = () => {
  const AppContext = useContext(Context);

  const showBracket = useSpring({
    opacity: AppContext.showFullBracket ? 1 : 0,
    display: AppContext.showFullBracket ? 'flex' : 'none'
  });

  const showPopup = () => {
    AppContext.setNamePopup(true);
  };

  return (
    <animated.div className='full-bracket' style={showBracket}>
      <div className='champion'>
        <div className='b-team'>
          <img
            style={{ transform: 'scale(3)' }}
            src={AppContext.pick15.logo}
            alt=''
          />
        </div>
      </div>
      <div className='trophy'>
        <i style={{ color: 'gold' }} class='fas fa-trophy'></i>
      </div>
      <div className='b-eight'>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/utah-jazz-1996-2004-480x480.png'
            className=''
          ></img>
        </div>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/memphis-grizzlies-2001-2004-480x480.png'
            className=''
          ></img>
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/los-angeles-clippers-2010-2015-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/denver-nuggets-2009-2018-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/portland-trail-blazers-2002-2003-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/nba-phoenix-suns-logo-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo-480x480.png'
            alt=''
          />
        </div>
      </div>
      <div className='b-four'>
        <div className='b-team'>
          <img src={AppContext.pick1.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick2.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick3.logo} alt='' />
        </div>
        <img src={AppContext.pick4.logo} alt='' />
        <div className='b-team'></div>
      </div>
      <div className='b-two'>
        <div className='b-team'>
          <img src={AppContext.pick5.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick6.logo} alt='' />
        </div>
      </div>
      <div className='b-champ'>
        <div className='b-team'>
          <img src={AppContext.pick7.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick14.logo} alt='' />
        </div>
      </div>
      <div className='b-two'>
        <div className='b-team'>
          <img src={AppContext.pick12.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick13.logo} alt='' />
        </div>
      </div>
      <div className='b-four'>
        <div className='b-team'>
          <img src={AppContext.pick8.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick9.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick10.logo} alt='' />
        </div>
        <div className='b-team'>
          <img src={AppContext.pick11.logo} alt='' />
        </div>
      </div>
      <div className='b-eight'>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo-480x480.png'
            className=''
          ></img>
        </div>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/nba-washington-wizards-logo-480x480.png'
            className=''
          ></img>
        </div>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/nba-miami-heat-logo-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          {' '}
          <img
            src='http://loodibee.com/wp-content/uploads/new-jersey-nets-1990-1997-480x480.png'
            alt=''
          />
        </div>
        <div className='b-team'>
          <img
            src='http://loodibee.com/wp-content/uploads/nba-boston-celtics-logo-480x480.png'
            alt=''
          />
        </div>
      </div>
      <button onClick={showPopup}>Submit Bracket</button>
    </animated.div>
  );
};
export default FinishedBracket;
