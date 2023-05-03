const getText = () => {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    });
}

document.getElementById('getText').addEventListener("click", getText);



