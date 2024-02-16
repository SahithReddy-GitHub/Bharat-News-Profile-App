import {Link} from 'react-router-dom'
import './index.css'

const NewsCard = props => {
  const {active, displayText, changeTab, optionId} = props

  const activeCustomClass = active ? 'activeCustomClass' : ''
  let linkPath
  if (optionId === 'POSTS') {
    linkPath = '/profile'
  } else {
    linkPath = `/profile/${displayText.toLowerCase()}`
  }

  const onTabItem = () => {
    changeTab(optionId)
  }

  return (
    <li>
      <Link to={linkPath}>
        <button
          type="button"
          className={`tabBtn ${activeCustomClass}`}
          onClick={onTabItem}
        >
          {displayText}
        </button>
      </Link>
    </li>
  )
}

export default NewsCard
