import React from 'react'
import styled from 'styled-components'
import RadioIcon from '@material-ui/icons/Radio'
import ComputerIcon from '@material-ui/icons/Computer'
import TvIcon from '@material-ui/icons/Tv'
import TabBar from './TabBar'
import Tab from './Tab'

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
`

const ContentPage = styled.div`
  border: 10px solid cornflowerblue;
  box-sizing: border-box;
  flex: 0 0 100%;
`

const Pager: React.FC<{}> = () => {
  return (
    <PagerContainer>
      <TabBar>
        <Tab>
          <RadioIcon />
        </Tab>
        <Tab>
          <ComputerIcon />
        </Tab>
        <Tab>
          <TvIcon />
        </Tab>
      </TabBar>
      <Content>
        <ContentPage>
          <h1>Radio</h1>
        </ContentPage>
        <ContentPage>
          <h1>Computer</h1>
        </ContentPage>
        <ContentPage>
          <h1>TV</h1>
        </ContentPage>
      </Content>
    </PagerContainer>
  )
}
export default Pager
