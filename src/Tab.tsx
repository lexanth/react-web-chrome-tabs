import styled from 'styled-components'
import { TAB_WIDTH } from './constants'

export const Tab = styled.div`
  width: ${TAB_WIDTH}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`

export default Tab
