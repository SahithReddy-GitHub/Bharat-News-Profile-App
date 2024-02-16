import {Component} from 'react'

import './index.css'
import Sidebar from '../Sidebar'
import Profile from '../Profile'
import NewsCard from '../NewsCard'
import TabCard from '../TabCard'
import ProfileContext from '../../context/ProfileContext'

const bookmarksList = [
  {
    id: '1',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/01/pharmeasy-CCI-featured--490x367.png',
    title:
      'PharmEasy Rights Issue: Goldman Sachs, Prosus, Temasek Get CCI Nod To ...',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '2',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/01/Pristyn-Care_feature-490x367.jpg',
    title:
      'How Pristyn Care Is Democratising Equitable Surgical Healthcare For Al....',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '3',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2023/08/Pristyn-Care-feature-490x367.png',
    title:
      'Pristyn Care’s FY23 Revenue Inches Closer To INR 500 Cr Mark, Loss Jum...',
    articleBy: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
]

class Bookmarks extends Component {
  componentDidMount = () => {
    this.changeTab('BOOKMARKS')
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
                <ul className="bookmarksList">
                  {bookmarksList.map(eachPost => (
                    <NewsCard key={eachPost.id} data={eachPost} />
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

export default Bookmarks
