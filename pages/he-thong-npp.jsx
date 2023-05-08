import Center from "@/components/Center";
import FirstFooter from "@/components/FirstFooter";
import FirstHeader from "@/components/FirstHeader";
import SecondFooter from "@/components/SecondFooter";
import SecondHeader from "@/components/SecondHeader";
import React from "react";

const distributorSystem = () => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <Center>
        <div>
          Hệ thống Đại lý, NPP
          <p>
            Nhằm tạo điều kiện thuận lợi cho khách hàng mua sản phẩm Nước cốt
            sâm dây Ngọc Linh Langbiang Food và các sản phẩm thực phẩm công nghệ
            của Nông sản LangBiang: Trà hoa, trà OO long, Cà phê, Trái cây sấy
            lạnh, nước cốt, bột rau củ..... Quý khách có thể mua tại hệ thống
            ONINE, bao gồm: website, shopee, lazada, tiki....hoặc mua trực tiếp
            tại hơn 350 cửa hàng, đại lý, hệ thống nhà thuốc trên toàn quốc.
          </p>
        </div>
      </Center>
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default distributorSystem;
