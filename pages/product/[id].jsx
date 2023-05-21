import { fakeData } from "@/fakeData";
import ProductAPI from "@/src/api/product";
import { CartContext } from "@/src/components/CartContext";
import Center from "@/src/components/Center";
import Coupon from "@/src/components/Coupon";
import Recommend from "@/src/components/Recommend";
import IconGift from "@/src/components/icon/IconGift";
import MainLayout from "@/src/layout/MainLayout";
import { formatPrice } from "@/src/util/helpers";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//css product
const WrapperDetail = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  background-color: white;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  gap: 20px;
`;
const SecondGridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FirstGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: self-start;
`;

const SecondGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: self-start;
`;

const IncreaseWrap = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  span {
    padding: 0 27px;
  }
`;

const SecondWrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px 20px;
`;

// css description

const DescriptionWrapper = styled.div`
  padding: 20px;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1.6fr 0.4fr;
`;
const ProductPage = () => {
  const router = useRouter();
  const [detailProduct, setDetailProduct] = useState();
  const [numberOfOrders, setNumberOfOrders] = useState(1);
  const [enableButtonIncrease, setEnableButtonIncrease] = useState(false);
  const [enableButtonDecrease, setEnableButtonDecrease] = useState(false);

  const { addProduct } = useContext(CartContext);
  const addTocard = () => {
    addProduct(detailProduct?.id);
  };
  const fetchDetailProduct = async () => {
    const data = await ProductAPI.getDetailProduct(router.query.id);
    console.log(data);
    setDetailProduct(data.data);
  };
  useEffect(() => {
    fetchDetailProduct();
  }, []);

  return (
    <Center>
      <WrapperDetail>
        <div>
          {/* {detailProduct?.anh.map((img, index) => (
            <img src={img} key={index} />
          ))} */}
          <img src={fakeData[0].images} alt="" />
        </div>
        <SecondGridItem>
          <FirstGridWrapper>
            <span className="text-3xl font-medium">{detailProduct?.ten}</span>
            <span>
              Tình trạng:
              <span className="text-yellow-400">
                Còn {detailProduct?.soluong} sản phẩm
              </span>
            </span>
            <div className="w-full bg-gray-100 rounded-lg p-2">
              <span className="font-semibold text-2xl text-red-500">
                {formatPrice(detailProduct?.giatien)} đ
              </span>
            </div>
            <Coupon />
            <button
              onClick={addTocard}
              className="bg-green-800 p-3 text-white rounded-lg">
              Thêm vào giỏ hàng
            </button>
          </FirstGridWrapper>
          <SecondGridWrapper>
            <SecondWrapperItem>
              <div className="flex flex-col gap-3 border p-4 rounded-lg">
                <span className="text-xl font-semibold">
                  Chỉ có tại Nông Sản Đà Nẵng
                </span>
                <div className="flex items-center gap-2">
                  <img className="w-8" src="/images/fresh_cert.webp" alt="" />
                  <span>100% Nguyên chất</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-8" src="/images/medal_cert.webp" alt="" />
                  <span>HACCP, ISO, ATTP, VIETGAP</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-8" src="/images/organic_cert.webp" alt="" />
                  <span>
                    Không biến đổi gen, không hương liệu, không tạp chấ
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-8" src="/images/heal_cert.webp" alt="" />
                  <span>An toàn cho sức khoẻ</span>
                </div>
              </div>
            </SecondWrapperItem>
          </SecondGridWrapper>
        </SecondGridItem>
      </WrapperDetail>
      <DescriptionWrapper>
        <div className="flex flex-col gap-4 border-r pr-10">
          <span className="font-bold text-2xl text-gray-500">
            Mô tả sản phẩm
          </span>
          <span>{detailProduct?.mota}</span>
        </div>
        <div>
          <Recommend />
        </div>
      </DescriptionWrapper>
    </Center>
  );
};

ProductPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductPage;
