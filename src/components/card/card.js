import { useQuery } from "@tanstack/react-query"
import fetchUsers from "../../utils/fetch"
import './card.css'


export default function ShowData() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    })
    return (
        <div>
            {error ? <h2>{error.message}</h2> : ""}
            {isLoading && <h2 className="pendingStatus">Loading...</h2>}
            {data && data.map((user, index) => {
                return <div className="card">
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            })}
        </div>
    )
}