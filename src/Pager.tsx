import React, { useRef } from 'react'
import styled from 'styled-components'
import TabBar from './TabBar'
import { TabShape } from './types'
import { useSpring } from 'react-spring'
import useViewportSizes from 'use-viewport-sizes'
import { useScroll } from 'react-use-gesture'

const PagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  margin-top: 10px;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`

const ContentPage = styled.div`
  border: 10px solid cornflowerblue;
  box-sizing: border-box;
  flex: 0 0 100%;
  scroll-snap-align: start;
`

const Pager: React.FC<{ tabs: Array<TabShape> }> = ({ tabs }) => {
  const [viewportWidth] = useViewportSizes()
  const [scrollPos, setScrollPos] = useSpring(() => ({ x: 0 }))
  const activeTabIndex = scrollPos.x.interpolate({
    range: [0, 2 * viewportWidth],
    output: [0, 2],
  })
  const contentContainer = useRef<HTMLDivElement>(null)
  const setActiveTabIndex = (index: number) => {
    if (contentContainer.current) {
      contentContainer.current.scrollTo({
        left: index * viewportWidth,
        behavior: 'smooth',
      })
    }
  }
  const bind = useScroll(({ xy }) => {
    setScrollPos({ x: xy[0], immediate: true })
  })

  return (
    <PagerContainer>
      <TabBar
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
      <Content ref={contentContainer} {...bind()}>
        {tabs.map(tab => (
          <ContentPage key={tab.id}>{tab.content}</ContentPage>
        ))}
      </Content>
    </PagerContainer>
  )
}
export default Pager
