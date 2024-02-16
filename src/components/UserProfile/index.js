import './index.css'
import Sidebar from '../Sidebar'
import Profile from '../Profile'
import NewsCard from '../NewsCard'
import TabCard from '../TabCard'

const postsList = [
  {
    id: '1',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/02/Funding-VC-fund-Web-490x367.jpg',
    title: 'Digital banking platform Freo Raises Debt Funding From SIDBI',
    articleBy: 'Michael Johnson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '2',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2023/02/Zoomcar-FY22-ftr-490x367.png',
    title:
      'Zoomcar Q3: Revenue Slips 19% YoY To $2.4 Mn, Bottom Line Improves With Cost Cut...',
    articleBy: 'Michael Johnson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '3',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/02/Leverage-Edu-fy23-ftr-490x367.jpg',
    title:
      'InCred Alternatives Investments Launches Maiden Private Equity Fund',
    articleBy: 'Michael Johnson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '4',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/02/Elon-Musk-Web-490x367.jpg',
    title: 'Now, Tesla Mulls Foray Into India’s Rooftop Solar Panel Market',
    articleBy: 'Michael Johnson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '5',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2024/02/Untitled-design-2024-02-15T111419.572-490x367.png',
    title:
      'Web Browser Veera Secures $6 Mn From Ayon Capital, 6th Man Ventures, Others',
    articleBy: 'Michael Johnson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
  {
    id: '6',
    dateTime: '15th February, 2024',
    imageUrl:
      'https://inc42.com/wp-content/uploads/2023/09/tata-nvidia-featured--490x367.png',
    title: 'Tata Eyes Tie Up With Uber For Digital Business Push',
    articleBy: 'Michael Johnson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo leo eget diam dictum, sit amet lacinia neque fermentum.',
  },
]

const UserProfile = () => (
  <div className="bgProfile">
    <Sidebar />
    <div className="mainContainer">
      <Profile />
      <hr />
      <TabCard />
      <ul className="postsList">
        {postsList.map(eachPost => (
          <NewsCard key={eachPost.id} data={eachPost} />
        ))}
      </ul>
    </div>
  </div>
)

export default UserProfile
