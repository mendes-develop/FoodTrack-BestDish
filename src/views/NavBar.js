import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../cutlery.svg'
import { ButtonContainer } from '../components/Button'

export default function Navbar() {

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
      <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'>
            <i className='fas fa-cart-plus' />
          </span>
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
