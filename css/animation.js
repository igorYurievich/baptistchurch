document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const preloaderKey = 'preloaderShown';

    // Функция для установки значения в sessionStorage
    function setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }

    // Функция для получения значения из sessionStorage
    function getSessionStorage(key) {
        return sessionStorage.getItem(key);
    }

    // Функция для определения, был ли переход с другой страницы (внешней)
    function isExternalNavigation() {
        // Если referrer пустой или не соответствует текущему хосту, считаем, что переход внешний
        return !document.referrer || !document.referrer.includes(window.location.hostname);
    }

    if (isExternalNavigation()) {
        // Если это внешний переход, показываем прелоадер только если он не был показан в текущей сессии
        if (!getSessionStorage(preloaderKey)) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 3000); // 3 секунды

            setTimeout(() => {
                preloader.style.display = 'none';
            }, 4000); // 4 секунды для полного скрытия

            // Устанавливаем значение в sessionStorage, чтобы прелоадер не показывался при последующих посещениях в этой сессии
            setSessionStorage(preloaderKey, 'true');
        } else {
            // Если значение уже есть, сразу скрываем прелоадер
            preloader.style.display = 'none';
        }
    } else {
        // Если это внутренний переход, сразу скрываем прелоадер
        preloader.style.display = 'none';
    }
});
