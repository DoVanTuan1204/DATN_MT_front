import MainLayout from '@/src/layout/MainLayout'
import React from 'react'

const Collaborators = () => {
  return <div>Collaborators</div>
}

Collaborators.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default Collaborators
