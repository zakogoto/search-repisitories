import getResource from "./services/services";
import createList from "./createList";
import showErrorMessage from "./showErrorMessage";

function startSearch() {
    let form = document.querySelector('#searchForm'),
        container = document.querySelector('.result__list');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        container.innerHTML = '';

        let url = e.target.search.value;

        if(url === '') {
            showErrorMessage('emptyRequest');
            return;
        }

        
        getResource(`https://api.github.com/search/repositories?q=${url} in:name`)
            .then(result => {
                let data = result.items.slice(0, 10);
                if (data.length !== 0) {
                    createList(data);
                    form.reset();
                } else {
                    showErrorMessage('empty');
                    form.reset();
                }
            });
    
    })

    function search() {
        
    }
}

export default startSearch;