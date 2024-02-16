import './index.css'

const NewsCard = props => {
  const {data} = props
  const {dateTime, imageUrl, title, articleBy} = data

  return (
    <li className="postListItem">
      <img src={imageUrl} alt={title} className="postImg" />
      <div className="postCard">
        <h1 className="postHead">{title}</h1>
        <p className="postPara">By {articleBy}</p>
        <p className="postPara">{dateTime}</p>
      </div>
    </li>
  )
}

export default NewsCard
