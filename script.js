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

document.getElementById('getText').addEventListener("click", getText);
document.getElementById('getUsers').addEventListener("click", getUsers);



