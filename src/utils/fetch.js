export default async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        const error = new Error()
        error.code = response.status
        error.message = error.code === 404 ? "Something went wrong" : await response.json()
        throw error;
    }
    return response.json()
}
