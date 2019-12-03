import {useEffect} from 'react';
import Q from '@nmq/q/client';

let queue = {}; 

const useQ = (qName) => {
  const subscribe = (event, callback) => {
    queue.subscribe(event, callback);
  };

  const publish = (event, payload) => {
    Q.publish(qName, event, payload);
  };

  useEffect(() => {
    queue = new Q(qName);
  },
  // only run when first rendered
  []);

  return [subscribe, publish];
};

export default useQ;
