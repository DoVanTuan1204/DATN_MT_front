import Center from "@/src/components/Center";
import MainLayout from "@/src/layout/MainLayout";
import StorageUtil, { STORAGE_KEY } from "@/src/util/storage";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(StorageUtil.get(STORAGE_KEY.RECENT_CART));
  }, []);

  return (
    <Center>
      {data?.map((item) => (
        <div key={item.id}>
          <div>ten: {item.ten}</div>
          <div>so luong: {item.amount}</div>
          <div>gia tien: {item.giatien}</div>
          <div>tong cong: {item.giatien * item.amount}</div>
        </div>
      ))}
    </Center>
  );
};

Cart.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Cart;
