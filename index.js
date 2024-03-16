const nesxtSkill = document.querySelectorAll(".next_s");
const firstSkill = document.getElementById("sk1");
const secSkill = document.getElementById("sk2");
const thirdSkill = document.getElementById("sk3");
const fourthSkill = document.getElementById("sk4");



let currentIndex = 0;
const iMage = document.getElementById("image1");
const imageName = document.getElementById("name-span");


var imageDetail = [
    {locate:"./images/image1.jpg", name: "Myself"},
    {locate:"./images/image2.jpg", name: "Myself"},
    {locate:"./images/image3.jpg", name: "Me and Pst Juwon"},
    {locate:"./images/image4 (1).jpg", name: "Me and Joshua"},
    {locate:"./images/image5.jpg", name: "Myself"},
    {locate:"./images/image6.jpg", name: "Myself"},
]

var rotate = ()=>{
    iMage.src = imageDetail[currentIndex].locate;
    imageName.textContent = imageDetail[currentIndex].name;
    currentIndex = (currentIndex +1) % imageDetail.length;
}

setInterval(rotate, 2000);

const menu = document.querySelector(".mENu");
const hamburger = document.getElementById("hamb");
const closeBut = document.getElementById("close");
const menuButtons = document.querySelectorAll(".men-but");


hamburger.addEventListener("click", ()=>{
    hamburger.style.display = "none";
    closeBut.style.display = "block";
    menu.classList.toggle("showMenu");
})

closeBut.addEventListener("click", ()=>{
    hamburger.style.display = "block";
    closeBut.style.display = "none";
    menu.classList.remove("showMenu");
})

menuButtons.forEach((a)=>{
    a.addEventListener("click", ()=>{
        hamburger.style.display = "block";
        closeBut.style.display = "none";
        menu.classList.remove("showMenu");
    })
})





nesxtSkill.forEach((s)=>{
    s.addEventListener("click", (c)=>{
        const verify = c.currentTarget.classList

        if (verify.contains("A")){
            firstSkill.style.color = "white"
        }

        else if(verify.contains("B")){
            secSkill.style.color = "white"
        }

        else if (verify.contains("C")){
            thirdSkill.style.color = "white";
        }
        else{
            fourthSkill.style.color = "white";
        }
    })
} )

/*PLUGINS CODE STARTS HERE*/

const cameraButt = document.getElementById("take-mypics");
const locationButton = document.getElementById("latt");
const yourpasspor = document.getElementById("your-pics");
const long = document.getElementById("long");
const latt = document.getElementById("latt");
