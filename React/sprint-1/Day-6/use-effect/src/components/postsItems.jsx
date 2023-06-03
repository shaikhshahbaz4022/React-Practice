function PostsItems({id,title}){
    return (
        <div style={{border:"1px solid black",margin:"10px"}}>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    )
}
export default PostsItems