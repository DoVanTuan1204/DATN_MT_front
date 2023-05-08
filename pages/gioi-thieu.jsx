import MainLayout from '@/src/layout/MainLayout'
import React from 'react'

const Introduce = () => {
  return <div>Introduce</div>
}

Introduce.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default Introduce
