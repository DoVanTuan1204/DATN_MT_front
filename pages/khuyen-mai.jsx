import Center from '@/src/components/Center'
import MainLayout from '@/src/layout/MainLayout'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Coupon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  border: 0.1px solid #f0f0f0;
  border-radius: 5px;
  margin: 5px;
`
const HeaderCoupon = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
`
const BodyCoupon = styled.div`
  padding: 40px 10px;
`
const UpdateProduct = styled.div`
  border: 8px solid #ffc700;
  border-radius: 8px;
  padding: 20px;
  p {
    background-color: #fff3cd;
    color: #e8af42;
    font-weight: 500;
    padding: 10px;
    border-radius: 8px;
  }
`

const SaleOff = () => {
  return (
    <Center>
      <img className="my-8" src="/images/flashsale_banner.webp" />
      <Wrapper>
        <Coupon>
          <HeaderCoupon>
            <p className="font-bold text-3xl ">LBA5</p>
            <div>Sao chép mã</div>
          </HeaderCoupon>
          <BodyCoupon>
            <p className="text-sm text-gray-600">
              Nhập mã để được giảm 5% cho tất cả đơn hàng từ 99.000đ
            </p>
          </BodyCoupon>
        </Coupon>
        <Coupon>
          <HeaderCoupon>
            <p className="font-bold text-3xl ">LBA5</p>
            <div>Sao chép mã</div>
          </HeaderCoupon>
          <BodyCoupon>
            <p className="text-sm text-gray-600">
              Nhập mã để được giảm 5% cho tất cả đơn hàng từ 1.999.000đ
            </p>
          </BodyCoupon>
        </Coupon>
      </Wrapper>
      <UpdateProduct>
        <p>Sản phẩm đang được cập nhật.</p>
      </UpdateProduct>
    </Center>
  )
}

SaleOff.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default SaleOff
