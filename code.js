'use strict';

/**
 * @author DANIEL GIMÉNEZ LÓPEZ-TORRES
 */

const mainShowcaseName = 'mainShowcase';

/**
 * Creates a simple expanded view of an image (must be a `<img>` tag).
 * 
 * @param {HTMLElement} imgElement The IMG element.
 */
const expandImage = ( imgElement ) => {
    if( imgElement &&
        imgElement.tagName === 'IMG' ){
        // Deletes the previous container, if it exists.
        const prevMainShowcase = document.getElementById( mainShowcaseName );
        if( prevMainShowcase ) prevMainShowcase.remove();
        
        // Creates a spare image element, its container and a closing button.
        const imgSpare = document.createElement( 'IMG' );
        const closeBtn = document.createElement( 'BUTTON' );
        const mainShowcase = document.createElement( 'DIV' );

        imgSpare.setAttribute( 'SRC' , imgElement.getAttribute( 'SRC' ) );
        imgSpare.setAttribute( 'ALT' , imgElement.getAttribute( 'ALT' ) );
        imgSpare.setAttribute( 'TITLE' , imgElement.getAttribute( 'TITLE' ) );

        closeBtn.setAttribute( 'TYPE' , 'button' );
        closeBtn.setAttribute( 'ONCLICK' , 'this.parentElement.remove()' );

        mainShowcase.id = mainShowcaseName;
        mainShowcase.setAttribute( 'ONCLICK' , 'this.remove()' );

        // Appends all of them at the end of the document's body.
        mainShowcase.append( imgSpare );
        mainShowcase.append( closeBtn );
        document.body.append( mainShowcase );
    } else {
        console.error( '(expandImage) ERROR: Expected an img tag, got ', imgElement );
    }
}

const expandImageBound = expandImage.bind();

/**
 * Writes the current year (according to the machine running this code) on a `<time>` tag,
 * filling out its DATETIME attribute as well.
 * 
 * @param {HTMLElement} timeElement The TIME element.
 */
const writeYear = ( timeElement ) => {
    if( timeElement &&
        timeElement.tagName === 'TIME' ){
        // Gets the current year from the client's machine.
        const curYear = new Date().getFullYear().toString();

        // Sets it.
        timeElement.innerText = curYear;
        timeElement.setAttribute( 'DATETIME' , curYear );
    } else {
        console.error( '(writeYear) ERROR: Expected a time tag, got ', timeElement );
    }
}

/**
 * Loads projects into the specified container (must be a `<div>` tag).
 * 
 * @param {HTMLElement} projectsSection Projects section.
 * @param {any[]} projects Project array.
 */
const loadProjects = (
    projectsSection,
    projects
) => {
    if( projectsSection &&
        projectsSection.tagName === 'SECTION' ){
        // Creates and appends projects.
        for( const project of projects ){
            // Creates main elements.
            const container = document.createElement( 'DIV' );
            const infoWrapper = document.createElement( 'DIV' );
            const previewWrapper = document.createElement( 'DIV' );
            const linkWrapper = document.createElement( 'DIV' );

            const info = document.createElement( 'ARTICLE' );

            const title = document.createElement( 'H4' );
            const description = document.createElement( 'DIV' );
            const techlist = document.createElement( 'UL' );

            const preview = document.createElement( 'IMG' );

            // Sets properties.
            container.classList.add( 'bproject' );
            info.classList.add( 'bproject' );

            title.textContent = project.title;
            description.innerHTML = project.description;

            techlist.classList.add( 'techlist' );

            for( const tech of project.techlist ){
                const techElement = document.createElement( 'LI' );
                techElement.textContent = tech;
                techlist.appendChild( techElement );
            }

            for( const link of project.links ){
                const linkElement = document.createElement( 'A' );

                linkElement.classList.add( 'alink' );
                linkElement.classList.add( ( link.external === true ) ? 'aexternal' : 'ainternal' );

                linkElement.setAttribute( 'href', link.href );
                linkElement.setAttribute( 'target', '_blank' );
                linkElement.textContent = link.title;

                linkWrapper.classList.add( 'projlinks' );
                linkWrapper.appendChild( linkElement );
            }

            preview.classList.add( 'expandable' );

            if( project.img ){
                preview.setAttribute( 'src', project.img.src );
                preview.setAttribute( 'alt', project.img.aria );
                preview.setAttribute( 'title', project.img.aria );
                preview.setAttribute( 'loading', 'lazy' );
            } else {
                console.warn( '(loadProjects) WARN: Project doesn\'t contain information on the preview (img)' );
            }
            

            // Appends elements.
            info.append( title, description, techlist, linkWrapper );
            infoWrapper.appendChild( info );

            previewWrapper.appendChild( preview );

            container.append( infoWrapper, previewWrapper );
            projectsSection.appendChild( container );
        }
    } else {
        console.error( '(loadProjects) ERROR: Expected a section tag, got ', projectsSection );
    }
}

