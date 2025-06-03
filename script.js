const yearElement =document.getElementById("currentYear");
const year =new Date ();
yearElement.innerText = year.getFullYear();

document.getElementById ('hamburger').addEventListener ('click' , function () {
    document.getElementById('navMenu').classList.toggle('active');
});