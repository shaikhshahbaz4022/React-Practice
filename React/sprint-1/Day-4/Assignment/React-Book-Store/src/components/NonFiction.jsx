import Non from "../nonfiction.json"
import BookCard from "./BookCard";

export default function NonFiction({toggleval}) {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{!toggleval ? "Fictional Books" : "Non-Fiction Books" }</h1>

      <div className="books-container">
        {

          Non.map((ele) => (

         
            <BookCard image={ele.img} title={ele.title} author={ele.author} price={ele.price} year={ele.year} />
            ))
        }
      </div>
    </div>
  );
}
