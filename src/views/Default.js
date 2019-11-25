import React from 'react'
import styled from 'styled-components'

export default function Default(){

    return (
      <DefaultDIV>
        <h3>Page not Found</h3>
      </DefaultDIV>
    )
}


const DefaultDIV = styled.div`

  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin-top: 10px
  text-align: center;


`