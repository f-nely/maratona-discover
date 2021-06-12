// getElementById()
const element = document.getElementById('blog-title');
console.log(element);

// getElementByClassName(HTMLCollection)
const className = document.getElementsByClassName('one');
console.log(className);

// getElementByTagName()
const tagName = document.getElementsByTagName('span');
console.log(tagName);

// querySelector()
const selector = document.querySelector('.content');
console.log(selector);

// querySelectorAll(Nodelist) 
const elements = document.querySelectorAll('.item');
console.log(elements);

// manipulando conteúdo - textContent
const elemento = document.querySelector('h1');
elemento.textContent = "Olá Devs!";
console.log(elemento.textContent);

// manipulando conteúdo - innerText
element.innerText = "Fala Devs!";

// manipulando conteúdo - innerHTML
element.innerHTML = "Hey you! <small>again</small>";

// manipulando conteúdo - value
const elementInput = document.querySelector('input');
console.log(elementInput.value);
elementInput.value = "Changed value!!";

// manipulando conteúdo - atributos
const attributeInput = document.querySelector('input');
attributeInput.setAttribute('id', 'name');
const inputId = document.querySelector('#name');
console.log(inputId);
console.log(inputId.getAttribute('id'));

const attributeClass = document.querySelector('input');
attributeClass.setAttribute('class', 'bg');
const inputClasse = document.querySelector('.bg');
console.log(inputClasse.getAttribute('class'));
//attributeClass.remove('class');
attributeClass.removeAttribute('class');
console.log(inputClasse.getAttribute('class'));

// alterando estilos
const elementB = document.querySelector('body');
//elementB.style.backgroundColor = "#f9f3d2";
console.log(elementB.style.backgroundColor);

// alterando estilos - classList
const elementC = document.querySelector('body');
elementC.classList.add('active', 'green');
console.log(elementC.classList);
elementC.classList.remove('active');
elementC.classList.toggle('active');

// navegando pelos elementos - parentNode, parentElement
const body = document.querySelector("body");
const element_h1 = document.querySelector("h1");
console.log("--------------parentNode--------------------");
console.log(body.parentNode);
console.log("--------------parentElement------------------");
console.log(body.parentElement);
console.log("--------------parentNode--------------------");
console.log(element_h1.parentNode);

// navegando pelos elementos - childNodes, children
const el = document.querySelector("body");
console.log("--------------childNodes---------------------");
console.log(el.childNodes);
console.log("--------------children------------------------");
console.log(el.children);
// firstChild, firstElementChild
const el2 = document.querySelector("ul");
console.log("--------------firstElementChild----------------");
console.log(el2.firstElementChild);
console.log("--------------firstChild----------------");
console.log(el2.firstChild);
// lastChild, lastElementChild
console.log("--------------lastElementChild----------------");
console.log(el.lastElementChild);
// nextSibling, nextElementSibling
const el3 = document.querySelector("header");
console.log("--------------nextElementSibling----------------");
console.log(el3.nextElementSibling);






 






