const CardItem =  (props) => {

  const { titre, description, imageUrl } = props

  return (
    <div className="card">
      <h1 className="itemTitle">{titre}</h1>
      <img src={imageUrl} alt="" />
      <p>{description}</p>
    </div>
  )
}

export default CardItem