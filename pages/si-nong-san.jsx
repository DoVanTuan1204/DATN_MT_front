import Center from "@/src/components/Center";
import NewProduct from "@/src/components/NewProduct";
import MainLayout from "@/src/layout/MainLayout";
import styled from "styled-components";

const TitleWholeSale = styled.span`
  font-size: 30px;
`;
const WholeSale = () => {
  return (
    <Center>
      <div className="mt-10">
        <TitleWholeSale>Nông sản bán sỉ</TitleWholeSale>

        <NewProduct />
      </div>
    </Center>
  );
};

WholeSale.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default WholeSale;
