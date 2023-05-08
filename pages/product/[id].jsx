import Center from '@/src/components/Center'
import MainLayout from '@/src/layout/MainLayout'

const ProductPage = () => {
  return <Center></Center>
}

ProductPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default ProductPage
