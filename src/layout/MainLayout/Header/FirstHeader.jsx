import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Center from '../../../components/Center'
import Link from 'next/link'
import IconPhone from '../../../components/icon/IconPhone'
import IconUser from '../../../components/icon/IconUser'
import { BaseOrange } from '@/public/Color'
import Router from 'next/router'
import StorageUtil, { STORAGE_KEY } from '@/src/util/storage'

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 10px 0;
`

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
`

const FirstNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartWrapper = styled.div`
  display: flex;
  gap: 5px;
  border: 2px solid ${BaseOrange};
  padding: 10px;
  border-radius: 10px;
  color: ${BaseOrange};
  cursor: pointer;
`

const FirstHeader = () => {
  return (
    <StyledHeader>
      <Center>
        <FirstNav className="flex flex-row">
          <Logo href={'/'}>Langbiang</Logo>
          <input
            className="bg-gray-200 px-5 py-2 rounded-full w-1/3"
            placeholder="Tìm kiếm sản phẩm"
          />
          <div className="flex flex-row items-center gap-2">
            <div className="bg-green-400 p-1 rounded-full text-white">
              <IconPhone />
            </div>
            <div className="flex flex-col">
              <p>Hỗ trợ khách hàng</p>
              <p className="font-bold">0981 84 88 87</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-green-400 p-1 rounded-full text-white">
              <IconUser />
            </div>
            <div className="flex flex-col">
              <button onClick={() => Router.push('/login')}>Đăng nhập</button>
              <button>Đăng ký</button>
            </div>
          </div>
          <CartWrapper>
            <p>Giỏ hàng</p>
            <p>0</p>
          </CartWrapper>
        </FirstNav>
      </Center>
    </StyledHeader>
  )
}

export default FirstHeader
