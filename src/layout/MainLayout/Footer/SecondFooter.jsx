import { GreenCode } from "@/ColorCode";
import Center from "@/src/components/Center";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: white;
  color: black;
`;
const GridWrapper = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
const GridCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const ColTitle = styled.p`
  font-size: 21px;
  font-weight: 400;
  border-bottom: 1px solid ${GreenCode};
`;
const ColTemplate = styled.p`
  font-size: 14px;
  margin: 8px;
  font-weight: 200;
`;

const SecondFooter = () => {
  return (
    <StyledFooter>
      <Center>
        <GridWrapper>
          <GridCol>
            <ColTitle>Về chúng tôi</ColTitle>
            <ColTemplate>
              Cung cấp Nông sản, đặc sản vùng miền Sạch - Chuẩn - Chất Địa
            </ColTemplate>

            <ColTemplate>Số điện thoại: 0981 84 88 87</ColTemplate>
            <ColTemplate> Email: sales.m@dannangagri.com</ColTemplate>
          </GridCol>
          <GridCol>
            <ColTitle>Tìm hiểu thêm</ColTitle>
            <ColTemplate>KHUYẾN MÃI</ColTemplate>
            <ColTemplate>NÔNG SẢN TƯƠI</ColTemplate>
            <ColTemplate>THỰC PHẨM CÔNG NGHỆ</ColTemplate>
          </GridCol>
          <GridCol>
            <ColTitle>Hỗ trợ khách hàng</ColTitle>
            <ColTemplate>Công nghệ của chúng tôi</ColTemplate>
            <ColTemplate>Chính sách giao hàng</ColTemplate>
          </GridCol>
          <GridCol>
            <ColTitle>Hỗ trợ khách hàng</ColTitle>
            <ColTemplate>Phương thức thanh toán</ColTemplate>
          </GridCol>
        </GridWrapper>
      </Center>
    </StyledFooter>
  );
};

export default SecondFooter;
