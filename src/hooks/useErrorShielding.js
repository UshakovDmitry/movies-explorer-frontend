import { useEffect, useState } from 'react';

const useErrorShielding = (formik) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (data) => {
    setIsSubmitted(true);
    return formik.handleSubmit(data);
  };

  useEffect(() => {
    if (formik.dirty) setIsSubmitted(false);
  }, [formik.dirty, formik.values]);

  return { isSubmitted, handleSubmit };
};

export default useErrorShielding;
