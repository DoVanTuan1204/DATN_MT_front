import SearchAPI from "@/src/api/search";
import Center from "@/src/components/Center";
import ListProduct from "@/src/components/ListProduct";
import ProductBox from "@/src/components/ProductBox";
import MainLayout from "@/src/layout/MainLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: inherit;
`;

const SearchInput = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.4rem;
`;
const InputWrapper = styled.div`
  position: sticky;
  top: 68px;
  margin: 25px 0;
  padding: 5px 0;
`;
const SearchValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: -30px;
`;
const ItemSearchValue = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
`;

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const router = useRouter();
  const searchProduct = async (ev) => {
    try {
      if (ev.target.value === "") {
      } else if (ev.target.value !== "") {
        const res = await SearchAPI.Search(ev.target.value);
        setSearchValue(res?.data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Center>
        <InputWrapper>
          <StyledInput
            onChange={searchProduct}
            autoFocus
            placeholder="Tìm kiếm sản phẩm"
          />
        </InputWrapper>
        {searchValue && (
          <SearchValueWrapper>
            {searchValue.map((data, index) => (
              <ItemSearchValue
                onClick={() => {
                  router.push("/product/" + data?.id);
                }}
                key={index}>
                <span>{data?.ten}</span>
              </ItemSearchValue>
            ))}
          </SearchValueWrapper>
        )}
      </Center>
    </div>
  );
};

export default Search;

Search.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
