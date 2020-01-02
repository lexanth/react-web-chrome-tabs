import React from 'react'
import Pager from './Pager'
import RadioIcon from '@material-ui/icons/Radio'
import ComputerIcon from '@material-ui/icons/Computer'
import TvIcon from '@material-ui/icons/Tv'
import { TabShape } from './types'

const tabs: Array<TabShape> = [
  { icon: <RadioIcon />, content: <h1>Radio</h1>, id: 'radio' },
  { icon: <ComputerIcon />, content: <h1>Computer</h1>, id: 'computer' },
  { icon: <TvIcon />, content: <h1>TV</h1>, id: 'tv' },
]

const App: React.FC = () => {
  return <Pager tabs={tabs} />
}

export default App
