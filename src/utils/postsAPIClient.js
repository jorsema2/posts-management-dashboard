export async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "Content-type": "application/json",
            }
        },);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Optional: re-throw the error for further handling
    }
}
