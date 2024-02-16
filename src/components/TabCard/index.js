import './index.css'
import ProfileContext from '../../context/ProfileContext'
import TabItem from '../TabItem'

const tabsList = [
  {
    optionId: 'POSTS',
    displayText: 'Posts',
  },
  {
    optionId: 'BOOKMARKS',
    displayText: 'Bookmarks',
  },
  {
    optionId: 'HISTORY',
    displayText: 'History',
  },
]

const TabCard = () => (
  <ProfileContext.Consumer>
    {value => {
      const {activeTab, changeTab} = value

      return (
        <ul className="tabsList">
          {tabsList.map(each => (
            <TabItem
              key={each.optionId}
              active={activeTab === each.optionId}
              optionId={each.optionId}
              displayText={each.displayText}
              changeTab={changeTab}
            />
          ))}
        </ul>
      )
    }}
  </ProfileContext.Consumer>
)

export default TabCard
