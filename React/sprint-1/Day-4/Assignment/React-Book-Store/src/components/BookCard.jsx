import "./styles.module.css"

export default function BookCard({ image, title, author, price, year }) {
  
  return (
    <div id="main" data-testid='book-card'>
      <img id="img" src={image} alt={title} />
      <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
      <div data-testid='book-card-author'>{author}</div>
      <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

