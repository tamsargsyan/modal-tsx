import { useState } from 'react'
import { Modal } from './components/Modal';

function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className='wrapper'>
        <button onClick={() => setShow(true)}>Show Modal</button>
      </div>
      {show && <Modal onClick={() => setShow(false)}/>}
    </>
  );
}

export default App;