/**
 * Loads experiences into the specified container (must be a `<div>` tag).
 * 
 * @param {HTMLElement} experiencesSection Projects section.
 * @param {any[]} experiences Project array.
 * @param {string} className Class name.
 */
const loadExperiences = (
    experiencesSection,
    experiences,
    className
) => {
    if( experiencesSection &&
        experiencesSection.tagName === 'SECTION' ){
        // Creates and appends projects.
        for( const experience of experiences ){
            // Creates main elements.
            const container = document.createElement( 'DIV' );
            const article = document.createElement( 'ARTICLE' );
            const header = document.createElement( 'HEADER' );
            const link = document.createElement( 'A' );
            const footer = document.createElement( 'FOOTER' );

            const heading = document.createElement( 'H3' );
            const timeWrapper = document.createElement( 'SPAN' );

            const logo = document.createElement( 'IMG' );

            // Sets properties
            container.classList.add( 'experience', className );

            heading.textContent = experience.title;
            header.appendChild( heading );

            if( experience.time ){
                const experienceTime = experience.time;

                if( experienceTime.start ){
                    const start = document.createElement( 'TIME' );

                    start.textContent = experienceTime.start.title;
                    start.setAttribute( 'datetime', experienceTime.start.datetime );

                    timeWrapper.appendChild( start );

                    if( experienceTime.end ){
                        const separator = document.createTextNode( ' - ' );
                        timeWrapper.appendChild( separator );
                    }
                }
                
                if( experienceTime.end ){
                    const end = document.createElement( 'TIME' );

                    end.textContent = experienceTime.end.title;
                    end.setAttribute( 'datetime', experienceTime.end.datetime );

                    timeWrapper.appendChild( end );
                }

                header.appendChild( timeWrapper );
            } else {
                console.error( '(loadExperiences) ERROR: Unable to fetch time frame from experience' );
            }

            if( experience.url ){
                if( experience.img ){
                    logo.setAttribute( 'src', experience.img.src );
                    logo.setAttribute( 'alt', experience.img.aria );

                    link.appendChild( logo );
                } else {
                    console.error( '(loadExperiences) ERROR: Unable to fetch logo from experience' );
                }
                
                const linkTitle = document.createTextNode( experience.url.title );
                link.setAttribute( 'href', experience.url.href );
                link.setAttribute( 'title', experience.url.aria );
                link.setAttribute( 'target', '_blank' );

                link.appendChild( linkTitle );
            } else {
                console.error( '(loadExperiences) ERROR: Unable to fetch url from experience' );
            }

            footer.innerHTML = experience.footerHTML;

            // Append elements
            article.append( header, link, footer );
            container.appendChild( article );
            experiencesSection.appendChild( container );
        }

        
    } else {
        console.error( '(loadExperiences) ERROR: Expected a section tag, got ', experiencesSection );
    }
}


// Code to execute on page load.
window.onload = () => {
    // Loads the projects.
    const projectsSection = document.getElementById( 'projects' );

    if( projectsSection ){
        const projectsSubsections = projectsSection.getElementsByTagName( 'SECTION' );

        if( projectsSubsections &&
            projectsSubsections.length  === 2 /* 3 */ ){
            /* loadProjects(
                projectsSubsections[ 0 ],
                projects.work
            ); */
            loadProjects(
                projectsSubsections[ 0 /* 1 */ ],
                projects.student
            );
            loadProjects(
                projectsSubsections[ 1 /* 2 */ ],
                projects.own
            );
        } else {
            console.error( 'ERROR: Failed to fetch the projects subsections (must have 3), got ', projectsSubsections );
        }
    } else {
        console.error( 'ERROR: Failed to fetch the main projects section' );
    }

    // Loads the experiences.
    const workSection = document.getElementById( 'experiences' );
    const educationSection = document.getElementById( 'educations' );

    if( workSection && educationSection ){
        loadExperiences(
            workSection,
            experiences.work,
            'work'
        );
        loadExperiences(
            educationSection,
            experiences.education,
            'education'
        );
    } else {
        console.error( 'ERROR: Failed to fetch either the work or educational experience sections, got ', workSection, educationSection );
    }

    // Writes the current year on the last TIME element.
    writeYear( document.getElementById( 'curYear' ) );

    // Adds an `onclick` event to images in order to make them expandable.
    const expandableImgs = document.getElementsByClassName( 'expandable' );
    for( const expandableImg of expandableImgs ){
        expandableImg.addEventListener(
            'click',
            () => {
                expandImageBound( expandableImg )
            }
        ); 
    }
};


