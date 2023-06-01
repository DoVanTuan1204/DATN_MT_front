import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "@/src/util/helpers";
import StorageUtil, { STORAGE_KEY } from "../util/storage";
import { BackgroundProductBox, MoneyGreenCode } from "@/ColorCode";
import IconStar from "./icon/IconStar";

const ProductWrapper = styled.div`
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f9ee;
  &:hover {
    border-radius: 0 0 9px 9px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const WhiteBox = styled.div`
  background-color: ${BackgroundProductBox};
  height: 200px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-height: 250px;
  }
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  span {
    color: ${MoneyGreenCode};
    font-weight: 600;
  }
`;
const StarWrapper = styled.div`
  display: flex;
  color: orange;
  margin-top: 10px;
  margin-left: 10px;
`;
const ProductBox = ({ product }) => {
  const router = useRouter();

  const productPage = (id) => {
    router.push("/product/" + id);
  };

  // const addToCart = (product) => {
  //   const params = {
  //     id: product?.id,
  //     ten: product?.ten,
  //     giatien: product?.giatien,
  //     anh: product?.anh,
  //     amount: 1,
  //   };
  //   const currentCart = StorageUtil.get(STORAGE_KEY.RECENT_CART);
  //   if (!currentCart) {
  //     StorageUtil.set(STORAGE_KEY.RECENT_CART, [params]);
  //     return;
  //   }
  //   const a = currentCart.filter((item) => item.id === params.id);
  //   if (a.length !== 0) {
  //     const b = currentCart.map((item) => {
  //       if (item.id === params.id) {
  //         return { ...params, amount: item.amount + 1 };
  //       }
  //       return item;
  //     });
  //     StorageUtil.set(STORAGE_KEY.RECENT_CART, b);
  //   } else {
  //     StorageUtil.set(STORAGE_KEY.RECENT_CART, [...currentCart, params]);
  //   }
  // };

  return (
    <ProductWrapper
      onClick={() => {
        productPage(product.id);
        // addToCart(product)
      }}>
      <WhiteBox>
        <img src={product?.rootImage} />
      </WhiteBox>
      <Title>
        <StarWrapper>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </StarWrapper>
        {product?.ten}
        <span>{formatPrice(product?.giatien)} VND</span>
      </Title>
    </ProductWrapper>
  );
};

export default ProductBox;
