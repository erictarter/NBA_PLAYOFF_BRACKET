import './App.scss';
import { ContextProvider } from './components/context/AppContext';
import Nav from './components/Nav';
import Bracket from './components/Bracket';
import Message from './components/Message';

function App() {
  return (
    <div className='main'>
      <ContextProvider>
        <Message></Message>
        <Nav></Nav>
        <Bracket></Bracket>
      </ContextProvider>
    </div>
  );
}

export default App;

// SUBMIT NAME AND SEE WHOLE BRACKET
// GET NAME AND PICKS TO FORM SUBMISSION
// FIX FOR MOBILE
