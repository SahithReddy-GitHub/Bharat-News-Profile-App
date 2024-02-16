import {Component} from 'react'

import './index.css'
import Sidebar from '../Sidebar'
import Profile from '../Profile'
import HistoryCard from '../HistoryCard'
import TabCard from '../TabCard'
import ProfileContext from '../../context/ProfileContext'

const historyList = [
  {
    id: '1',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2022/04/infoedge-featured-1-490x367.png',
    title:
      'Info Edge’s Sanjeev Bikhchandani Sceptical About Startups Eyeing IPO W...',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '2',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2023/03/info-edge-invest-featured--490x367.png',
    title: 'Info Edge Q3: PAT Jumps 157% YoY To INR 119.4 Cr',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '3',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/02/Hero-18-490x367.png',
    title: 'Microsoft To Make 75,000 Indian Women Developers AI-Ready By 2025',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '4',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2023/11/deepfake-explainer-ftr-490x367.png',
    title:
      'The Software Alliance Urges IT Ministry To Avoid One Size Fits All App...',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
]

class History extends Component {
  componentDidMount = () => {
    this.changeTab('HISTORY')
  }

  render() {
    return (
      <ProfileContext.Consumer>
        {value => {
          const {changeTab} = value
          this.changeTab = changeTab

          return (
            <div className="bgProfile">
              <Sidebar />
              <div className="mainContainer">
                <Profile />
                <hr />
                <TabCard />
                <ul className="historyList">
                  {historyList.map(eachPost => (
                    <HistoryCard key={eachPost.id} data={eachPost} />
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </ProfileContext.Consumer>
    )
  }
}

export default History
