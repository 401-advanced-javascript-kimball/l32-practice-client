import {useEffect} from 'react';
import io from 'socket.io-client';

let socket = {};

const useSocket = () => {
  const subscribe = (event, callback) => {
    socket.on(event, callback);  
  };

  const publish = (event, payload) => {
    socket.emit(event, payload);
  };

  useEffect(() => {
    socket = io.connect('http://localhost:3000');
  },
  // only run when first rendered
  []);

  return [subscribe, publish];
};

export default useSocket;
