'use strict';

/**
 * @author DANIEL GIMÉNEZ LÓPEZ-TORRES
 */

/**
 * @brief Creates a simple expanded view of an image.
 * 
 * @param {*} imgElement The IMG element.
 */
function expandImage( imgElement ){
    if( imgElement.tagName === 'IMG' ){
        // Deletes the previous container, if it exists.
        let prevMainShowcase = document.getElementById( 'mainShowcase' );
        if( prevMainShowcase ) prevMainShowcase.remove();
        
        // Creates a spare image element, its container and a closing button.
        let imgSpare = document.createElement( 'IMG' ) ,
            closeBtn = document.createElement( 'BUTTON' ) ,
            mainShowcase = document.createElement( 'DIV' );

        imgSpare.setAttribute( 'SRC' , imgElement.getAttribute( 'SRC' ) );
        imgSpare.setAttribute( 'ALT' , imgElement.getAttribute( 'ALT' ) );
        imgSpare.setAttribute( 'TITLE' , imgElement.getAttribute( 'TITLE' ) );

        closeBtn.setAttribute( 'TYPE' , 'button' );
        closeBtn.setAttribute( 'ONCLICK' , 'this.parentElement.remove()' );

        mainShowcase.id = 'mainShowcase';
        mainShowcase.setAttribute( 'ONCLICK' , 'this.remove()' );

        // Appends all of them at the end of the document's body.
        mainShowcase.append( imgSpare );
        mainShowcase.append( closeBtn );
        document.body.append( mainShowcase );
    }
}

/**
 * @brief Writes the current year (according to the machine running this code) on a TIME element, plus its DATETIME attribute.
 * 
 * @param {*} timeElement The TIME element.
 */
function writeYear( timeElement ){
    if( timeElement.tagName === 'TIME' ){
        // Gets the current year from the client's machine.
        let curYear = new Date().getFullYear().toString();

        // Sets it.
        timeElement.innerText = curYear;
        timeElement.setAttribute( 'DATETIME' , curYear );
    }
}

// Code to execute on page load.
window.onload = function(){
    // Writes the current year on the last TIME element.
    writeYear( document.getElementById( 'curYear' ) );

    // onclick's images to make them expandable.
    let expandableImgs = document.getElementsByClassName( 'expandable' );
    for( let i = 0 ; i < expandableImgs.length ; i++ ){
        expandableImgs[i].setAttribute( 'ONCLICK' , 'expandImage( this )' ); 
    }
};