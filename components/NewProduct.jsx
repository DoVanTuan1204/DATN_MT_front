import React, { useEffect, useState } from 'react'
import Center from './Center'
import { fakeData } from '@/fakeData'
import ProductBox from './ProductBox'
import styled from 'styled-components'
import Recommend from './Recommend'
import ProductAPI from '@/src/api/product'
const GridWrapper = styled.div`
  background-color: white;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
`
const TitleWholeSale = styled.span`
  font-size: 30px;
`
const SortBar = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  font-size: 20px;
  border-bottom: 1px solid #d3d3d3;
  span {
    color: gray;
    cursor: pointer;
    &:hover {
      color: #ffd408;
    }
  }
`
const NewProduct = () => {
  const [listProduct, setListProduct] = useState([])

  const fetchListProduct = async () => {
    const data = await ProductAPI.getListProduct()
    setListProduct(data.data.results)
  }

  useEffect(() => {
    fetchListProduct()
  }, [])

  return (
    <GridWrapper>
      <Recommend />
      <Center>
        <TitleWholeSale>Sỉ Rau, Củ, Quả tươi</TitleWholeSale>
        <SortBar>
          Sắp xếp :<span>Tên A &rarr; Z</span>
          <span>Tên Z &rarr; A</span>
          <span>Giá tăng dần</span>
          <span>Giá giảm dần</span>
          <span>Hàng mới</span>
        </SortBar>
        <ProductGrid>
          {listProduct?.length > 0 &&
            listProduct.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
        </ProductGrid>
      </Center>
    </GridWrapper>
  )
}

export default NewProduct
