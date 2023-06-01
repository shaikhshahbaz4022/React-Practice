import FictionData from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction({toggleval}) {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{!toggleval ? "Fictional Books" : "Non-Fiction Books" }</h1>

      <div className="books-container">
        {
          
          FictionData.map((ele) => (
            <BookCard image={ele.img} title={ele.title} author={ele.author} price={ele.price} year={ele.year} />
          

          ))
        }
      </div>
    </div>
  );
}
