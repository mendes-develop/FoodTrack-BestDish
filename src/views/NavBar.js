import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../cutlery.svg'
import { ButtonContainer } from '../components/Button'
import {useSelector, useDispatch} from 'react-redux'

export default function Navbar(props) {

  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const handleClick = () => {
    localStorage.clear()
    dispatch({type: "SET_USER", payload: null})
    props.history.push('/login')

  }

    return (
      <NavWrapper className='navbar navbar-expand-sm  bg-primary navbar-dark px-sm-5'>
      <Link to='/'>
        <img src={logo} alt='home'/>
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            Search
          </Link>
        </li>
      </ul>
      {currentUser ? <button onClick={() => handleClick()} className='mr-2'>Logout</button> : <button onClick={() => handleClick()} className='mr-2'>Login/Signup</button>}
      <Link to='/favorites' className='ml-auto'>
        <ButtonContainer>
           Favorites
        </ButtonContainer>
      </Link>
      </NavWrapper>
    )
  
}


const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform : capitalize;
  }

`
