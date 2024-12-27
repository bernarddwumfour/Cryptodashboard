/**
 * represents the text you want to place in the placeholder
 * @param {string} text 
 * 
 * Reperesents the classname of the html tag whose content you want to replace
 * @param {string} placeholder 
 */


const replaceModalTextContent =(text,placeholder)=>{
    document.querySelector("#modalContent").querySelector(placeholder).textContent == text
}


/**
 * 
 */
const getTextFromHtmlTag = (tagIdentifier)=>{
    return document.querySelector(tagIdentifier).textContent
}

