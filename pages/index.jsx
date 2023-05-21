import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import Center from "@/src/components/Center";
import styled from "styled-components";
import { GreenCode } from "@/ColorCode";
import NewProduct from "@/src/components/ListProduct";

const BgImage = styled.div`
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  div {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 240px 0;
    @media screen and (max-width: 768px) {
      padding: 10px;
      gap: 10px;
    }
  }
`;
const SecondBgImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    img {
      max-width: 100%;
    }
  }
`;
const BestSeller = styled.div`
  display: flex;
  justify-content: center;
  span {
    margin-top: 50px;
    font-size: 24px;
    border-bottom: 1px solid ${GreenCode};
    padding: 10px;
  }
`;
const Logo = styled.span`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid ${GreenCode};
  padding: 10px;
`;

const DesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
  img {
    max-width: 220px;
  }
`;

const HomePage = () => {
  return (
    <div className="w-full">
      <BgImage
        style={{
          backgroundImage: `url("/images/banner_homepage.webp")`,
        }}>
        <div>
          <span className=" font-semibold">Khuyến mãi đặc biệt</span>
          <span className=" font-semibold text-[50px]">Sản phẩm tốt nhất</span>
          <span className=" font-semibold text-[50px]">Giá cả tốt nhất</span>
          <span className=" font-semibold">Mua sắm ngay cùng chúng tôi</span>
          <span>Special offer</span>
        </div>
      </BgImage>
      <Center>
        <SecondBgImage>
          <div>
            <img src="/images/banner1.webp" alt="" />
          </div>
          <div className="flex flex-col">
            <img src="/images/discount20.webp" />
            <img src="/images/banner3.webp" />
          </div>
        </SecondBgImage>
        <BestSeller>
          <span>Sản phẩm bán chạy</span>
        </BestSeller>
        <NewProduct />
        <DesWrapper>
          <Logo>Nông sản Đà Nẵng</Logo>
          <div>
            <img src="/images/des1.webp" alt="" />
            <img src="/images/des2.webp" alt="" />
            <img src="/images/des3.webp" alt="" />
            <img src="/images/des4.webp" alt="" />
            <img src="/images/des5.webp" alt="" />
          </div>
        </DesWrapper>
      </Center>
    </div>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
