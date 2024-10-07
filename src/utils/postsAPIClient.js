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
        throw error;
    }
}

// Data changes of this method will not be persisted on the server, but I programmed as if they did based on the assessment requirements.
export async function deletePost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return { message: "OK", data: response.data };
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}

// Data changes of this method will not persist on the server, but I programmed as if they did based on the assessment requirements.
export async function sendPost(post) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return { message: "OK", data: response.data };
    } catch (error) {
        console.error('Error submitting data:', error);
        throw error;
    }
}

export async function getPostComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
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
        throw error;
    }
}
