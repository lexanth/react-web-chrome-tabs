import styled from 'styled-components'
import { TAB_WIDTH } from './constants'

export const Tab = styled.div`
  width: ${TAB_WIDTH}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  &:last-child {
    border-right: none;
  }
`

export default Tab
