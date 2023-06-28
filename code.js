'use strict';

/**
 * @author DANIEL GIMÉNEZ LÓPEZ-TORRES
 */

import { projects } from './projects.js';
import { experiences } from './experiences.js';

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
                expandImage( expandableImg )
            }
        ); 
    }
};

export { expandImage, writeYear, loadProjects, loadExperiences };