const projects = {
    work: [

    ],
    student: [
        {
            title: "HikIn",
            description: "<p>A <strong>social network for hikers</strong>. Minimum viable product and end result of my <strong>Bachelor's Thesis</strong>.</p><p>Designed as a <strong>complete and independently functional</strong> software system, following a <a href=\"https://www.ibm.com/topics/three-tier-architecture\" target=\"_blank\"><strong>three-tier architecture</strong></a>, and composed by a hybrid mobile application, a server-side web API and a relational database.</p>",
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
            description: "<p>A cross-platform web tool aimed at <strong>helping students grasp abstract physics concepts</strong> by allowing teachers to easily create <strong>simulations of textbook problems</strong> in a <strong>three-dimensional environment</strong>.</p><p>This application was co-created with four fellow students as part of a <strong>team project</strong>.</p><p>Among other particularities, the team assumed <strong>full responsibility over the security of our servers</strong> and <strong>a 3D engine was created from scratch</strong> using only pure WebGL and a math library.</p>",
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
                aria: "Pictures &amp; Images' home page"
            }
        }
    ],
    own: [
        {
            title: "Random File Opener",
            description: "<p>A simple command-line tool for Windows <strong>useful for opening random files</strong>.</p><p>Performs recursive indexing from the directory where it is run, allows filtering by extension and prevents excessive path scans by default.</p>",
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

const experiences = {
    work: [
        {
            title: 'Web developer intern',
            time: {
                start: {
                    title: 'Jun 2023',
                    datetime: '2023-06'
                }
            },
            url: {
                title: 'NTT DATA',
                href: 'https://es.nttdata.com/',
                aria: 'Official page of NTT DATA'
            },
            img: {
                src: 'img/logo-nttdata.jpg',
                aria: 'Logo of NTT DATA'
            },
            footerHTML: '<p>Providing valuable support on development tasks.</p>'
        }
    ],
    education: [
        {
            title: 'Bachelor\'s in Multimedia Engineering',
            time: {
                start: {
                    title: 'Sep 2019',
                    datetime: '2019-09'
                },
                end: {
                    title: 'Aug 2023',
                    datetime: '2023-08'
                }
            },
            url: {
                title: 'University of Alicante',
                href: 'https://web.ua.es/en/grados/grado-en-ingenieria-multimedia/degree-in-multimedia-engineering.html',
                aria: 'Official page of the Bachelor\'s in Multimedia Engineering'
            },
            img: {
                src: 'img/e_ua.jpg',
                aria: 'Logo of the University of Alicante'
            },
            footerHTML: '<p>Currently specializing in Content Management.</p>'
        },
        {
            title: 'High School Diploma',
            time: {
                end: {
                    title: 'Jun 2019',
                    datetime: '2019-06'
                }
            },
            url: {
                title: 'Alicante Salesian School',
                href: 'https://alicante.salesianos.edu/',
                aria: 'Official page of Alicante Salesian School'
            },
            img: {
                src: 'img/e_salesianos.png',
                aria: 'Logo of Alicante Salesian School'
            },
            footerHTML: '<p>Elective Social Studies subjects.</p>'
        },
        {
            title: 'B2 First',
            time: {
                end: {
                    title: 'Dec 2016',
                    datetime: '2016-12'
                }
            },
            url: {
                title: 'Cambridge Assessment International Education',
                href: 'https://blog.cambridgeinternational.org/',
                aria: 'The Cambridge International Blog'
            },
            img: {
                src: 'img/e_cambridge.jpg',
                aria: 'Logo of Cambridge Assessment International Education'
            },
            footerHTML: '<p>Scored 177 — Credential ID: 16CES3970036ID</p>'
        }
    ]
};