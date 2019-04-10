export default {
buildElement(newElement,id,textContent){
    const element = document.createElement(newElement)
    if (id) {
        element.id = id

    }
element.textContent = textContent

return element
}
}



