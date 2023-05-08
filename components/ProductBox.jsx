import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '@/src/util/helpers'

const ProductWrapper = styled.div`
  cursor: pointer;
  &:hover {
    border-radius: 0 0 9px 9px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const WhiteBox = styled.div`
  background-color: white;
  height: 200px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-height: 250px;
  }
`
const Title = styled.h2`
  font-weight: 400;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  span {
    color: red;
    font-weight: 600;
  }
`

const ProductBox = ({ product }) => {
  const router = useRouter()
  const productPage = (id) => {
    router.push('/product/' + id)
  }

  return (
    <ProductWrapper onClick={() => productPage(product.id)}>
      <WhiteBox>
        <img src={'/images/buoi_5_roi.jpg'} />
      </WhiteBox>
      <Title>
        {product.ten}
        <span>{formatPrice(product.giatien)} đ</span>
      </Title>
    </ProductWrapper>
  )
}

export default ProductBox
