import React from 'react'
import styled from 'styled-components'

export default function Default(){

    return (
      <Div404>
        <h2>404!</h2>
        <h3>Page not Found</h3>
      </Div404>
    )
}

const Div404 = styled.div`
margin: auto;
width: 50%;
border: 3px solid green;
padding: 10px;
margin-top: 10px
text-align: center;
`
