import { GreenCode, SecondGreenCode } from "@/ColorCode";
import { CartContext } from "@/src/components/CartContext";
import Center from "@/src/components/Center";
import Table from "@/src/components/Table";
import MainLayout from "@/src/layout/MainLayout";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ProfileStyled = styled.div`
  background-color: white;
  margin-top: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 1px dashed gray;
  gap: 20px;
  padding-right: 200px;
  @media screen and (max-width: 768px) {
    border-bottom: 1px dashed gray;
    border-right: none;
  }
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
  span {
    color: ${SecondGreenCode};
  }
  button {
    color: white;
    background-color: ${SecondGreenCode};
    padding: 10px;
    border-radius: 10px;
  }
`;

const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  h2 {
    font-size: 30px;
  }
  span {
    font-size: 16px;
  }
`;
const Profile = () => {
  const { clearCart } = useContext(CartContext);
  const router = useRouter();
  const [userInformation, setUserInformation] = useState();
  useEffect(() => {
    setUserInformation(JSON.parse(localStorage.getItem("profile")));
  }, []);
  const logout = () => {
    clearCart();
    localStorage.removeItem("profile");
    localStorage.removeItem("JWT");
    router.push("/login");
  };
  return (
    <Center>
      <ProfileStyled>
        <FirstBox>
          <h2>Trang tài khoản</h2>
          <h3>Xin chào {userInformation?.tenKH}</h3>
          <span>Thông tin tài khoản</span>
          <button onClick={logout}>Đăng xuất</button>
        </FirstBox>
        <SecondBox>
          <h2>Tài khoản</h2>
          <span>Tên khách hàng: {userInformation?.tenKH}</span>
          <span>Địa chỉ: {userInformation?.diachi}</span>
          <span>Số điện thoại: {userInformation?.sdt}</span>
          <span>Căn cước công dân: {userInformation?.cccd}</span>
          <span>Ngày sinh: {userInformation?.ngaysinh}</span>
          <Table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Số lương</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100000000000</td>
                <td>200000000000000000000000</td>
                <td>3000000000000000000000000</td>
              </tr>
            </tbody>
          </Table>
        </SecondBox>
      </ProfileStyled>
    </Center>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
