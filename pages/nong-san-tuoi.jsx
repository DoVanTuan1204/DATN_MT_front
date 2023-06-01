import { GreenCode } from "@/ColorCode";
import Center from "@/src/components/Center";
import NewProduct from "@/src/components/ListProduct";
import MainLayout from "@/src/layout/MainLayout";
import styled from "styled-components";

const BgImage = styled.div`
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;

  div {
    color: ${GreenCode};
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

const TitleWholeSale = styled.span`
  font-size: 30px;
`;
const FreshProducts = () => {
  return (
    <div>
      <BgImage
        style={{
          backgroundImage: `url("/images/bgNongSanTuoi.jpg")`,
        }}>
        <div>
          <span className=" font-semibold">Khuyến mãi đặc biệt</span>
          <span className="text-[30px] font-semibold lg:text-[50px]">
            Sản phẩm tốt nhất
          </span>
          <span className="text-[30px] font-semibold lg:text-[50px]">
            Giá cả tốt nhất
          </span>
          <span className=" font-semibold">Mua sắm ngay cùng chúng tôi</span>
        </div>
      </BgImage>
      <Center>
        <div className="mt-10">
          <TitleWholeSale>Nông sản tươi</TitleWholeSale>
          <NewProduct />
        </div>
      </Center>
    </div>
  );
};

FreshProducts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default FreshProducts;
