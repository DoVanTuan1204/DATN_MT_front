import React from "react";
import IconGift from "./icon/IconGift";
import styled from "styled-components";

const WrapperCoupon = styled.div`
  padding: 10px 20px;
  margin-top: 10px;
  border: dashed;
  border-color: orange;
  background-color: #ffe5cc;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
`;
const IconWrapper = styled.div`
  color: orange;
  width: 30px;
`;
const ItemFirst = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: 500;
    color: orange;
  }
`;
const SeconItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Coupon = () => {
  return (
    <WrapperCoupon
    // className="bg-orange-600 rounded-lg px-3 py-5 border-dashed border-2 border-orange-400 flex flex-col gap-4"
    >
      <ItemFirst>
        <IconWrapper>
          <IconGift />
        </IconWrapper>
        <span>Siêu ưu đãi</span>
      </ItemFirst>
      <SeconItem>
        <li>
          Nhập mã <strong>LBA5</strong> để được giảm 5% cho tất cả đơn hàng từ
          99.000đ
        </li>
        <li>
          Nhập mã <strong>LBA8</strong> để được giảm 8% cho tất cả đơn hàng từ
          199.000đ
        </li>
      </SeconItem>
    </WrapperCoupon>
  );
};

export default Coupon;
