import React from 'react'
import styled, { css } from 'styled-components'
import { TABBAR_HEIGHT, TAB_WIDTH } from './constants'
import { TabShape } from './types'
import Tab from './Tab'
import { OpaqueInterpolation, animated } from 'react-spring'

type TabCountProp = {
  tabCount: number
}

const tabBarSize = css<TabCountProp>`
  height: ${TABBAR_HEIGHT}px;
  width: ${props => props.tabCount * TAB_WIDTH}px;
`
const row = css<TabCountProp>`
  ${tabBarSize};
  background-color: aqua;
  color: black;
  display: flex;
  border-radius: 5px;
  position: absolute;
`

const Row = styled.div<TabCountProp>`
  ${row};
`

const OverlayRow = styled(animated.div)<TabCountProp>`
  ${row};
  background-color: palevioletred;
  color: white;
`

const TabRowContainer = styled.div<TabCountProp>`
  position: relative;
  ${tabBarSize};
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
  const tabCount = tabs.length
  const maxTabIndex = tabCount - 1
  const overlayStyle = {
    clipPath: activeTabIndex.interpolate({
      range: [0, maxTabIndex],
      output: [
        `inset(0 ${maxTabIndex * TAB_WIDTH}px 0 0px)`,
        `inset(0 0px 0 ${maxTabIndex * TAB_WIDTH}px)`,
      ],
    }),
  }

  return (
    <TabRowContainer tabCount={tabCount}>
      <Row tabCount={tabCount}>
        {tabs.map((tab, i) => (
          <Tab key={tab.id} onClick={() => setActiveTabIndex(i)}>
            {tab.icon}
          </Tab>
        ))}
      </Row>
      <OverlayRow style={overlayStyle} tabCount={tabCount}>
        {tabs.map(tab => (
          <Tab key={tab.id}>{tab.icon}</Tab>
        ))}
      </OverlayRow>
    </TabRowContainer>
  )
}
export default TabBar
