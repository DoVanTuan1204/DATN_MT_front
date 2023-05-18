import React from "react";
import styled from "styled-components";

const WrapperRecommend = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const WrapperTrademark = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  label {
    display: flex;
    gap: 14px;
    align-items: center;
  }
  input {
    scale: 180%;
  }
`;
const MayBeYouLikeThisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const MayBeYouLikeThis = styled.span`
  padding: 10px;
  background-color: #f5a623;
  color: white;
  border-radius: 8px;
  width: 100%;
`;
const WrapperItem = styled.div`
  display: flex;
  flex-direction: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0 9px 9px 0;
  }
`;
const WrapperImage = styled.div`
  position: relative;
  width: 170px;

  span {
    position: absolute;
    top: 0;
    padding: 1px;
    width: 30px;
    background-color: red;
    color: white;
    font-size: 10px;
    border-radius: 0 8px 8px 0;
  }
  img {
    padding: 6px;
    max-width: 100%;
  }
`;
const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding-right: 4px;
`;

const Recommend = () => {
  return (
    <WrapperRecommend>
      <div>
        <span className="uppercase">Thương hiệu</span>
        <WrapperTrademark>
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark">Đà Nẵng Agri</span>
          </label>
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark">Khác</span>
          </label>
        </WrapperTrademark>
      </div>
      <MayBeYouLikeThisWrapper>
        <MayBeYouLikeThis>Có thể bạn sẽ thích</MayBeYouLikeThis>
        <WrapperItem>
          <WrapperImage>
            <img src="/images/buoi_5_roi.jpg" />
            <span>-17%</span>
          </WrapperImage>
          <WrapperContent>
            <p>Hộp bột chiết xuất Sâm dây Ngọc linh</p>
            <p className="font-bold text-red-700">
              215,500đ
              <span className="font-thin text-sm text-gray-500 line-through">
                258,000đ
              </span>
            </p>
          </WrapperContent>
        </WrapperItem>
      </MayBeYouLikeThisWrapper>
    </WrapperRecommend>
  );
};

export default Recommend;
