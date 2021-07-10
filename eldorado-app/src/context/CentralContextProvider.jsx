import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function CentralContextProvider({ children }) {
  const [categoryId, setcategoryId] = useState();

  return (
    <Context.Provider
      value={ {
        categoryId,
        setcategoryId
      } }
    >
      {children}
    </Context.Provider>
  );
}

CentralContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CentralContextProvider;
