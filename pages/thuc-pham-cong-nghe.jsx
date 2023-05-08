import Center from '@/src/components/Center'
import NewProduct from '@/src/components/NewProduct'
import MainLayout from '@/src/layout/MainLayout'

const TechFood = () => {
  return (
    <Center>
      <div className="mt-10">
        <NewProduct />
      </div>
    </Center>
  )
}

TechFood.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default TechFood
