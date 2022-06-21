(function() {
    'use strict';

    // ? VARIABLES 
    var cerrado     = true;
    var menuLat     = false;

    let promociones = [];
    let heros = [];

    // let idxEq = 0;

    document.addEventListener('DOMContentLoaded', function(){
        iniciarClicks();
    });

    function iniciarClicks() {
            
        document.addEventListener('click', (e) => {
            e.preventDefault();
            clicksWeb(e.target);
        });

        window.addEventListener('scroll', function() {
            navBackground();
        })
        navBackground();

        if (document.getElementById("banners_equipo")) {
            promociones = document.querySelectorAll('.paquete_hardware')            
            setInterval(next_promo, 10000); 
        }

        if (document.getElementById("fondosHero")) {
            heros = document.querySelectorAll('.fondo_hero')
            setInterval(next_fondo, 5000); 
        }
        
    }

    function rotarCard(elem, faceCard) {
        
        let card = {};
        card = elem.parentNode.parentNode.parentNode.parentNode.childNodes;

        // console.log(card);
        
        const front = card[1];
        const back = card[3];
        
        front.classList.toggle('rotar');
        back.classList.toggle('rotar');
        back.classList.toggle('rotar360');
    }

    // ! FUNCIÓN PARA ACTIVAR EL VIDEO Y REPRODUCIRLO AL ESTAR LA PANTALLA ACTIVA
    function toggleVideo() {
        const trailer = document.querySelector('.videoPopup');
        const video = document.querySelector('video');

        trailer.classList.toggle('active');
        video.currentTime = 0;
        if (trailer.classList.contains('active')) {
            video.play();            
        } else {
            video.pause();
        };
    }    


    // ! FUNCIÓN PARA ACTIVAR TODOS LOS CLICS DE LA PÁGINA
    function clicksWeb(objetoDom) {

        // console.log(objetoDom);

        if ( objetoDom.matches('.opCard') || objetoDom.matches('.clCard')) {
            rotarCard(objetoDom);
        }

        if ( objetoDom.matches('.btnFaq') || objetoDom.matches('.accordion-title') || objetoDom.matches('.iconFaq') ) {
            toggleAccordion(objetoDom);            
        }

        // ? BOTÓN PARA REPRODUCIR EL VÍDEO PROMOCIONAL
        // if ( objetoDom.matches('#play') || objetoDom.matches('#close') || objetoDom.matches('#imgPlay') ) {
        //     toggleVideo();
        // }

        // ? BOTÓN LATERAL PARA SUBIR AL INICIO DE LA PANTALLA
        if ( objetoDom.matches('#botInicio') ) {

            window.scrollTo({top: 0, behavior: 'smooth'});

            // Este código es con JQUERY
            // $('html, body').animate({
            //    scrollTop: 0
            // }, 100);        
        }

        // ? LINK A PAGINA DE INICIO
        if ( objetoDom.matches('.mnuInicio') || objetoDom.matches('#logoBDK')) {
            let url = 'index.html';
            window.open(url,'_self');

        }            

        // ? LINK A PAGINA SOFTWARE
        if ( objetoDom.matches('.mnuSoftware')) {
            let url = 'software.html';
            window.open(url,'_self');

        }            

        // ? LINK A PAGINAS WEB
        if ( objetoDom.matches('.mnuPagWeb')) {
            let url = 'paginasweb.html';
            window.open(url,'_self');

        }            

        // ? LINK A DISTRIBUIDORES
        if ( objetoDom.matches('.mnuDist')) {
            let url = 'distribuidores.html';
            window.open(url,'_self');
        }            

        // ? LINK A RESEÑAS
        if ( objetoDom.matches('.mnuRese') || objetoDom.matches('#verResenas') ) {
            let url = 'pagresenas.html';
            window.open(url,'_self');
        }

        // ? LINK A GALERÍA
        if ( objetoDom.matches('.mnuGal')) {
            let url = 'galeria.html';
            window.open(url,'_self');
        }            

        // ? LINK A CONTACTO
        if ( objetoDom.matches('.mnuContacto')) {
            let url = 'contacto.html';
            window.open(url,'_self');
        }            

        // ? LINK A SOPORTE
        if ( objetoDom.matches('.mnuSoporte')) {
            let url = 'soporte.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKREST
        if ( objetoDom.matches('.acc-rest')) {
            let url = 'bdkrest.html';
            window.open(url,'_self');
        }

        // ? LINK A BDKGYM
        if ( objetoDom.matches('.acc-gym')) {
            let url = 'bdkgym.html';
            window.open(url,'_self');
        }             

        // ? LINK A BDKTINT
        if ( objetoDom.matches('.acc-tint')) {
            let url = 'bdktint.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKSPA
        if ( objetoDom.matches('.acc-spa')) {
            let url = 'bdkspa.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKBARBER
        if ( objetoDom.matches('.acc-barber')) {
            let url = 'bdkbarber.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKPOS
        if ( objetoDom.matches('.acc-pos')) {
            let url = 'bdkpos.html';
            window.open(url,'_self');
        }            

        // ? BOTÓN PARA CERRAR LOS POPUP INFORMATIVOS
        if (objetoDom.matches('#close')) {
            const popup = document.querySelector('.infoPopup');
            popup.classList.toggle('active');            
        }

        // ? LINK A WHATSAPP DE VENTAS
        if ( objetoDom.matches('.botWP')) {
            gtag_report_conversion();
            let url = 'https://api.whatsapp.com/send?phone=528132814080&text=Hola,%20buen%20día,%20%20quiero%20pedir%20informes%20sobre%20';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 1
        if ( objetoDom.matches('.botSop1')) {
            let url = 'https://api.whatsapp.com/send?phone=528116261326&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 2
        if ( objetoDom.matches('.botSop2')) {
            let url = 'https://api.whatsapp.com/send?phone=528126004868&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 3
        if ( objetoDom.matches('.botSop3')) {
            let url = 'https://api.whatsapp.com/send?phone=528129233142&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINKS A FACEBOOK
        if ( objetoDom.matches('.botFB')) {               
            let url = 'https://www.facebook.com/bdksistemas';
            window.open(url, '_blank');
        } 

        // ? LINKS A ISNTAGRAM
        if ( objetoDom.matches('.botInsta')) {
            console.log('Si recibo el click de Insta');                
            let url = 'https://www.instagram.com/bdksistemas';
            window.open(url, '_blank');
        } 

        // ? LINKS A YOUTUBE
        if ( objetoDom.matches('.botYT')) {
            let url = 'https://www.youtube.com/bdksistemas';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKREST
        if ( objetoDom.matches('.link-demorest')) {               
            let url = 'https://www.bdkclientes.com/paginasweb/restaurantes/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKTINT
        if ( objetoDom.matches('.link-demotint')) {               
            let url = 'https://bdkclientes.com/paginasweb/lavanderias/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKGYM
        if ( objetoDom.matches('.link-demogym')) { 
            let url = 'https://bdkclientes.com/paginasweb/gimnasios/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKSPA
        if ( objetoDom.matches('.link-demospa')) { 
            let url = 'https://bdkclientes.com/paginasweb/spa/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKBARBER
        if ( objetoDom.matches('.link-demobarber')) { 
            let url = 'https://bdkclientes.com/paginasweb/barber/demo1/';
            window.open(url, '_blank');
        } 
        
        // ? LINKS A LA PÁGINA DEMO DE BDKPOS
        if ( objetoDom.matches('.link-demopos')) { 
            let url = 'https://www.bdkclientes.com/paginasweb/otros/demo1/';
            window.open(url, '_blank');
        } 

        // ? BOTÓN REGRESAR
        if ( objetoDom.matches('#regresar')) { 
            window.history.back();
        } 

        // ? ICONO DEL MENÚ HAMBURGUESA
        if ( objetoDom.matches('#botApp')) { 
            
            menuLat = true;
            apertura();
        }

        // ? BOTON PARA MOVER A LA IZQUIERDA UNA IMAGEN DE PAQUETE DE EQUIPO
        if ( objetoDom.matches('.botEqIzq')) { 
            back_promo();
            // --idxEq;
            // if (idxEq < 0) {
            //     idxEq = promociones.length - 1;
            // }
            // visualiza_promo();
            // // console.log(idxEq);            
        }

        // ? BOTON PARA MOVER A LA IZQUIERDA UNA IMAGEN DE PAQUETE DE EQUIPO
        if ( objetoDom.matches('.botEqDer')) { 
            next_promo();
        }

    }

    // ! FUNCIÓN PARA MEDIR LAS CONVERSIONES Y CLICS EN LOS BOTONES DE CONTACTO - CÓDIGO DE GOOGLE ADS
    function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-1011948451/dVALCJDYqr4DEKO3xOID',
            'event_callback': callback
        });
        return false;
    }

    // ! FUNCIÓN PARA ABRIR EL MENÚ CUANDO EL TAMAÑO SEA TABLET O MÓVIL
    function apertura() {
        let menu    = document.getElementById('navPrincipal');
        let botSubir = document.getElementById('botInicio');
        let botAccWP	 = document.getElementById('botWP');
        
        if (cerrado) {
            menu.style.width = '100vw!important';
            cerrado = false;
            
            if (botSubir) {
                botSubir.style.visibility = 'hidden';
                botAccWP.style.visibility = 'hidden';
            }

        } else {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
            menuLat = false;
            if (botSubir) {
                botSubir.style.visibility = 'visible';
                botAccWP.style.visibility = 'visible';
            }
        }
        menu.classList.toggle('menu2');
    };   


    // ! FUNCIÓN PARA ACTIVAR EL EFECTO DE LAS PREGUNTAS FRECUENTES
    function toggleAccordion(elem) {

        let elemFaq;
        let i;

        if (elem.matches('.btnFaq') === false) {
            elemFaq = elem.parentNode;
        } else {
            elemFaq = elem;
        }

        const items = document.querySelectorAll(".accordion button");
        const itemToggle = elemFaq.getAttribute('aria-expanded');
        
        for (i = 0; i < items.length; i++) {
          items[i].setAttribute('aria-expanded', 'false');
        }
        
        if (itemToggle == 'false') {
          elemFaq.setAttribute('aria-expanded', 'true');
        }
    }
    
    function navBackground() {

        let nav = document.querySelector('.nav');
        let desp_actual = window.pageYOffset;
        let ancho_screen = window.innerWidth;        

        if ( desp_actual <= 300 ) {

            nav.style.borderBottom = ''; 

            if (ancho_screen > 768 ) {
                nav.style.background = 'rgba(0,0,0,0.5)';
            } else {
                nav.style.background = 'linear-gradient(0deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 100%)';
            }

        } else {
            nav.style.background = '#1F2022';
            nav.style.borderBottom = '2px solid #cb001a';
        }
        nav.style.transition = '.5s';
    }

    function next_fondo() {
        let idxHero = actBanner(heros, 0);      
        nextBanner(heros, idxHero, '+');        
    }

    function next_promo() {      
        let idxPromo = actBanner(promociones, 0);      
        nextBanner(promociones, idxPromo, '+');        
    }

    function back_promo() {      
        let idxPromo = actBanner(promociones, 0);      
        nextBanner(promociones, idxPromo, '-');
    }

    function actBanner(array, idxBan) {
        while (idxBan < array.length) {
            if (array[idxBan].classList.contains('banner_visible')) {
                break;
            }
            idxBan++;
        }
        return idxBan;
    }

    function nextBanner(array, idx, opr) {
        let idxNext = idx;
        if (opr==='+') {
            idxNext++;
            if (idxNext > array.length - 1) {
                idxNext = 0;
            }    
        } else {
            --idxNext;
            if (idxNext < 0) {
                idxNext = array.length - 1;
            }
        }
        array[idx].classList.remove('banner_visible');
        array[idxNext].classList.add('banner_visible');
    }
    
})();