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



