const CardItem =  (props) => {

  const { titre, description, imageUrl } = props

  return (
    <div className="card">
      <h1 className="itemTitle">{titre}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt="" />
    </div>
  )
}

export default CardItem