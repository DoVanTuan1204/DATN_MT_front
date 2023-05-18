import ProductAPI from "@/src/api/product";
import { CartContext } from "@/src/components/CartContext";
import Center from "@/src/components/Center";
import Coupon from "@/src/components/Coupon";
import Input from "@/src/components/Input";
import Table from "@/src/components/Table";
import MainLayout from "@/src/layout/MainLayout";
import { formatPrice } from "@/src/util/helpers";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const WrapperOrders = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 20px;
`;
const Box = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  height: fit-content;
  h2 {
    margin-top: 10px;
    font-size: 20px;
    padding: 10px 0;
  }
`;

const ImageWrapper = styled.td`
  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 10px;
  }
`;
const ButtonIncrease = styled.button`
  padding: 2px 8px;
  border: 1px solid gray;
  border-radius: 3px;
`;
const IncreaseValue = styled.span`
  padding: 0 10px;
`;
const PaymentButton = styled.button`
  width: 100%;
  background-color: orange;
  color: white;
  padding: 7px;
  border-radius: 10px;
`;
const Cart = () => {
  const { cartProduct, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const unique = (arr) => {
    return Array.from(new Set(arr));
  };

  const fetchDetailProduct = async () => {
    const detailProduct = await Promise.all(
      unique(cartProduct).map(async (id) => {
        const a = await ProductAPI.getDetailProduct(id);
        return a.data;
      })
    );
    setProducts(detailProduct);
  };

  useEffect(() => {
    if (cartProduct.length > 0) {
      fetchDetailProduct();
    }
  }, [cartProduct]);

  const moreOfThisProduct = (id) => {
    addProduct(id);
  };
  const lessOfThisProduct = (id) => {
    removeProduct(id);
  };
  let total = 0;
  for (const productID of cartProduct) {
    const price = products.find((p) => p.id === productID)?.giatien || 0;
    total += price;
  }
  const PaymentSuccess = () => {
    router.push("/thanh-toan-thanh-cong");
  };
  return (
    <div>
      <Center>
        <WrapperOrders>
          <Box>
            <span className="text-gray-500 font-semibold text-2xl">
              Giỏ hàng
            </span>
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Số lương</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <ImageWrapper>
                        <img src="/images/buoi_5_roi.jpg" alt="" />
                        {product.ten}
                      </ImageWrapper>
                      <td>
                        <ButtonIncrease
                          onClick={() => lessOfThisProduct(product.id)}
                          type="button">
                          -
                        </ButtonIncrease>
                        <IncreaseValue>
                          {cartProduct.filter((id) => id === product.id).length}
                        </IncreaseValue>
                        <ButtonIncrease
                          onClick={() => moreOfThisProduct(product.id)}
                          type="button">
                          +
                        </ButtonIncrease>
                      </td>
                      <td>
                        {formatPrice(
                          cartProduct.filter((id) => id === product.id).length *
                            product.giatien
                        )}
                        đ
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>

                    <td>{formatPrice(total)}đ</td>
                  </tr>
                </tbody>
              </Table>
            )}

            <Coupon />
          </Box>
          <Box>
            <h2>Thông tin người mua</h2>
            <Input type="text" placeholder="Tên người mua" />
            <Input type="text" placeholder="Số điện thoại" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Số nhà" />
            <Input type="text" placeholder="Phường" />
            <Input type="text" placeholder="Quận" />
            <PaymentButton onClick={() => PaymentSuccess()}>
              Thanh toán
            </PaymentButton>
          </Box>
        </WrapperOrders>
      </Center>
    </div>
  );
};

Cart.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Cart;
