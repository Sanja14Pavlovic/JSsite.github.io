//main menu 
let linkoviMenija = ["index.html", "about.html", "services.html", "blog.html", "contact.html"]
let imenaStranica = ["Home", "About", "Services", "Blog", "Contact"]
let ispisListe = `<ul>`
    for(let i=0; i<linkoviMenija.length; i++){
        ispisListe += `<li><a href="${linkoviMenija[i]}">${imenaStranica[i]}</a></li>`;
    }
ispisListe +=  `</ul>`
document.querySelector(".menu_main").innerHTML = ispisListe


//usluge
let slikeUsluge = ["images/img-1.png", "images/img-2.png", "images/img-3.png"]
let putanjaUsluge = ["#","#","#"]
let opcijaUsluge = ["Opcija 1", "opcija2", "opcija 3"]
let ispisUsluga =  ""
for(let i=0; i<putanjaUsluge.length; i++){
    ispisUsluga += `<div class="col-md-4">
        <div><img src="../${slikeUsluge[i]}" class="services_img"></div>
        <div class="btn_main"><a href="${putanjaUsluge[i]}">${opcijaUsluge[i]}</a></div>
                    </div>`
}
ispisUsluga += `</div>`
document.querySelector("#slikeUsluga").innerHTML = ispisUsluga


//kontakt strana
//Regularni izrazi 
var regMail = /^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})+$/
var regName = /^([A-Z][a-z]{2,10})\s([A-Z][a-z]{3,15})$/
var regMsg = /(.{10})+/
