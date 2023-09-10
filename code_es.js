'use strict';

/**
 * @author DANIEL GIMÉNEZ LÓPEZ-TORRES
 */

import { projects } from './projects_es.js';
import { experiences } from './experiences_es.js';
import { expandImage, writeYear, loadProjects, loadExperiences, copyableCredentials } from './code.js';

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

    // Makes credentials copyable
    copyableCredentials(
        'credential-copiada',
        'credential-fallada'
    );
};