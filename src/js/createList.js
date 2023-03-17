function createList(data) {
    let container = document.querySelector('.result__list');

    data.forEach(({owner, name, html_url, description }) => {
        const element = document.createElement('li');

        element.classList.add('result__item');

        let descriptionRep;
        
        if (!description) {
            descriptionRep = 'Нет описания';
        } else if (description.length > 50) {
            descriptionRep = description.slice(0, 50) + '...';
        } else {
            descriptionRep = description;
        }

        element.innerHTML = `
        <div class="result__item-img">
            <a href=${owner.html_url} target="_blank">
                <img src=${owner.avatar_url} alt=${owner.login}>
            </a>
        </div>
        <div class="result__item-about">
            <div class="result__item-name">
                <a href=${html_url} target="_blank">${name}</a>
            </div>
            <p class="result__item-descr">${descriptionRep}</p>
        </div>
        `
        container.append(element);

        document.querySelector('.result__title').textContent = 'Вот что мне удалось найти:'
    })
}

export default createList;