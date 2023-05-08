import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  &:hover {
    border-radius: 0 0 9px 9px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const WhiteBox = styled.div`
  background-color: white;
  height: 200px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-height: 250px;
  }
`;
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
`;
const ProductBox = ({ id, name, title, description, images }) => {
  return (
    <ProductWrapper>
      <WhiteBox>
        <img src={images} />
      </WhiteBox>
      <Title>
        {name}
        <span>Liên hệ</span>
      </Title>
    </ProductWrapper>
  );
};

export default ProductBox;
