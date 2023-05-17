import Center from "@/src/components/Center";
import NewProduct from "@/src/components/NewProduct";
import MainLayout from "@/src/layout/MainLayout";
import styled from "styled-components";

const TechFood = () => {
  const TitleWholeSale = styled.span`
    font-size: 30px;
  `;
  return (
    <Center>
      <div className="mt-10">
        <TitleWholeSale>Thực phẩm công nghệ</TitleWholeSale>
        <NewProduct />
      </div>
    </Center>
  );
};

TechFood.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default TechFood;
