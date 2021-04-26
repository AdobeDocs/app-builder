import {useEffect} from 'react';

const Redirect = () => {
  useEffect(() => {
    location.reload();
  }, []);
};

export default Redirect;