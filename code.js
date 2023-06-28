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
 * @param {string} className Project class name.
 * @param {string} subsectionTitle New subsection title.
 */
const loadProjects = (
    projectsSection,
    projects,
    className,
    subsectionTitle = 'SECTION TITLE'
) => {
    if( projectsSection &&
        projectsSection.tagName === 'SECTION' ){
        // Creates subsection
        const newSubsection = document.createElement( 'SECTION' );
        const newHeader = document.createElement( 'H3' );

        newHeader.textContent = subsectionTitle;

        newSubsection.appendChild( newHeader );

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
            container.classList.add( className );
            info.classList.add( className );

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

                linkWrapper.appendChild( linkElement );
            }

            preview.classList.add( 'expandable' );

            if( project.img ){
                preview.setAttribute( 'src', project.img.src );
                preview.setAttribute( 'alt', project.img.aria );
                preview.setAttribute( 'title', project.img.aria );
            } else {
                console.warn( '(loadProjects) WARN: Project doesn\'t contain information on the preview (img)' );
            }
            

            // Appends elements.
            info.append( title, description, techlist, linkWrapper );
            infoWrapper.appendChild( info );

            previewWrapper.appendChild( preview );

            container.append( infoWrapper, previewWrapper );
            newSubsection.appendChild( container );
        }

        projectsSection.appendChild( newSubsection );
    } else {
        console.error( '(loadProjects) ERROR: Expected a section tag, got ', projectsSection );
    }
}

// Code to execute on page load.
window.onload = () => {
    // Loads the projects.
    const projectsSection = document.getElementById( 'projects' );

    if( projectsSection ){
        loadProjects(
            projectsSection,
            projects.student,
            'bproject',
            'Student'
        );
        loadProjects(
            projectsSection,
            projects.own,
            'bproject',
            'Personal'
        );
    } else {
        console.error( 'ERROR: Failed to fetch the projects section' );
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
}