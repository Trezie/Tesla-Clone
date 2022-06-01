import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />

      <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />

      <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      
      />


      <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-X.jpg"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      
      />

      <Section 
        title="Solar For New Roof"
        description="Solar Roof Costs Less Than A New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      
      />
      
      <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        rightBtnText=""
      
      />

    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: orange;
  background-image: url('/iages/model-s')
`