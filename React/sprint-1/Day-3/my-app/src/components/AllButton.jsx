function AllButton({ count, onclick , reduce }) {

    return (
        <div>
            <h1>{count}</h1>
            <button disabled={count>=10} onClick={onclick} >Increase All</button>
            <button disabled={count<=0} onClick={reduce} > Reduce All</button>

        </div>
    )
}
export default AllButton