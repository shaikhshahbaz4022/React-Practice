// Your code goes here

function UserCard({ name, avatar, posts, followers, address, handle }) {
    
    return (
        <div style={{border:"1px solid black"}} >
            <img style={{ borderRadius: "50%" }} src={avatar} alt={name} />
            <h2 data-testid="user_name" >{name}</h2>
            <p data-testid="user_address" >{address}</p>
            <p data-testid="user_posts" >{posts}</p>
            <p data-testid="user_followers" >{followers}</p>
            <h3>Posts</h3>
            <h3>Followers</h3>
            <button onClick={handle} >{handle ? "Follow" : "Following"}</button>
        </div>
    )
}
// do a default export
export default UserCard