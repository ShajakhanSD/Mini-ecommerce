import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart'

export default function Header({ cartItems }) {
  return (

    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to='/'>
            <img width="100px" height='auto' src="/images/logo.png" />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to='/' id="cart_count">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M18.178 11.373a.7.7 0 0 1 .7.7v5.874c.027.812-.071 1.345-.434 1.68c-.338.311-.828.4-1.463.366H3.144C2.5 19.961 2 19.7 1.768 19.173c-.154-.347-.226-.757-.226-1.228v-5.873a.7.7 0 0 1 1.4 0v5.873q.002.349.07.562l.036.098l-.003-.01c.001-.013.03-.008.132-.002h13.84c.245.014.401 0 .456-.001l.004-.001c-.013-.053.012-.27 0-.622v-5.897a.7.7 0 0 1 .701-.7M10.434 0c.264 0 .5.104.722.297l8.625 8.139a.7.7 0 1 1-.962 1.017l-8.417-7.944l-9.244 7.965a.7.7 0 0 1-.915-1.06L9.689.277l.086-.064c.214-.134.428-.212.66-.212"/></svg>
        </Link>
        <Link to={'/Cart'}> <span id="cart" className=""></span>
          <span className="ml-1" id="cart_count">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.508.5H2.95l.87 8.65a1 1 0 0 0 1 .85h6.3a1 1 0 0 0 1-.68l1.33-4a1 1 0 0 0-.14-.9a1 1 0 0 0-.86-.42H3.3m7.65 9.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"/></svg>
            <sup className='ml-1'>{cartItems.length}</sup></span>
        </Link>
      </div>
    </nav>
  )
}
