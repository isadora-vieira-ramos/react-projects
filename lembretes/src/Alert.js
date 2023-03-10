import React, { useEffect } from 'react';

const Alert = ({msg, removeAlert, descricao, data }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [descricao, data]);
  return <p className={`alert alert-danger`}>{msg}</p>;
};

export default Alert;
