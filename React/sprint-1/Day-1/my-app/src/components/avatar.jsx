function Avatar({src,name,rounded}) {
    const styletoimg = {borderRadius : rounded ? "50%" : "20px" ,width : "200px" }
    return (
        <div style={{margin:"20px", border:"1px solid black" }}>
            <img style={styletoimg} src={src} alt="err" />
            <h1>{name}</h1>
        </div>
    )
}
export default Avatar