function appendChild(component,container){
    let element = document.createElement(component.type);
    element.innerHTML=component.children
    for(props in component.props){
        element.setAttribute(props,component.props[props])
    }
    container.appendChild(element)
}



let customReact = {
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"blank"
    },
    children:"Click me to visit google.com"
}


let container = document.querySelector("#root");
appendChild(customReact,container)
