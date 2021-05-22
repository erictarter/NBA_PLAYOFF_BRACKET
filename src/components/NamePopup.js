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
      <form className='name-input' name='contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />
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
      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' />
        </p>
        <p>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' />
        </p>
        <p>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'></textarea>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </div>
  );
};

export default NamePopup;
