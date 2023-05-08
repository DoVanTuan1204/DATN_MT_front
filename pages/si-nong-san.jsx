import Center from '@/src/components/Center'
import NewProduct from '@/src/components/NewProduct'
import MainLayout from '@/src/layout/MainLayout'

const WholeSale = () => {
  return (
    <Center>
      <div className="mt-10">
        <NewProduct />
      </div>
    </Center>
  )
}

WholeSale.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default WholeSale
