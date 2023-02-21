import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <ErrorWrap>Page not found please visite <Link to="/">Main</Link></ErrorWrap>
  )
}

const ErrorWrap = styled.div`
  color: white;
  font-size: 20px;
`

export default ErrorPage