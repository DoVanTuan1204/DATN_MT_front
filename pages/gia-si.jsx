import Center from '@/src/components/Center'
import MainLayout from '@/src/layout/MainLayout'

const WholeSalePrice = () => {
  return (
    <Center>
      <div className="mt-10 bg-white p-10 rounded-xl">
        <span className="font-medium text-2xl">Giá sỉ</span>
        <img src="images/baogiasi.webp" alt="" className="p-7" />
      </div>
    </Center>
  )
}

WholeSalePrice.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default WholeSalePrice
