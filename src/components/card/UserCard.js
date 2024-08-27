import './card.css'
function Card({ error, isLoading, data }) {
    return (
        <div>
            {error ? <h2 className='error'>{error.message}</h2> : ""}
            {isLoading && <h2 className="pendingStatus">Loading...</h2>}
            {data && data.map((user) => {
                return <div className="card">
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            })}
        </div>
    )
}
export default Card;