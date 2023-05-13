import { CartContext } from "@/src/components/CartContext";
import IconSuccess from "@/src/components/icon/IconSuccess";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const PaymentSuccess = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(5);
  const { clearCart } = useContext(CartContext);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      router.push("/");
      clearCart();
    }
  }, [counter]);
  const backToFirstPage = () => {
    router.push("/");
    clearCart();
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <div className="text-green-500 w-40">
          <IconSuccess />
        </div>
        <span className="text-3xl text-orange-400">Thanh toán thành công</span>
        <span className="text-xl">Bạn sẽ quay về trang chủ sau {counter}</span>
        <button
          onClick={backToFirstPage}
          className="p-4 bg-orange-500 rounded-lg text-xl text-white">
          Tiếp tục mua sắm
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
