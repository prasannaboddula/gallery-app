import './index.css'

const ThumbnailItem = props => {
  const {imageDetailsList, isActive, updateDetailsList} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetailsList
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickList = () => {
    updateDetailsList(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={onClickList}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
