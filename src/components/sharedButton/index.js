import React from 'react';
//import sharedButtonCSS from './sharedButtonCSS';

const ButtonShared = ({ text, Click, styleshare, type }) => {
  return (
    <input type={type} onClick={Click} className={styleshare} value={text} />
  );
};

export default ButtonShared;

// const ButtonShared = ({ text, Click, styleshare }) => {
//   return (
//     <button onClick={Click} type={{ styleshare }}>
//       {text}
//     </button>
//   )
// }
