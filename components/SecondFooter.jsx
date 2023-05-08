import React from "react";
import Center from "./Center";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #a84d0d;
  color: white;
`;
const GridWrapper = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
`;
const ColTemplate = styled.p`
  font-size: 17px;
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
              LBA cung cấp Nông sản, đặc sản vùng miền Sạch - Chuẩn - Chất Địa
            </ColTemplate>
            <ColTemplate>
              LBA cung cấp Nông sản, đặc sản vùng miền Sạch - Chuẩn - Chất Địa
              chỉ: Trụ Sở Chính: 128 đường Thống Nhất, Thị trấn Lạc Dương, Huyện
              Lạc Dương, Tỉnh Lâm Đồng Chi Nhánh & Showroom Tp.Đà Lạt: 93
              Yersin, Phường 10, Tp. Đà Lạt, Lâm Đồng Chi Nhánh TP. Hồ Chí Minh:
              62 đường 21, P8, Q.Gò Vấp, Tp.HCM Xem danh sách điểm bán toàn quốc
            </ColTemplate>
            <ColTemplate>Số điện thoại: 0981 84 88 87</ColTemplate>
            <ColTemplate> Email: sales.m@langbiangagri.com</ColTemplate>
          </GridCol>
          <GridCol>
            <ColTitle>Tìm hiểu thêm</ColTitle>
            <ColTemplate>KHUYẾN MÃI</ColTemplate>
            <ColTemplate>SỈ NÔNG SẢN, XUẤT KHẨU</ColTemplate>
            <ColTemplate>NÔNG SẢN TƯƠI</ColTemplate>
            <ColTemplate>THỰC PHẨM CÔNG NGHỆ</ColTemplate>
            <ColTemplate>HỆ THỐNG NPP</ColTemplate>
            <ColTemplate>CTV</ColTemplate>
            <ColTemplate>GIÁ SỈ</ColTemplate>
            <ColTemplate>GIỚI THIỆU</ColTemplate>
          </GridCol>
          <GridCol>
            <ColTitle>Hỗ trợ khách hàng</ColTitle>
            <ColTemplate>Giới thiệu</ColTemplate>
            <ColTemplate>Liên hệ</ColTemplate>
            <ColTemplate>Ăn sạch Sống khỏe</ColTemplate>
            <ColTemplate>Góc báo chí</ColTemplate>
            <ColTemplate>Chính sách đổi trả</ColTemplate>
            <ColTemplate>Chính sách bảo mật</ColTemplate>
            <ColTemplate>Điều khoản dịch vụ</ColTemplate>
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
