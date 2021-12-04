let programmingSection = document.querySelector(".programming-section")


let icons = [
    `fab fa-html5`,
    `fab fa-css3-alt`,
    `fab fa-js`
]

let headerPart = [
    `HTML 5`,
    `CSS 3`,
    `Javascript`

]
let text = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

for(let i = 0; i <=2;i++){
    let programming = document.createElement("div");
    let icon = document.createElement('i')
    let content = document.createElement('h4')
    let paragraph = document.createElement('p')
    let button = document.createElement('button')
    
    programming.className = "programming"
    paragraph.innerText = text
    button.innerText = "MORE"
    content.innerText = headerPart[i]
    icon.className = icons[i]
    programming.appendChild(icon)
    programming.appendChild(content)
    programming.appendChild(paragraph)
    programming.appendChild(button)
    programmingSection.appendChild(programming)
}
