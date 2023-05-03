const getText = () => {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    });
}

const getUsers = () => {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach((user) => {
            output += `
            <ul>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
                <li>${user.id}</li>
            </ul>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
}

const getBooks = () => {
    fetch('books.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Top Book List</h2>';
        data.forEach((book) => {
            output += `
            <ul>
                <li>Book Title: ${book.book}</li>
                <li>Book Author: ${book.author}</li>
                <li>Release Date: ${book.releaseYear}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
}

const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach((post) => {
            output += `
            <div>
                <h3>Title: ${post.title}</h3>
                <p>${post.body}</p>
                <p>Post ID: ${post.id} User ID:${post.userId}</p>
            </div>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
}

const addPost = (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body: body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    
}

// const getComments = () => {
    
// }

// const getTodos = () => {
    
// }

// const getUsersApi = () => {
    
// }

document.getElementById('getText').addEventListener("click", getText);
document.getElementById('getUsers').addEventListener("click", getUsers);
document.getElementById('getBooks').addEventListener("click", getBooks);
document.getElementById('getPosts').addEventListener("click", getPosts);
document.getElementById('addPost').addEventListener("submit", addPost);

// document.getElementById('getComments').addEventListener("click", getComments);
// document.getElementById('getTodos').addEventListener("click", getTodos);
// document.getElementById('getUsersApi').addEventListener("click", getUsersApi);



