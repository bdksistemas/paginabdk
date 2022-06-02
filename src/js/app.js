(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function(){
        iniciarApp();
    });

    function iniciarApp() {
    
        // * Activando el SLIDE de las ofertas
                
        if (document.querySelector(".video_software")) {            
            const videoPub = document.querySelector('.video_pub');
            videoPub.currentTime = 0;
            videoPub.play();       
        }

        // if (document.querySelector(".top-dist")) {
        //     if (window.innerWidth < 1400) {
        //         let titulo = document.getElementById('secTituloH1');
        //         titulo.classList.remove('top-dist');
        //     }
        // }
    }
        
})();