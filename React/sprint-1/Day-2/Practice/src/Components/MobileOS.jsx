function Render() {
    // const newlist = list.map((ele) => { <li>{ele}</li> })
    // let xarray = ["Android", "Blackberry", "iPhone", "Windows Phone"]
    // let yarrays = ["Samsung", "HTC", "Micromax", "Apple"]
    return (
        <div>
            <h1>Mobile Operating System</h1>
            <ul data-testid="os-list">
                <li>Android</li>
                <li>Blackberry</li>
                <li>iPhone</li>
                <li>Windows Phone</li>
            </ul>
            <h1>Mobile Manufacturers</h1>
            <ul data-testid="manufacturers-list">
                <li>Samsung</li>
                <li>HTC</li>
                <li>Micromax</li>
                <li>Apple</li>
            </ul>

        </div>
    )
}
export default Render