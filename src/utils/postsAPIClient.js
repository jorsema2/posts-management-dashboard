export const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
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

export const getPosts = async () => {
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
export const deletePost = async (postId) => {
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

        const responseData = await response.json();

        return { message: "OK", data: responseData };

    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}

// Data changes of this method will not persist on the server, but I programmed as if they did based on the assessment requirements.
export const createPost = async (post) => {
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

        const responseData = await response.json();

        return { message: "OK", data: responseData };
    } catch (error) {
        console.error('Error submitting data:', error);
        throw error;
    }
}

export const getPostComments = async (postId) => {
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
