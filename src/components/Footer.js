import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import moment from 'moment';

function Footer() {

  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    const year = moment().format('YYYY');
    setCurrentYear(year);
  }, []);


  return (
      <div>
          <Bottom>Built and designed by Noor Ahmed</Bottom>
          <Auth>&copy; {currentYear} all rights reserved</Auth>
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