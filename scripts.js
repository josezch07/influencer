let svgCircle = document.getElementById("svgCircle")
let step1 = document.getElementById("step1")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let step4 = document.getElementById("step4")
let step5 = document.getElementById("step5")
let userbox = document.getElementById("userBox")



let main = document.getElementById("main")

main.style.backgroundImage = "url(img/img-1.jpg)"



step1.addEventListener('click',()=>{
      svgCircle.style.strokeDashoffset = "1004"
      main.style.backgroundImage = "url(img/img-2.jpg)"
      userbox.style.top="-350px"
      

})
step2.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "753"
    main.style.backgroundImage = "url(img/img-3.jpg)"
    userbox.style.top="-800px"
})
step3.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "502"
    main.style.backgroundImage = "url(img/img-4.jpg)"
    userbox.style.top="-1200px"
})
step4.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "251"
    main.style.backgroundImage = "url(img/img-5.jpg)"
    userbox.style.top="-1700px"
})
step5.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "0"
    main.style.backgroundImage = "url(img/img-1.jpg)"
    userbox.style.top="100px"
})