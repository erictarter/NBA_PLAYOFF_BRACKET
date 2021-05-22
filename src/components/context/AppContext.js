import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageDis, setMessageDis] = useState(false);
  const [showWcr1, setShowWcr1] = useState(true);
  const [showWcr2, setShowWcr2] = useState(false);
  const [showWcf, setShowWcf] = useState(false);
  const [showEcr1, setShowEcr1] = useState(false);
  const [showEcr2, setShowEcr2] = useState(false);
  const [showEcf, setShowEcf] = useState(false);
  const [showFinals, setShowFinals] = useState(false);
  const [namePopup, setNamePopup] = useState(false);
  const [showFullBracket, setShowFullBracket] = useState(false);

  const [pick1, setPick1] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick2, setPick2] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick3, setPick3] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick4, setPick4] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick5, setPick5] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick6, setPick6] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick7, setPick7] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick8, setPick8] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick9, setPick9] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick10, setPick10] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick11, setPick11] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick12, setPick12] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick13, setPick13] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick14, setPick14] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });
  const [pick15, setPick15] = useState({
    seed: '',
    name: '',
    logo: '',
    background: ''
  });

  const value = {
    showMessage,
    setShowMessage,
    messageDis,
    setMessageDis,
    showWcr1,
    setShowWcr1,
    showWcr2,
    setShowWcr2,
    showWcf,
    setShowWcf,
    showEcr1,
    setShowEcr1,
    showEcr2,
    setShowEcr2,
    showEcf,
    setShowEcf,
    showFinals,
    setShowFinals,
    namePopup,
    setNamePopup,
    showFullBracket,
    setShowFullBracket,
    pick1,
    setPick1,
    pick2,
    setPick2,
    pick3,
    setPick3,
    pick4,
    setPick4,
    pick5,
    setPick5,
    pick6,
    setPick6,
    pick7,
    setPick7,
    pick8,
    setPick8,
    pick9,
    setPick9,
    pick10,
    setPick10,
    pick11,
    setPick11,
    pick12,
    setPick12,
    pick13,
    setPick13,
    pick14,
    setPick14,
    pick15,
    setPick15
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
