import React from 'react'
import styled from 'styled-components'

function Experience() {
  return (
      <Container>
          <div id='experience'>
              <Exp>Experience</Exp>
          </div>
      </Container>
  )
}

const Container = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 15%;
padding-top: 5%;
min-height: 100vh;
`

const Exp = styled.h2`
display: flex;
justify-content: left;
align-items: left;
flex-direction: column;
font-size: 40px;
`


export default Experience