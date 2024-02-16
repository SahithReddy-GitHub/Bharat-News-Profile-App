import './index.css'

const HistoryCard = props => {
  const {data} = props
  const {imageUrl, title, description, dateTime} = data

  return (
    <li className="historyListItem">
      <img src={imageUrl} alt={title} className="historyImg" />
      <div className="historyCard">
        <h1 className="historyHead">{title}</h1>
        <p className="historyPara">{description}</p>
        <p className="historyPara">{dateTime}</p>
      </div>
    </li>
  )
}

export default HistoryCard
