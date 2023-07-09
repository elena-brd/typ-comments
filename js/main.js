const apiURL = 'https://jsonplaceholder.typicode.com/comments';

const getComments = () => {
    fetch(apiURL + '?_limit=1')
        .then(res => res.json())
        .then(data => {
            data.forEach((comment) => createCommet(comment));
        })
}

const createCommet = (tilte) => {
    const card = document.querySelector('.card-container');
    const userInfo = document.querySelector('.user-info');
    const h3 = document.createElement('h3');
    h3.setAttribute('data-id', tilte.id)
    h3.innerHTML = `Name: ${tilte.name}`;

    const span = document.createElement('span');
    span.innerHTML = `Email: ${tilte.email}`;

    const p = document.createElement('p');
    p.innerHTML = `Comment: ${tilte.body}`;



    userInfo.appendChild(h3);
    h3.appendChild(span);
    h3.appendChild(p);
    card.appendChild(userInfo)
}


document.addEventListener('DOMContentLoaded', getComments);