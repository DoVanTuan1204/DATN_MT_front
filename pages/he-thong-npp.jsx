import Center from '@/src/components/Center'
import MainLayout from '@/src/layout/MainLayout'

const DistributorSystem = () => {
  return (
    <Center>
      <div className="flex flex-col gap-7 bg-white p-10 mt-10 rounded-xl">
        <span className="text-3xl">Hệ thống Đại lý, NPP</span>
        <p>
          Nhằm tạo điều kiện thuận lợi cho khách hàng mua sản phẩm Nước cốt sâm
          dây Ngọc Linh Langbiang Food và các sản phẩm thực phẩm công nghệ của
          Nông sản LangBiang: Trà hoa, trà OO long, Cà phê, Trái cây sấy lạnh,
          nước cốt, bột rau củ..... Quý khách có thể mua tại hệ thống ONINE, bao
          gồm: website, shopee, lazada, tiki....hoặc mua trực tiếp tại hơn{' '}
          <span className="text-red-500 font-semibold text-2xl">350</span> cửa
          hàng, đại lý, hệ thống nhà thuốc trên toàn quốc.
        </p>
        <img src="/images/hethongdaily.webp" alt="" />
        <span className="uppercase font-semibold text-xl">
          I - Hệ thống kênh phân phối
          <span className="text-red-500"> online</span>
        </span>
        <ul
          type=""
          className="list-decimal flex flex-col gap-3 p-4 font-semibold text-lg"
        >
          <li>
            Website
            <ul className="list-disc mx-4">
              <li>
                <a href="https://nongsanlangbiang.com">
                  https://nongsanlangbiang.com
                </a>
              </li>
              <li>
                <a href="https://langbiangagri.com">
                  https://langbiangagri.com
                </a>
              </li>
              <li>
                <a href="https://nongsanlangbiang.vn">
                  https://nongsanlangbiang.vn
                </a>
              </li>
              <li>
                <a href="https://dacsandalatlangbiang.com">
                  https://dacsandalatlangbiang.com
                </a>
              </li>
              <li>
                <a href="https://cafelangbiang.com">
                  https://cafelangbiang.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            Zalopage :
            <span className="font-thin text-base">Truy cập tại đây</span>
          </li>
          <li className="text-red-500">Tiktok</li>
          <li>
            Fanpage Langbiang
            <ol className="font-medium mx-4 text-lg text-blue-500 list-decimal">
              <li>Nông sản LangBiang</li>
              <li>Showroom Đặc sản LangBiang Đà Lạt</li>
              <li>LBA - Chuyên sỉ Rau, Củ, Quả tươi</li>
              <li>Mộc trà LangBiang</li>
              <li>Hồng treo gió Langbiang</li>
              <li>Trà dưỡng sinh Langbiang</li>
              <li>Bột rau củ sấy lạnh</li>
              <li>Quà tết Langbiang</li>
              <li>Muối xí muội Langbiang</li>
            </ol>
          </li>
          <li>
            Kênh thương mại điện tử
            <ol className="flex flex-col gap-1 list-decimal mx-4">
              <li>Shopee</li>
              <li>Shoppeefood</li>
              <li>Shopeemart</li>
              <li>Tiki</li>
              <li>Tiki ngon</li>
              <li>Lazada</li>
              <li>Sendo</li>
              <li>Loship</li>
              <li>Grabmart</li>
            </ol>
          </li>
        </ul>
        <span className="uppercase font-semibold text-xl">
          II - HỆ THỐNG KÊNH PHÂN PHỐI OFFLINE: SIÊU THỊ, CỬA HÀNG, NHÀ THUỐC,
          ĐẠI LÝ, NPP: Aeon, BigC, Co.opmart, Citymart, Genshai....Trung Sơn
          Pharma, Long Châu Pharma, Minh Châu Pharma, Codupha, Nhân Hòa Pharma,
          Ngọc Dung Pharma, Color man Food, Wow mart, Trường Sinh Group, Bệnh
          viện Sài Gòn ITO, …
        </span>
      </div>
    </Center>
  )
}

DistributorSystem.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default DistributorSystem
