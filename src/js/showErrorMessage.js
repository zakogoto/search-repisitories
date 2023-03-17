function showErrorMessage(response) {
    let title = document.querySelector('.result__title');
    switch (response) {
        case 'empty':
            title.textContent = 'По вашим результатам ничего не найдено. =((\n Попробуйте другой запрос';
            break;
            case 'emptyRequest':
                title.textContent = 'Поле поиска пустое';
                break;
                case 'error':
                    title.textContent = 'Что-то пошло не так';
                    break;
                }
    setTimeout(()=> title.textContent = 'Давай найдем какие-нибудь репозитории', 3000)
}

export default showErrorMessage;