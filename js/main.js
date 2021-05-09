import {Subscriptions} from './data.js';

function initApp(){
    const subsList = document.getElementById('subscriptions');
   
    Subscriptions.forEach( (sub, i) => {
        const li = document.createElement('li');
        li.textContent = sub.name;

        li.addEventListener('click', () => {
            const lastSelected = subsList.querySelector('.selected');
            if(lastSelected){
                lastSelected.classList.remove('selected');
            }

            li.classList.add('selected');
            renderInfo(sub);
        });

        subsList.appendChild(li);

        // Display first item in the subscriptions array
        if(i == 0){
            li.classList.add('selected')
            renderInfo(sub);
        }
    });

    // Clear the actual data to prove that we get the info using a closure (without relying on Subscriptions)
    Subscriptions.length = 0;
}

function renderInfo(info){
    const infoBox = document.getElementById('infoBox');

    infoBox.innerHTML =`
        <a href="${info.channel}" class="channel" target="_blank">
            <img src="${info.image}" class="image">
            <p class="name">${info.name}</p>
        </a>

        <p class="stats">
            <label>Subscribers <span>${info.subscribers}</span></label>
            <label>Videos <span>${info.videos}</span></label>
        </p>

        <p class="about">${info.about}</p>`;
}

initApp();