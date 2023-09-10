export const projects = {
    work: [

    ],
    student: [
        {
            title: "HikIn",
            description: "<p>A <strong>social network for hikers</strong>. Minimum viable product and end result of my <strong>Bachelor's Thesis</strong>.</p><p>Designed as a <strong>complete and independently functional</strong> software system, following a <a href=\"https://www.ibm.com/topics/three-tier-architecture\" target=\"_blank\"><strong>three-tier architecture</strong></a>, and composed by a hybrid mobile application, a server-side web API and a relational database.</p>",
            techlist: [
                "Angular",
                "Ionic",
                "Node.js",
                "Express",
                "REST",
                "MariaDB"
            ],
            links: [
                {
                    title: "Bachelor's Thesis",
                    href: "http://hdl.handle.net/10045/135511",
                    external: true
                },
                {
                    title: "Repository",
                    href: "https://github.com/dgltorress/tfg-hikin",
                    external: true
                }
            ],
            img: {
                src: "img/hikin.png",
                aria: "Preview of HikIn's screens"
            }
        },
        {
            title: "Solv3D",
            description: "<p>A cross-platform web tool aimed at <strong>helping students grasp abstract physics concepts</strong> by allowing teachers to easily create <strong>real-time simulations of textbook problems</strong> in a <strong>three-dimensional environment</strong>.</p><p>This application was co-created with four fellow students as part of a <strong>team project</strong>.</p><p>Among other particularities, the team assumed <strong>full responsibility over the security of our servers</strong> and <strong>a 3D engine was created from scratch</strong> using only pure WebGL and a math library.</p>",
            techlist: [
                "Angular",
                "Node.js",
                "Express",
                "REST",
                "MongoDB",
                "WebGL",
                "Google Dialogflow"
            ],
            links: [
                {
                    title: "Final showcase",
                    href: "https://youtu.be/Vkbv5SNLKVI?t=4465",
                    external: true
                },
                {
                    title: "Preliminary showcase",
                    href: "https://youtu.be/o2DyAE0BBg8?t=2009",
                    external: true
                },
                {
                    title: "University project page",
                    href: "https://eps.ua.es/es/ingenieria-multimedia/gestioncontenidos/proyectos22-23/proyecto-solv3d.html",
                    external: true
                }
            ],
            img: {
                src: "img/solv3d.png",
                aria: "Solv3D's environment"
            }
        },
        {
            title: "Accessible oven interface",
            description: "<p>A prototype of an <strong>accessible</strong> interface for an oven, made to fit a landscape screen.</p><p>It was made with <strong>simplicity, compactness and intuitiveness</strong> in mind.</p>",
            techlist: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            links: [
                {
                    title: "Online version",
                    href: "projs/horno/index.html",
                    external: false
                }
            ],
            img: {
                src: "img/ih_interfaz.jpg",
                aria: "Oven interface"
            }
        },
        {
            title: "GameBox",
            description: "<p>A test website made to host an <strong>online shop carrying physical video games</strong>, payment-gateway-ready.</p><p>It features multiple <strong>add-ons</strong> of my own: CPTs, child themes, custom tabs, and specific roles and capabilities.</p>",
            techlist: [
                "WordPress",
                "WooCommerce",
                "PHP",
                "MySQL",
                "SPARQL"
            ],
            links: [
                {
                    title: "WordPress installer",
                    href: "https://github.com/dgltorress/proyectos-grado/tree/master/GameBox",
                    external: true
                }
            ],
            img: {
                src: "img/gb_store.jpg",
                aria: "GameBox store page"
            }
        },
        {
            title: "Against All",
            description: "<p>An <strong>online, multiplayer, terminal-based game</strong> that sets a number of players against each other.</p><p>Includes a <strong>RESTful API</strong> that serves a match's data, along with a separate <strong>front end</strong> to spectate it from any browser.</p>",
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
                    title: "Online version (front end only)",
                    href: "projs/against-all-front/index.html",
                    external: false
                },
                {
                    title: "Repository",
                    href: "https://github.com/dgltorress/proyectos-grado/tree/master/AgainstAll_v2.0",
                    external: true
                }
            ],
            img: {
                src: "img/aa_frontp.jpg",
                aria: "Against All's front end"
            }
        },
        {
            title: "Pictures & Images",
            description: "<p>A minimum viable product for a website that hosts <strong>albums and pictures</strong>.</p><p>It has a functional <strong>multi-user system</strong>, allowing each one to <strong>upload</strong> their own content and <strong>sort</strong> it as they please.</p>",
            techlist: [
                "PHP",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            links: [
                {
                    title: "Online version (front end only)",
                    href: "projs/pi-front/index.html",
                    external: false
                },
                {
                    title: "Repository",
                    href: "https://github.com/dgltorress/proyectos-grado/tree/master/PicturesAndImagesFull",
                    external: true
                }
            ],
            img: {
                src: "img/pi_home.jpg",
                aria: "Pictures & Images' home page"
            }
        }
    ],
    own: [
        {
            title: "Random File Opener",
            description: "<p>A simple command-line tool for Windows useful for <strong>opening random files</strong>.</p><p>Performs recursive indexing from the directory where it is run, allows filtering by extension and prevents excessive path scans by default.</p>",
            techlist: [
                "C++"
            ],
            links: [
                {
                    title: "Repository",
                    href: "https://github.com/dgltorress/rfopener",
                    external: true
                }
            ],
            img: {
                src: "img/rfopener.png",
                aria: "Command-line demo"
            }
        }
    ]
};