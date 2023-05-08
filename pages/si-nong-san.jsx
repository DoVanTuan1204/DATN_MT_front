import Center from "@/components/Center";
import FirstFooter from "@/components/FirstFooter";
import FirstHeader from "@/components/FirstHeader";
import NewProduct from "@/components/NewProduct";
import SecondFooter from "@/components/SecondFooter";
import SecondHeader from "@/components/SecondHeader";
import React from "react";
import styled from "styled-components";



const wholeSale = () => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <Center>
        <NewProduct />
      </Center>
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default wholeSale;
