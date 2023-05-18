import FirstHeader from "@/src/layout/MainLayout/Header/FirstHeader";
import Footer from "@/src/layout/MainLayout/Footer/FirstFooter";
import SecondHeader from "@/src/layout/MainLayout/Header/SecondHeader";
import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import Center from "@/src/components/Center";

const HomePage = () => {
  return (
    <div>
      <Center>
        <div className="flex flex-col gap-7 bg-white p-10 mt-10 rounded-xl">
          <span className="text-3xl">Chúng tôi là Nông sản Đà Nẵng</span>
          <img src="/images/lanbiang_co_gi.webp" />
          <img src="/images/hethongdaily.webp" alt="" />
          <span className="uppercase font-semibold text-xl text-[#fd7e14]">
            Câu chuyện của Đà Nẵng Agri
          </span>
          <span>
            Đà Nẵng Agri bắt đầu sứ mệnh cung cấp nông sản, đặc sản vùng miền
            theo tôn chỉ Sạch - Chuẩn - Chất từ năm 2017 với sản phẩm đầu tiên:
            <span className="text-red-500 font-semibold">
              Cà chua thân gỗ Magic S.
            </span>
          </span>
          <img src="/images/ca_chua_than_go.webp" />

          <span className="text-orange-300 my-2">
            Năm 2018, LBA bắt đầu triển khai các mã Thực phẩm công nghệ, bao
            gồm: Cà phê, Trà, Trái cây sấy dẻo, trái cây sấy giòn, mứt, nước ép
            trái cây, cà chua thân gỗ Magic S ủ thảo dược, Mật cà chua thân gỗ
            Magic S,...cung ứng cho hệ thống NPP, đại lý, nhà thuốc:
            <span className="text-orange-400 font-semibold my-2">
              pharmacy, Ngọc Dung pharmacy, Nhân Hòa pharmacy, Vitamin house,
              Co.op finelife, Làng hoa Vạn Thành, Tony fruit, Green mart, Nam an
              market, Tintin market, Davin mart, Alina food, Các đại lý: Phú
              Yên, Nghệ An, Kontum, Đà Nẵng, Hà Nội, Tp.HCM, Cần Thơ….
            </span>
            <img className="mt-5" src="/images/dai_ly.webp" />
          </span>
          <span className="uppercase font-semibold text-xl">
            DỊCH VỤ & SẢN PHẨM
          </span>
          <span className="text-blue-400">
            Nông sản Đà Nẵng chuyên cung cấp Nông sản, đặc sản vùng miền đạt các
            tiêu chí chất lượng: HACCP, ISO22000, Chuỗi ATTP, VietGap, Các dịch
            vụ và nhóm sản phẩm tiêu biểu bao gồm:
          </span>
          <ul className="list-decimal text-blue-400 ml-10">
            <li>
              Cung cấp nông sản, đặc sản vùng miền tươi cho hệ thống siêu thị:
              Aeon, BigC, Coopmart, Citimart, Genshai, Topmarket...
            </li>
            <li>Cung cấp nông sản tươi sỉ & xuất khẩu.</li>
            <li>
              Cung cấp thực phẩm công nghệ cho hệ thống nhà thuốc, đại lý, cửa
              hàng trên toàn quốc.
            </li>
            <li>
              Kết nối doanh nhân nước ngoài về giao thương, xúc tiến các dự án
              và xuất khẩu nông sản, đặc sản địa phương.
            </li>
            <li>Trồng nông sản, thảo dược theo nhu cầu.</li>
          </ul>
        </div>
      </Center>
    </div>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
