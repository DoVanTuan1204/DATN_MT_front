import Center from '@/src/components/Center'
import NewProduct from '@/src/components/NewProduct'
import MainLayout from '@/src/layout/MainLayout'

const FreshProducts = () => {
  return (
    <Center>
      <div className="mt-10">
        <NewProduct />
      </div>
    </Center>
  )
}

FreshProducts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default FreshProducts
