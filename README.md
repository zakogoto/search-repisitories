Поиск репозиториев на GitHub.

В данный момент реализован поиск по названию репозитория,
минимального ограничения на количество символов нет.

Поиск завершается ошибкой, если:

1. Поле поиска пустое
2. Репозиторий с таким именем не найден.

После успешного поиска создается список из 10 объектов, в который есть:

1. Заголовок, он же название репозитория, при клике на него идет переадресация на страницу репозитория.
2. Аватарка пользователя, кому принадлежит репозиторий, при клике на нее так же происходит переход на страницу пользователя.
3. Описание репозитория. Если оно больше 50 символов, описание сокращается, если описание отсутствует, выводится "Нет описания".
