import Center from "@/components/Center";
import FirstFooter from "@/components/FirstFooter";
import FirstHeader from "@/components/FirstHeader";
import SecondFooter from "@/components/SecondFooter";
import SecondHeader from "@/components/SecondHeader";
import React from "react";

const wholeSalePrice = () => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <Center>
        <div className="mt-10 bg-white p-10 rounded-xl">
          <span className="font-medium text-2xl">Giá sỉ</span>
          <img src="images/baogiasi.webp" alt="" className="p-7" />
        </div>
      </Center>
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default wholeSalePrice;
