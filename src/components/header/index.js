import React from 'react';
import './styles.scss'
import {ReactComponent as Logo} from '../../logo.svg'

const Header = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default Header