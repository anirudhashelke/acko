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
// const ackoData =[{
//     img: "/t-1.svg",
//     title: "Incredibly low premiums",
//     discription: "Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket."
// },
// {
//   img: "/t-2.svg",
//   title: "Superquick and easy",
//   discription: "We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks."  
// },
// {
//   img: "/t-3.svg",
//   title: "Hassle-free claims",
//   discription: "We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements."  
// },
// ]



// // create acko section
// const ackoSection =document.getElementById("acko-section")

// for(let i= 0; 1 < ackoData.length; i++){
// // console.log(ackoSection)
//  // create div element
// const ackoCard = document.createElement("div")
// // console.log(ackoCard)
// ackoCard.className= "col-12 col-md-4"
 
// // create img
// const img = document.createElement("img")
// img.src = "../img"+ ackoData[i].img
// img.alt = "#"
// img.width = "120"

// // create h4 tag
// const h4 =document.createElement("h4")
// h4.innerText= ackoData[i].title

// // create p tag
// const p = document.createElement("p")
// p.innerText = ackoData[i].discription


// // appeding child of ackoCard
// ackoCard.appendChild(img)
// ackoCard.appendChild(h4)
// ackoCard.appendChild(p)
// // console.log(img)


// // appending child of ackosection
// ackoSection.appendChild(ackoCard)
// // console.log(ackoSection)
// }




// create object footer
const footerData = [
    {
        title: "Products",
        navLinks: ["Motor Insurance", "Car Insurance", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us", "Board of directors", "Careers", "Media kit", "All resources", "Articles", "Ackology - The tech blog", "Partnerships", "Sitemap"]
    },
    {
        title: "Legal",
        navLinks: ["Whistleblower policy", "Public disclosure", "Financials & disclosures", "Privacy policy", "Terms & conditions", "Stewardship code", "Disclaimer", "Anti fraud policy", "Health underwriting philosophy"]
    },
    {
        title: "Support",
        navLinks: ["Contact us", "Customer service", "Cancellations & refunds", "Downloads", "Unclaimed amount", "IRDAI website", "IRDAI's Call Centre Feedback Survey", "TBima Bharosa", "Ayushman Bharat Health Account","Other products"]
    },
    {
        title: "Car Insurance",
        navLinks: ["Car Insurance", "Comprehensive Car Insurance", "Third Party Car Insurance", "Own Damage Car Insurance", "Zero Depreciation Car Insurance", "Old Car Insurance", "EV Car Insurance", "Car Insurance Calculator", "Car Insurance Check","Compare Car Insurance","Pay As You Drive Car Insurance"]
    },
    {
        title: "Bike Insurance",
        navLinks: ["Bike Insurance", "Scooter Insurance", "Comprehensive Bike Insurance", "Third Party Bike Insurance", "Used Bike Insurance", "EV Bike Insurance", "Own Damage Bike Insurance", "Bike Insurance Calculator", "Compare Bike Insurance"]
    },
    {
        title: "Health Insurance",
        navLinks: ["Health Insurance", "Arogya Sanjeevani Policy", "COVID-19 Health Insurance", "Corona Kavach Policy", "Health Insurance Plans For Family", "Individual Health Insurance", "Life Insurance", "Cashless Health Insurance", "Women's Health Insurance","Health Insurance For Parents","Health Insurance For Children","Health Insurance For Senior Citizens","Health Insurance Premium Calculator","Waiting period in health insurance","Reimbursement Health Insurance","Health Insurance Portability","Super Top Up Health Insurance"]
    },
    {
        title: "Group Health Insurance",
        navLinks: ["Corporate Health Insurance","Group Health Insurance Add-ons","Maternity Cover In Group Health"]
    },
    {
        title: "Travel Insurance",
        navLinks: ["Travel Insurance","International Travel Insurance","USA Travel Insurance","Schengen Travel Insurance","Travel Insurance for Dubai","Travel Insurance for Thailand"]
    },
    {
        title: "Life Insurance",
        navLinks: ["Life Insurance","Term Insurance","Critical Illness Insurance","Accidental Death Benefit Rider","Disability Income Rider","Life Insurance Riders In India"]
    }
]

// footer section
const footer =document.getElementById("footer-content")

for (let i = 0; i < footerData.length; i++) {
  // create div 
const Div =document.createElement("div")
// console.log(Div)
Div.className ="col-12 col-md-3"

// create h5 heading
const h6 = document.createElement("h6")
h6.innerText= footerData[i].title
h6.style.color="rgb(21, 22, 25)"
h6.style.fontWeight="600"
h6.className="ps-4 ms-2 my-3"


// create ul tag
const ul = document.createElement("ul")
ul.style.listStyle="none"
ul.style.margin="0"


for (let link = 0; link < footerData[i].navLinks.length; link++) {
// create li tag
const li = document.createElement("li")
// create a tag
const a = document.createElement("a")
a.href ="#"
a.innerText =footerData[i].navLinks[link]
a.style.textDecoration="none"
a.style.color="rgb(21, 22, 25)"
a.style.fontSize="0.875rem"


// ul child
li.appendChild(a)
ul.appendChild(li)
}
// insite div
Div.appendChild(h6)
Div.appendChild(ul)

 //append the childs
 footer.appendChild(Div)

}
//  last fooetr
// const footerBox = document.getElementById("footer-box")

// // create div
// const div =document.createElement("div")
// console.log(div)
// div.className="col-12"

// const p = document.createElement("p")
// p.style.fontSize="0.75rem"
// p.style.color="rgb(91, 86, 117)"
// p.style.fontWeight="400"
// p.innerText="The use of images and brands are only for the purpose of indication and illustration.  ACKO claims no rights on the IP rights of any third parties. The ratings are derived from reviews and feedback received from Google and Facebook users on their respective platforms. | *Discount is calculated basis F&U filling rates. Product name: Private Car Policy - Bundled | UIN: IRDAN157RP0014V02201819 | Trade logo displayed above belongs to ACKO Technology & Services Pvt Ltd and used by ACKO General insurance Limited under License. For more details on risk factors, terms, conditions and exclusions, please read the policy wordings carefully before concluding a sale."


// // create appendchild div
// div.appendChild(p)
// // appendchild footerbox
// footerBox.appendChild(div)


