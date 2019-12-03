import {useState} from 'react';

const useForm = (submitCallback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    submitCallback && submitCallback(values);
  };
  
  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return [handleChange, handleSubmit, values];
};

export default useForm;
