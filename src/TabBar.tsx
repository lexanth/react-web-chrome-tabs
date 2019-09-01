import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { TABBAR_HEIGHT, TAB_WIDTH } from './constants'

const Row = styled.div`
  background-color: aqua;
  color: black;
  display: flex;
  height: ${TABBAR_HEIGHT}px;
  width: ${TAB_WIDTH * 3}px;
  border-radius: 5px;
`

type Props = {
  children: ReactNode
}
const TabBar: React.FC<Props> = ({ children }) => {
  return <Row>{children}</Row>
}
export default TabBar
