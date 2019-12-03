import React, {useState, useEffect} from 'react';

import useForm from './hooks/form.js';
import useSocket from './hooks/socket.js';
import useQ from './hooks/q.js';

const App = (props) => {
  const [queueMessage, setQueueMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});

  const [qSubscribe, qPublish] = useQ('deeds');
  const [socketSubscribe, socketPublish] = useSocket();
  
  const handleSubmitValues = (values) => {
    qPublish('work', values);
    socketPublish('words', values);
  };
  
  const [handleChange, handleSubmit, values] = useForm(handleSubmitValues); 
  
  useEffect(() => {
    qSubscribe('work', setQueueMessage);
    socketSubscribe('incoming', setSocketMessage);
  },
  // only run when first rendered
  []);

  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <pre>Queue Values: {JSON.stringify(queueMessage)}</pre>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
      <form onSubmit={handleSubmit}>
        <input
          name='firstName'
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name='middleName'
          placeholder="Middle Name"
          onChange={handleChange}
        />
        <input
          name = 'lastName'
          placeholder = "Last Name"
          onChange = {handleChange}
        />
        <button>Save</button>
      </form>
    </>
  );
};

export default App;

