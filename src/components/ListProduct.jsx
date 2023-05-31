import React, { useEffect, useState } from "react";
import Center from "./Center";
import ProductBox from "./ProductBox";
import styled from "styled-components";
import Recommend from "./Recommend";
import ProductAPI from "@/src/api/product";
import ReactPaginate from "react-paginate";

const GridWrapper = styled.div`
  background-color: white;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const RecommendWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SortBar = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  font-size: 20px;
  border-bottom: 1px solid #d3d3d3;
  @media screen and (max-width: 768px) {
    display: none;
  }
  span {
    color: gray;
    cursor: pointer;
    &:hover {
      color: #ffd408;
    }
  }
`;
const Border = styled.div`
  border-left: 1px solid gray;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;
const ListProduct = (products) => {
  const [listProduct, setListProduct] = useState([] || products);
  const [pageCount, setPageCount] = useState(0);
  const [paging, setPaging] = useState();

  const fetchListProduct = async () => {
    const data = await ProductAPI.getListProduct({ page: paging });
    setListProduct(data.data.results);
    setPageCount(Math.ceil(data.data.count / 10));
  };

  useEffect(() => {
    fetchListProduct();
  }, [paging]);

  const handleChangePage = async (data) => {
    let page = data.selected + 1;
    setPaging(page);
  };
  return (
    <GridWrapper>
      <RecommendWrapper>
        <Recommend />
      </RecommendWrapper>
      <Border>
        <Center>
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
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handleChangePage}
            previousLabel="< previous"
            nextLabel="next >"
            marginPagesDisplayed={2}
            pageClassName="border p-2"
            previousClassName="border p-2"
            nextClassName="border p-2"
            nextLinkClassName=""
            breakLabel="..."
            containerClassName="mt-2 flex flex-row gap-2 justify-center"
            activeClassName="bg-[#fd7e14] text-green-900"
            renderOnZeroPageCount={null}
          />
        </Center>
      </Border>
    </GridWrapper>
  );
};

export default ListProduct;
