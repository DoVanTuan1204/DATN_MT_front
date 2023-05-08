import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Center from '../../../components/Center'
import { navItem } from '@/src/constant'

const StyledHeader = styled.header`
  background-color: #fd6403;
`

const SecondNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  color: #ffff;
  text-transform: uppercase;
`

const SecondHeader = () => {
  return (
    <StyledHeader>
      <Center>
        <SecondNav>
          {navItem.map((item) => (
            <Link key={item.url} href={item.url}>
              {item.label}
            </Link>
          ))}
        </SecondNav>
      </Center>
    </StyledHeader>
  )
}

export default SecondHeader
