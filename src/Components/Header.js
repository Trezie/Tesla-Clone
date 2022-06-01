import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
//import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  //const cars = useSelector(selectCars);
  return ( 
    <Container>
      <a>
        <img src="/images/logo.svg"/>
      </a>
      <Menu>
        <p> <a href="#">Model S</a></p>
        <p> <a href="#">Model Y</a></p>
        <p> <a href="#">Model 3</a></p>
        <p> <a href="#">Model X</a></p>

      </Menu>
      <RightMenu>
        <p><a href='#'>Shop</a></p>
        <p><a href='#'>Tesla Account</a></p>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>

        </CloseWrapper>
        <li> <a href="#">Model S</a></li>
        <li> <a href="#">Model Y</a></li>
        <li> <a href="#">Model 3</a></li>
        <li> <a href="#">Model X</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        
      </BurgerNav>
    </Container>

  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

`

const Menu = styled.div`
  margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding-right: 50px;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    font-size: 18px;
    text-transform: uppercase;
    flex-wrap: no wrap;
  }

  @media(max-width: 768px) {
    display: none;
  }

`

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;


  a {
    font-weight: 600;
    margin-right: 10px;
    font-size: 18px;
    text-transform: uppercase;
    flex-wrap: no wrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer; 

`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  button: 0;
  right: 0;
  background: white;
  width: 300px;
  height: 100vh;
  z-index: 16; 
  list-style: none;
  display: flex; 
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  transform: ${props => props.show ? "translateX(0)": "translateX(100%)"};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: 600;
    font-size: 18px;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`