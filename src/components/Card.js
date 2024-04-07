import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,MDBRow,MDBCol,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../features/cartSlice';

export default function Card() {
    const iteams = useSelector((state)=>state.allcart.iteams)

    const dispatch = useDispatch()
  return (
    <MDBContainer>
    <MDBRow className='mb-3'>
    {iteams.map((item)=>(
    <MDBCol size='md-3' className='mt-2'>
    <MDBCard>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overplay'>
    <MDBCardImage src={item.thumbnail} position='top' alt='creative' style={{height:"200px"}}/>
    </MDBRipple>
    <MDBCardBody>
        <MDBCardTitle style={{height:"60px"}}>{item.title}</MDBCardTitle>
        <MDBCardText>
        {item.description}
        </MDBCardText>
        <h4>(₹) : {item.price}</h4>
        <MDBBtn href='#' onClick={()=>dispatch(addtocart(item))}>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    ))
    }
    </MDBRow>
    </MDBContainer>
  );
}