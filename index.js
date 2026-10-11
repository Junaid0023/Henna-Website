const menu = document.querySelector('.navLinks')
const openIcon = document.querySelector('.open-menu')
const CardTitle = document.querySelector('.title')
const CardImages = document.querySelector('.title')
const CardDescription = document.querySelector('.title')
const cardContent = document.querySelector('.card-content')
const menuOverlay = document.querySelector('menu-overlay')

const container = document.querySelector(".accordion-content")

const leftArrow = document.querySelector(".left")
const RigthArrow = document.querySelector(".right")





import data from './data.js'

const {services, accordionList} = data




let isOpen = false

openIcon.addEventListener("click", () => {
    menu.classList.toggle("active")
    

    if(menu.classList.contains("active")){
        openIcon.innerHTML = `<i class="uil uil-times">`
        // menuOverlay.classList.toggle("active")

    }else{
        openIcon.innerHTML = `<i class="uil uil-list-ui-alt">`
    }

})



// Rendering Services Card

services.forEach((product, id) => {
    
    cardContent.innerHTML += `
        <div class="card">
                  
                    <img src=${product.image} alt="" srcset="" class="card-image">
                      <h3 class="title">${product.title}</h3>
                    <p class="description">${product.description}</p>
                </div>
    `
})



// ACCORDION
accordionList.forEach((accordion) => {
    container.innerHTML += `
           <div class="accordion">
                <div class="question-answer">
                    <h4 class="question">${accordion.question}</h4>
                    <div class="openAnswer">+</div>
                </div>
                <div class="answer">${accordion.answer}</div>
            </div>
    `

  
})

const openAnswer = document.querySelectorAll(".openAnswer")


openAnswer.forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.parentElement.nextElementSibling;
       answer.classList.toggle("active")

      if(answer.classList.contains("active")) {
        button.textContent = "-";
      }else {
        button.textContent = "+";
      }
        

    })
})


const navbar = document.querySelector("nav")
window.addEventListener("scroll", () => {
    const height = window.scrollY

    if(height > 100) {
        navbar.style.backgroundColor = "#E8D9C8"
    }else {
        navbar.style.backgroundColor = "transparent"
    }
})


const testimonials = document.querySelectorAll(".review")

let index = 0;



leftArrow.addEventListener("click", () => {
    index++

    if(index >= testimonials.length){
        index= 0
    }
})

RigthArrow.addEventListener("click", () => {
    
})





