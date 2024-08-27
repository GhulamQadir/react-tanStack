import { useQuery } from "@tanstack/react-query"
import fetchUsers from "../../utils/fetch"
import NavLinks from "../../components/Nav-Links/NavLinks"
import Card from "../../components/Card/UserCard"

function Contact() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    })
    return (
        <div>
            <h1 style={{ color: "white" }}>This is Contact Page</h1>
            <br />
            <NavLinks />
            <br />
            <Card error={error} data={data} isLoading={isLoading} />

            {/* {error ? <h2>{error.message}</h2> : ""}
            {isLoading && <h2 className="pendingStatus">Loading...</h2>}
            {data && data.map((user) => {
                return <div className="card">
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            })} */}
        </div>
    )
}
export default Contact;