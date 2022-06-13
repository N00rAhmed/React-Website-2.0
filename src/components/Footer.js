import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
      <div>
          <Bottom>Built and designed by Noor Ahmed.</Bottom>
          <Auth>All rights reserved. ©</Auth>
      </div>
  )
}

const Bottom = styled.div`
display: flex;
justify-content: center;
font-family: calibri;
padding-top: 5%;
`;

const Auth = styled.div`
display: flex;
justify-content: center;
padding-top: 0%;
padding-bottom: 3%;
font-family: calibri;
`;

export default Footer