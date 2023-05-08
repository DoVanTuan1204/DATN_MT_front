import Center from "@/components/Center";
import FirstFooter from "@/components/FirstFooter";
import FirstHeader from "@/components/FirstHeader";
import NewProduct from "@/components/NewProduct";
import SecondFooter from "@/components/SecondFooter";
import SecondHeader from "@/components/SecondHeader";
import React from "react";

const freshProducts = () => {
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

export default freshProducts;
