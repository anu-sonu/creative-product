import React, { useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
const {cart, totalQuantity} = useSelector((state)=>state.allcart)

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])

  return (
    <div className='Navbar'>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer size="md">
          <MDBNavbarBrand href="/Navbar">Creative Product Shop <MDBIcon fab icon="contao" className='logo'/></MDBNavbarBrand>
          <MDBBtn color='light' rippleColor='dark'>
        <Link to="/Card">
        <MDBIcon fas icon="align-justify"/> All Product
        </Link>
      </MDBBtn>
      <MDBBtn color='dark'>
      <Link to="/ShoppingCart">
      <MDBIcon fas icon="luggage-cart"/> Cart ({totalQuantity})
        </Link>
      </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}