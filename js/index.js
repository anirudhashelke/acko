var car = document.getElementById("car")
var bike = document.getElementById("bike")
var health = document.getElementById("health")
var life = document.getElementById("life")
var travel = document.getElementById("travel")
// console.log(car)

// insurance

var carInsurance = document.querySelector(".a-car")
var bikeInsurance = document.querySelector(".a-bike")
var healthInsurance = document.querySelector(".a-health")
var lifeInsurance = document.querySelector(".a-life")
var travelInsurance = document.querySelector(".a-travel")



window.onload = function () {
    car.classList.add("active")
    // insurance
    carInsurance.classList.remove("d-none")

}
// bike 

bike.addEventListener("click", function (event){
    car.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.add("active")

    // insurence
    carInsurance.classList.add("d-none")
    bikeInsurance.classList.remove("d-none")
    healthInsurance.classList.add("d-none")
    lifeInsurance.classList.add("d-none")
    travelInsurance.classList.add("d-none")
})
// car

car.addEventListener("click", function (event){
    bike.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    car.classList.add("active")

    // insurence
    carInsurance.classList.remove("d-none")
    bikeInsurance.classList.add("d-none")
    healthInsurance.classList.add("d-none")
    lifeInsurance.classList.add("d-none")
    travelInsurance.classList.add("d-none")
})

// health
health.addEventListener("click", function (event){
    bike.classList.remove("active")
    car.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    health.classList.add("active")

    // insurence
    healthInsurance.classList.remove("d-none")
    bikeInsurance.classList.add("d-none")
    carInsurance.classList.add("d-none")
    lifeInsurance.classList.add("d-none")
    travelInsurance.classList.add("d-none")
})

// life
life.addEventListener("click", function (event){
    bike.classList.remove("active")
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    life.classList.add("active")

    // insurence
    lifeInsurance.classList.remove("d-none")
    bikeInsurance.classList.add("d-none")
    carInsurance.classList.add("d-none")
    healthInsurance.classList.add("d-none")
    travelInsurance.classList.add("d-none")
})

// travel
travel.addEventListener("click", function (event){
    bike.classList.remove("active")
    car.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.add("active")

    // insurence
    travelInsurance.classList.remove("d-none")
    bikeInsurance.classList.add("d-none")
    carInsurance.classList.add("d-none")
    healthInsurance.classList.add("d-none")
    lifeInsurance.classList.add("d-none")
})


//video section
const crrentVideo = document.getElementById("a_current_video")
const currentTitle = document.getElementById("title")
const videoList = document.getElementsByClassName("a-videot")

for (let i = 0; i < videoList.length; i++) {
    const listSrc = videoList[i].children.item("div").children.item("video").src
    const text = videoList[i].children[1].children[0].innerText
   

    videoList[i].addEventListener("click", () => {
        crrentVideo.src = listSrc
        currentTitle.innerText = text
        crrentVideo.play()
    })
}
//  creating Array of object
const ackoData =[{
    img: "/t-1.svg",
    title: "Incredibly low premiums",
    discription: "Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket."
},
{
  img: "/t-2.svg",
  title: "Superquick and easy",
  discription: "We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks."  
},
{
  img: "/t-3.svg",
  title: "Hassle-free claims",
  discription: "We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements."  
},
]



// create acko section
const ackoSection =document.getElementById("acko-section")

for(let i= 0; 1 < ackoData.length; i++){
// console.log(ackoSection)
 // create div element
const ackoCard = document.createElement("div")
// console.log(ackoCard)
ackoCard.className= "col-12 col-md-4"
 
// create img
const img = document.createElement("img")
img.src = "../img"+ ackoData[i].img
img.alt = "#"
img.width = "120"

// create h4 tag
const h4 =document.createElement("h4")
h4.innerText= ackoData[i].title

// create p tag
const p = document.createElement("p")
p.innerText = ackoData[i].discription


// appeding child of ackoCard
ackoCard.appendChild(img)
ackoCard.appendChild(h4)
ackoCard.appendChild(p)
// console.log(img)


// appending child of ackosection
ackoSection.appendChild(ackoCard)
// console.log(ackoSection)
}
