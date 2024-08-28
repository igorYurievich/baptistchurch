document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const preloaderKey = 'preloaderShown';

    
    function setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }

   
    function getSessionStorage(key) {
        return sessionStorage.getItem(key);
    }

   
    function isExternalNavigation() {
        
        return !document.referrer || !document.referrer.includes(window.location.hostname);
    }

    if (isExternalNavigation()) {
   
        if (!getSessionStorage(preloaderKey)) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 3000); 
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 4000); 

            
            setSessionStorage(preloaderKey, 'true');
        } else {
        
            preloader.style.display = 'none';
        }
    } else {
       
        preloader.style.display = 'none';
    }
});
