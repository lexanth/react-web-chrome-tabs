import React from 'react'
import styled, { css } from 'styled-components'
import { TABBAR_HEIGHT, TAB_WIDTH } from './constants'
import { TabShape } from './types'
import Tab from './Tab'
import { OpaqueInterpolation, animated } from 'react-spring'

const row = css`
  background-color: aqua;
  color: black;
  display: flex;
  height: ${TABBAR_HEIGHT}px;
  width: ${TAB_WIDTH * 3}px;
  border-radius: 5px;
  position: absolute;
`

const Row = styled.div`
  ${row};
`

const OverlayRow = styled(animated.div)`
  ${row};
  background-color: palevioletred;
  color: white;
`

const TabRowContainer = styled.div`
  position: relative;
  height: ${TABBAR_HEIGHT}px;
  width: ${TAB_WIDTH * 3}px;
`

type Props = {
  tabs: Array<TabShape>
  activeTabIndex: OpaqueInterpolation<number>
  setActiveTabIndex: (index: number) => void
}
const TabBar: React.FC<Props> = ({
  tabs,
  activeTabIndex,
  setActiveTabIndex,
}) => {
  const overlayStyle = {
    clipPath: activeTabIndex.interpolate({
      range: [0, 2],
      output: [
        `inset(0 ${2 * TAB_WIDTH}px 0 0px)`,
        `inset(0 0px 0 ${2 * TAB_WIDTH}px)`,
      ],
    }),
  }

  return (
    <TabRowContainer>
      <Row>
        {tabs.map((tab, i) => (
          <Tab key={tab.id} onClick={() => setActiveTabIndex(i)}>
            {tab.icon}
          </Tab>
        ))}
      </Row>
      <OverlayRow style={overlayStyle}>
        {tabs.map(tab => (
          <Tab key={tab.id}>{tab.icon}</Tab>
        ))}
      </OverlayRow>
    </TabRowContainer>
  )
}
export default TabBar
