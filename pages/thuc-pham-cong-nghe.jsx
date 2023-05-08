import Center from "@/components/Center";
import FirstFooter from "@/components/FirstFooter";
import FirstHeader from "@/components/FirstHeader";
import NewProduct from "@/components/NewProduct";
import SecondFooter from "@/components/SecondFooter";
import SecondHeader from "@/components/SecondHeader";
import React from "react";

const techFood = () => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <Center>
        <div className="mt-10">
          <NewProduct />
        </div>
      </Center>
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default techFood;
