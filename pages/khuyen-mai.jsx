import Center from "@/components/Center";
import FirstHeader from "@/components/FirstHeader";
import Footer from "@/components/FirstFooter";
import SecondHeader from "@/components/SecondHeader";
import React from "react";
import styled from "styled-components";
import FirstFooter from "@/components/FirstFooter";
import SecondFooter from "@/components/SecondFooter";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Coupon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  border: 0.1px solid #f0f0f0;
  border-radius: 5px;
  margin: 5px;
`;
const HeaderCoupon = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
`;
const BodyCoupon = styled.div`
  padding: 40px 10px;
`;
const UpdateProduct = styled.div`
  border: 8px solid #ffc700;
  border-radius: 8px;
  padding: 20px;
  p {
    background-color: #fff3cd;
    color: #e8af42;
    font-weight: 500;
    padding: 10px;
    border-radius: 8px;
  }
`;

const SaleOff = () => {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <Center>
        <img className="my-8" src="/images/flashsale_banner.webp" />
        <Wrapper>
          <Coupon>
            <HeaderCoupon>
              <p className="font-bold text-3xl ">LBA5</p>
              <div>Sao chép mã</div>
            </HeaderCoupon>
            <BodyCoupon>
              <p className="text-sm text-gray-600">
                Nhập mã để được giảm 5% cho tất cả đơn hàng từ 99.000đ
              </p>
            </BodyCoupon>
          </Coupon>
          <Coupon>
            <HeaderCoupon>
              <p className="font-bold text-3xl ">LBA5</p>
              <div>Sao chép mã</div>
            </HeaderCoupon>
            <BodyCoupon>
              <p className="text-sm text-gray-600">
                Nhập mã để được giảm 5% cho tất cả đơn hàng từ 1.999.000đ
              </p>
            </BodyCoupon>
          </Coupon>
        </Wrapper>
        <UpdateProduct>
          <p>Sản phẩm đang được cập nhật.</p>
        </UpdateProduct>
      </Center>
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default SaleOff;
