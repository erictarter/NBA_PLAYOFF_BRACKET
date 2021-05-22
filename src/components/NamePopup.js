import React, { useContext } from 'react';
import { Context } from './context/AppContext';

export const NamePopup = () => {
  const ac = useContext(Context);

  const updateVals = e => {
    let picks = '';

    picks += ac.pick1.name + ' - first round winner , ';
    picks += ac.pick2.name + ' - first round winner , ';
    picks += ac.pick3.name + ' - first round winner , ';
    picks += ac.pick4.name + ' - first round winner , ';
    picks += ac.pick5.name + ' - second round winner , ';
    picks += ac.pick6.name + ' - second round winner , ';
    picks += ac.pick7.name + ' - wcf winner , ';

    picks += ac.pick8.name + ' - first round winner , ';
    picks += ac.pick9.name + ' - first round winner , ';
    picks += ac.pick10.name + ' - first round winner , ';
    picks += ac.pick11.name + ' - first round winner , ';
    picks += ac.pick12.name + ' - second round winner , ';
    picks += ac.pick13.name + ' - second round winner , ';
    picks += ac.pick14.name + ' - ecf winner , ';

    picks += ac.pick15.name + ' - champion , ';

    e.target.previousSibling.value = picks;
    console.log(e.target.previousSibling.value);
  };

  return (
    <div className='name-modal'>
      <form className='name-input' name='picks' method='post'>
        <input type='hidden' name='picks' value='contact' />
        <label htmlFor='name'>Enter Name</label>
        <input id='name' type='text' name='name' />
        <input
          style={{ display: 'none' }}
          id='wc-sub'
          type='text'
          name='picks'
        />
        {/* <input style={{ display: 'none' }} id='ec-sub' type='text' name='ec' /> */}
        <input
          onMouseDown={updateVals}
          onMouseOver={updateVals}
          type='submit'
          className='send-name'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default NamePopup;
