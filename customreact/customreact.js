function customRender(r,c){
    /*
    const domElement=document.createElement(r.type)
    domElement.innerHTML=r.children
    domElement.setAttribute('href',r.props.href)
    domElement.setAttribute('target',r.props.target)

    c.appendChild(domElement)
    */
    const domElement=document.createElement(r.type)
    domElement.innerHTML=r.children
    for (const prop in r.props) {
        if (prop === 'children') continue;        
        domElement.setAttribute(prop,r.props[prop])
    }
    c.appendChild(domElement)
}   

const reactElement={
    type: 'a',
    props: {
        href: "https://google.com",
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector("#root")

customRender(reactElement,mainContainer)