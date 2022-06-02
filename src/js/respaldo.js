(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function(){
        iniciarApp();
    });

    function iniciarApp() {
    
        // * Activando el SLIDE de las ofertas
        if (document.querySelector(".secEquipo")) {                                    
            activaSliderEq();
        }
        
        document.addEventListener('click', (e) => {
            e.preventDefault();
            clicksWeb(e.target);
        });

        window.addEventListener('scroll', function() {
            navBackground();
        })
        navBackground();
        

        if (document.querySelector(".video_software")) {            
            const videoPub = document.querySelector('.video_pub');
            videoPub.currentTime = 0;
            videoPub.play();       
        }

    }

    function rotarCard(elem, faceCard) {
        
        let card = {};
        card = elem.parentNode.parentNode.parentNode.childNodes;

        const front = card[1];
        const back = card[3];
        
        front.classList.toggle('rotar');
        back.classList.toggle('rotar');
        back.classList.toggle('rotar360');
    }

    // ! FUNCIONA PARA ACTIVAR EL SLIDER DE LAS PROMOCIONES EN EL INDEX.HTML
    function activaSliderEq() {         
        var swiper = new Swiper(".hardware", {
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 3,
                },
                375: {
                    slidesPerView: 3,
                },
                480: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },     
                1200: {
                    slidesPerView: 6,
                },                
            },
            pagination: {
                el: '.swiper-pagination',
              },
        });    
    };


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

        if ( objetoDom.matches('#opCard') || objetoDom.matches('#clCard')) {
            rotarCard(objetoDom);
        }

        if ( objetoDom.matches('#checkPreWeb')) {
            cambiaPreciosWeb(objetoDom);
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
            $('html, body').animate({
               scrollTop: 0
            }, 100);        
        }

        // ? LINK A PAGINA DE INICIO
        if ( objetoDom.matches('.mnuInicio') || objetoDom.matches('#logoBDK')) {
            $(location).attr('href','index.html');    
        }            

        // ? LINK A PAGINA SOFTWARE
        if ( objetoDom.matches('.mnuSoftware')) {
            $(location).attr('href','software.html');    
        }            

        // ? LINK A PAGINAS WEB
        if ( objetoDom.matches('.mnuPagWeb')) {
            $(location).attr('href','paginasweb.html');    
        }            

        // ? LINK A DISTRIBUIDORES
        if ( objetoDom.matches('.mnuDist')) {
            $(location).attr('href','distribuidores.html');    
        }            

        // ? LINK A RESEÑAS
        if ( objetoDom.matches('.mnuRese') || objetoDom.matches('#verResenas') ) {
            $(location).attr('href','pagresenas.html');    
        }            

        // ? LINK A GALERÍA
        if ( objetoDom.matches('.mnuGal')) {
            $(location).attr('href','galeria.html');    
        }            

        // ? LINK A CONTACTO
        if ( objetoDom.matches('.mnuContacto')) {
            $(location).attr('href','contacto.html');    
        }            

        // ? LINK A SOPORTE
        if ( objetoDom.matches('.mnuSoporte')) {
            $(location).attr('href','soporte.html');    
        }            

        // ? LINK A BDKREST
        if ( objetoDom.matches('.acc-rest')) {
            $(location).attr('href','bdkrest.html');    
        }

        // ? LINK A BDKGYM
        if ( objetoDom.matches('.acc-gym')) {
            $(location).attr('href','bdkgym.html');
        }             

        // ? LINK A BDKTINT
        if ( objetoDom.matches('.acc-tint')) {
            $(location).attr('href','bdktint.html');
        }            

        // ? LINK A BDKSPA
        if ( objetoDom.matches('.acc-spa')) {
            $(location).attr('href','bdkspa.html');
        }            

        // ? LINK A BDKBARBER
        if ( objetoDom.matches('.acc-barber')) {
            $(location).attr('href','bdkbarber.html');
        }            

        // ? LINK A BDKPOS
        if ( objetoDom.matches('.acc-pos')) {
            $(location).attr('href','bdkpos.html');
        }            

        // // ? ICONO DEL MENÚ HAMBURGUESA
        // if ( objetoDom.matches('.botMueve')) {
        //     cambiaSlideFondo();
        // }

        // ? PUNTO DE INTERES DE UN MAPA DE SOFTWARE
        if ( objetoDom.matches('.punto_interes')) {
            let nomSoft = objetoDom.id;
            mapaNegocio(nomSoft);
        }

        // ? BOTÓN LEER MÁS EN EL MAPA DEL NEGOCIO - HOSTESS
        if (objetoDom.matches('.btnLeerMas')) {
            muestraPopup(objetoDom);
        }

        // ? BOTÓN PARA CERRAR LOS POPUP INFORMATIVOS
        if (objetoDom.matches('#close')) {
            const popup = document.querySelector('.infoPopup');
            popup.classList.toggle('active');

            let popups = document.querySelectorAll('.info_content');
            
            popups.forEach( e => {
                e.classList.remove('active');
            })
            
        }

        // ? LINK A WHATSAPP DE VENTAS
        if ( objetoDom.matches('.botWP')) {
            gtag_report_conversion();
            let url = 'https://api.whatsapp.com/send?phone=528132814080&text=Hola,%20buen%20día,%20%20quiero%20pedir%20informes%20sobre%20';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 1
        if ( objetoDom.matches('.botWPSop1')) {
            let url = 'https://api.whatsapp.com/send?phone=528116261326&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 2
        if ( objetoDom.matches('.botWPSop2')) {
            let url = 'https://api.whatsapp.com/send?phone=528126004868&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 3
        if ( objetoDom.matches('.botWPSop3')) {
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

    // ! FUNCIÓN PARA MARCAR EN ROJO O EN VERDE LOS PUNTOS DE INTERES DEL MAPA DE FUNCIONES
    function mapaNegocio(elem) {

        const tipoMapa = elem.substring(0,6);
        let puntosInteres = {};

        switch (tipoMapa) {

            case 'pt_res':
                puntosInteres = {
                    pt_rest_hostess:'desc_rest_hostess',
                    pt_rest_comMovil:'desc_rest_comMovil',
                    pt_rest_comDesk:'desc_rest_comDesk',
                    pt_rest_caja:'desc_rest_caja',
                    pt_rest_cocina:'desc_rest_cocina',
                    pt_rest_recetas:'desc_rest_recetas',
                    pt_rest_almacen:'desc_rest_almacen',
                    pt_rest_clientes:'desc_rest_clientes',
                    pt_rest_comedor:'desc_rest_comedor',
                    pt_rest_billar:'desc_rest_billar', 
                };
                break;
         
            case 'pt_gym':
                puntosInteres = {
                    pt_gym_recepcion:'desc_gym_recepcion',
                    pt_gym_asistencia:'desc_gym_asistencia',
                    pt_gym_acceso:'desc_gym_acceso',
                    pt_gym_clientes:'desc_gym_clientes',
                    pt_gym_clases:'desc_gym_clases',
                    pt_gym_pos:'desc_gym_pos',
                    pt_gym_admon:'desc_gym_admon',
                    pt_gym_gimnasio:'desc_gym_gimnasio',
                };
                break;

            case 'pt_tin':
                puntosInteres = {
                    pt_tint_recepcion:'desc_tint_recepcion',
                    pt_tint_servicios:'desc_tint_servicios',
                    pt_tint_inventarios:'desc_tint_inventarios',
                    pt_tint_empleados:'desc_tint_empleados',
                    pt_tint_clientes:'desc_tint_clientes',
                    pt_tint_admon:'desc_tint_admon',
                    pt_tint_cuentas:'desc_tint_cuentas',
                };
                break;

            case 'pt_spa':
                puntosInteres = {
                    pt_spa_recepcion:'desc_spa_recepcion',
                    pt_spa_empleados:'desc_spa_empleados',
                    pt_spa_clientes:'desc_spa_clientes',
                    pt_spa_pos:'desc_spa_pos',
                    pt_spa_almacen:'desc_spa_almacen',
                    pt_spa_trats:'desc_spa_trats',
                    pt_spa_admon:'desc_spa_admon',
                    pt_spa_nots:'desc_spa_nots',
                };
                break;

            case 'pt_bar':
                puntosInteres = {
                    pt_bar_recepcion:'desc_bar_recepcion',
                    pt_bar_empleados:'desc_bar_empleados',
                    pt_bar_clientes:'desc_bar_clientes',
                    pt_bar_pos:'desc_bar_pos',
                    pt_bar_almacen:'desc_bar_almacen',
                    pt_bar_trats:'desc_bar_trats',
                    pt_bar_admon:'desc_bar_admon',
                    pt_bar_nots:'desc_bar_nots',
                };
                break; 

            case 'pt_pos':
                puntosInteres = {
                    pt_pos_recepcion:'desc_pos_recepcion',
                    pt_pos_almacen:'desc_pos_almacen',
                    pt_pos_clientes:'desc_pos_clientes',
                    pt_pos_admon:'desc_pos_admon',
                    pt_pos_domicilio:'desc_pos_domicilio',
                    pt_pos_empleados:'desc_pos_empleados',
                };
                break;

            }            

        let descrip = '';
        let puntoSel = {};
        let descripSel = {}; 

        // * Quitando las clases activas de todos los objetos
        Object.keys(puntosInteres).forEach( key => {

            descrip = puntosInteres[`${key}`];
            puntoSel = document.getElementById(`${key}`);
            descripSel = document.getElementById(`${descrip}`);

            // console.log(key, ' - ', descrip);
            
            if (key === elem) {
                puntoSel.classList.add('punto_activo');
                descripSel.classList.add('desc_activa');        
            } else {
                puntoSel.classList.remove('punto_activo');
                descripSel.classList.remove('desc_activa');        
            }

        })
        
    }

    // ! FUNCIÓN PARA HACER EL EFECTO EN LA PÁGINA <PaginasWeb> EN LA SECCIÓN DE PRECIOS.
    function cambiaPreciosWeb(elem) {       
        let tipPrecio = {};
        tipPrecio = elem.parentNode.childNodes;
        tipPrecio[1].checked = tipPrecio[1].checked ? false : true; 
        
        let preciosRenta = document.getElementById('pwRenta');
        let preciosCompra = document.getElementById('pwCompra');

        preciosCompra.classList.toggle('preciosAct');
        preciosRenta.classList.toggle('preciosAct');
    }

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

    // ! POPUP INFORMATIVO MÓDULO DE HOSTESS
    function muestraPopup(elem) {
        const popup = document.querySelector('.infoPopup');
        popup.classList.toggle('active');

        let txtSeccion = elem.id.substring(6);
        let txtBloqueInfo = '.popup' + txtSeccion;
        let bloqueInfo = document.querySelector(`${txtBloqueInfo}`);
        
        bloqueInfo.classList.add('active');
        
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
    

})();