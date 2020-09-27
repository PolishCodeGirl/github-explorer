import React from 'react';
import styled from 'styled-components';


const Loader = () => (<StyledLoader />);


export default Loader;

const StyledLoader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #009de0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  margin: 0 auto;
  margin-top: 5px;

  @keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
 }
`