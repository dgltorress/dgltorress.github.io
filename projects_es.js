export const projects = {
    work: [

    ],
    student: [
        {
            title: "HikIn",
            description: "<p>Una <strong>red social para senderistas</strong>. Proyecto mínimo viable y resultado final de mi <strong>Trabajo de Fin de Grado</strong>.</p><p>Diseñado para ser un sistema software <strong>completo e independientemente funcional</strong>, siguiendo la <a href=\"https://www.ibm.com/es-es/topics/three-tier-architecture\" target=\"_blank\"><strong>arquitectura de tres niveles</strong></a>, y compuesto por una aplicación híbrida para móviles, una API web de servidor y una base de datos relacional.</p>",
            techlist: [
                "Angular",
                "Ionic",
                "Node",
                "Express",
                "REST",
                "MariaDB"
            ],
            links: [
                {
                    title: "Memoria",
                    href: "http://hdl.handle.net/10045/135511",
                    external: true
                },
                {
                    title: "Repositorio",
                    href: "https://github.com/dgltorress/tfg-hikin",
                    external: true
                }
            ],
            img: {
                src: "img/hikin.png",
                aria: "Previsualización de las pantallas de HikIn"
            }
        },
        {
            title: "Solv3D",
            description: "<p>Una herramienta web multiplataforma orientada a <strong>ayudar a estudiantes a comprender conceptos abstractos de física</strong> permitiendo a los profesores crear <strong>simulaciones de problemas del libro en tiempo real</strong> en un <strong>entorno tridimensional</strong>.</p><p>Esta aplicación se creó junto a cuatro compañeros de la carrera como parte de un <strong>proyecto grupal</strong>.</p><p>Entre sus peculiaridades, el equipo asumió <strong>toda la responsabilidad sobre la securización de nuestro servidor</strong> y <strong>se creó un motor 3D desde cero</strong> utilizando únicamente WebGL puro y una librería matemática.</p>",
            techlist: [
                "Angular",
                "Node",
                "Express",
                "REST",
                "MongoDB",
                "WebGL",
                "Google Dialogflow"
            ],
            links: [
                {
                    title: "Demostración final",
                    href: "https://youtu.be/Vkbv5SNLKVI?t=4465",
                    external: true
                },
                {
                    title: "Demostración preliminar",
                    href: "https://youtu.be/o2DyAE0BBg8?t=2009",
                    external: true
                },
                {
                    title: "Página universitaria del proyecto",
                    href: "https://eps.ua.es/es/ingenieria-multimedia/gestioncontenidos/proyectos22-23/proyecto-solv3d.html",
                    external: true
                }
            ],
            img: {
                src: "img/solv3d.png",
                aria: "Entorno de Solv3D"
            }
        },
        {
            title: "Interfaz accesible para un horno",
            description: "<p>Una simulación de una interfaz <strong>accesible</strong> para un horno adaptada a una pantalla panorámica.</p><p>Está pensada para ser lo más <strong>simple, compacta e intuitiva</strong> posible.</p>",
            techlist: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            links: [
                {
                    title: "Versión online",
                    href: "projs/horno/index.html",
                    external: false
                }
            ],
            img: {
                src: "img/ih_interfaz.jpg",
                aria: "Interfaz del horno"
            }
        },
        {
            title: "GameBox",
            description: "<p>Un sitio web de prueba para una <strong>tienda <em lang=\"en\">online</em> de venta de videojuegos en físico</strong>, listo para integrar una <strong>pasarela de pago</strong>.</p><p>Contiene <strong>múltiples extensiones propias</strong>, como CPTs, temas hijos, pestañas personalizadas, roles y capacidades específicos, etc.</p>",
            techlist: [
                "WordPress",
                "WooCommerce",
                "PHP",
                "MySQL",
                "SPARQL"
            ],
            links: [
                {
                    title: "Instalador de WordPress",
                    href: "https://github.com/dgltorress/proyectos-grado/tree/master/GameBox",
                    external: true
                }
            ],
            img: {
                src: "img/gb_store.jpg",
                aria: "Página de la tienda de GameBox"
            }
        },
        {
            title: "Against All",
            description: "<p>Un <strong>juego multijugador <em lang=\"en\">online</em></strong> de terminal que enfrenta a un número de jugadores en un todos contra todos.</p><p>Incluye un <strong>API REST</strong> que sirve los datos de la partida, así como un <strong><em lang=\"en\">front end</em></strong> que permite monitorizarla desde el navegador.</p>",
            techlist: [
                "Java",
                "Sockets",
                "REST",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            links: [
                {
                    title: "Versión online (sólo front end)",
                    href: "projs/against-all-front/index.html",
                    external: false
                },
                {
                    title: "Repositorio",
                    href: "https://github.com/dgltorress/proyectos-grado/tree/master/AgainstAll_v2.0",
                    external: true
                }
            ],
            img: {
                src: "img/aa_frontp.jpg",
                aria: "Front end de Against All"
            }
        },
        {
            title: "Pictures & Images",
            description: "<p>Un producto mínimo viable para un sitio web de <strong>gestión de álbumes y fotos</strong>.</p><p>Cuenta con un <strong>sistema de usuarios</strong> funcional, donde cada usuario puede <strong>subir sus propias fotos</strong> y categorizarlas en álbumes.</p>",
            techlist: [
                "PHP",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            links: [
                {
                    title: "Versión online (sólo front end)",
                    href: "projs/pi-front/index.html",
                    external: false
                },
                {
                    title: "Repositorio",
                    href: "https://github.com/dgltorress/proyectos-grado/tree/master/PicturesAndImagesFull",
                    external: true
                }
            ],
            img: {
                src: "img/pi_home.jpg",
                aria: "Página principal de Pictures & Images"
            }
        }
    ],
    own: [
        {
            title: "Abridor de archivos aleatorios",
            description: "<p>Una herramienta de línea de comandos simple para Windows, útil para <strong>abrir archivos aleatorios</strong>.</p><p>Realiza una indexación recursiva desde el directorio desde el que se ejecuta, permite filtrar por extensiones e impide que se escanee una cantidad excesiva de rutas por defecto.</p>",
            techlist: [
                "C++"
            ],
            links: [
                {
                    title: "Repositorio",
                    href: "https://github.com/dgltorress/rfopener",
                    external: true
                }
            ],
            img: {
                src: "img/rfopener.png",
                aria: "Demostración en línea de comandos"
            }
        }
    ]
};