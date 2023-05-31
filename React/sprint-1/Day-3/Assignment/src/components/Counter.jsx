

function Counter({ count, add, subs, mul }) {

    return (

        <div>
            <h2 data-testid = "counter-header">Counter</h2>
            <h3 data-testid = "count">{count}</h3>
            <button onClick={add} data-testid="add-btn">+</button>
            <button onClick={subs} data-testid="subtract-btn">-</button>
            <button onClick={mul} data-testid="double-btn">Double</button>
        </div>

    )
}
export default Counter