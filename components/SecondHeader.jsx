import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #fd6403;
`;

const SecondNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  color: #ffff;
  text-transform: uppercase;
`;

const SecondHeader = () => {
  return (
    <StyledHeader>
      <Center>
        <SecondNav>
          <Link href={"/khuyen-mai"}>Khuyến mãi</Link>
          <Link href={"/si-nong-san"}>Sỉ nông sản xuất khẩu</Link>
          <Link href={"/nong-san-tuoi"}>Nông sản tươi</Link>
          <Link href={"/thuc-pham-cong-nghe"}>Thực phẩm công nghệ</Link>
          <Link href={"/he-thong-npp"}>Hệ thống npp</Link>
          <Link href={"/cong-tac-vien"}>CTV</Link>
          <Link href={"/gia-si"}>Giá sỉ</Link>
          <Link href={"/gioi-thieu"}>Giới thiệu</Link>
        </SecondNav>
      </Center>
    </StyledHeader>
  );
};

export default SecondHeader;
