//Globalno
var path = window.location.pathname.split("/").pop();

let links = ["index.html", "#aboutUs", "#products", "contact.html"];
let pageNames = ["Home", "About Us", "Menu & Pricing", "Contact Us And About Me"];

var writeMenu = `<div class="navbar-nav ms-auto mx-lg-auto py-0">`
for(let i=0; i<links.length; i++){
    writeMenu += `<a href="${links[i]}" class="nav-item nav-link active">${pageNames[i]}</a>`;
}
writeMenu += `</div>`;
document.querySelector("#navbarCollapse").innerHTML = writeMenu;


    // <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
    // <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
    // <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
    // <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
    // <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
    // <a class="text-secondary" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>

    let footerMenuText= ["Home", "About Us", "Menu", "Contact Us And About Me"];
    let footerMenuLink= ["Index.html","#aboutUs", "#products", "contact.html"];
    let footerMenuWrite="";
    for(let i=0; i<footerMenuLink.length; i++){
        footerMenuWrite+= `<a class="text-secondary mb-2" href="${footerMenuLink[i]}"><i class="bi bi-arrow-right text-primary me-2"></i>${footerMenuText[i]}</a>`
    }
    document.querySelector("#footMenu").innerHTML=footerMenuWrite;

      //futer

    // <div class="d-flex mb-2">
    //                         <i class="bi bi-geo-alt text-primary me-2"></i>
    //                         <p class="mb-0">123 Street, New York, USA</p>
    //                     </div>
    //                     <div class="d-flex mb-2">
    //                         <i class="bi bi-envelope-open text-primary me-2"></i>
    //                         <p class="mb-0">info@example.com</p>
    //                     </div>
    //                     <div class="d-flex mb-2">
    //                         <i class="bi bi-telephone text-primary me-2"></i>
    //                         <p class="mb-0">+012 345 67890</p>
    //                     </div>


    let footerText= ["123 Street, New York, USA", "nfo@example.com", "+012 345 67890"];
    let footerBi= ["bi-geo-alt","bi-envelope-open","bi-telephone"]
    var writeFooter= "";
    for(let i=0;i<footerText.length; i++){
        writeFooter+= `<div class="d-flex mb-2">
                                <i class="bi ${footerBi[i]} text-primary me-2"></i>
                                 <p class="mb-0">${footerText[i]}</p>
                        </div>`
    }
    document.querySelector("#footerContact").innerHTML= writeFooter;

//Indeks
if(path =="index.html" || path == ""){

    //Promena slike
    $("#aboutImageHover img").hover(function(){
        $(this).fadeOut(function(){
            $(this).attr("src","img/cake-for-about.jpg").fadeIn();
        })
    },
    function(){
        $(this).fadeOut(function(){
            $(this).attr("src","img/about.jpg").fadeIn();
        })
    })

    //Promocija
    let aboutIconsText = ["100% Healthy", "Award Winning"];
    let aboutTextIcons = ["We're using only 100% healty ingrediant","Some of the most famous people in England enjoying our cakes"];
    var aboutIcons = "";
    for (let i =0; i<aboutIconsText.length; i++){
        aboutIcons += `<div class="col-sm-6">
                        <div class="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style="width: 90px; height: 90px;">
                            <i class="fa fa-heartbeat fa-2x text-white"></i>
                        </div>
                            <h4 class="text-uppercase">${aboutIconsText[i]}</h4>
                            <p class="mb-0">${aboutTextIcons[i]}</p>
                    </div>`
    }
    document.querySelector("#abouticons").innerHTML = aboutIcons;

    //Statistika
    let customerText= ["OUR EXPIRIENCE", "CAKE SPECALIST", "COMPLETE PROJECT", "HAPPY CLIENTS"]
    let customerCounter = ["9.5", "100", "4500", "5000"]
    var customersExpirience = "";
    for(let i=0; i<customerText.length; i++){
        customersExpirience += `<div class="col-lg-3 col-md-6">
                                <div class="d-flex">
                                <div class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                    <i class="fa fa-star text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h6 class="text-primary text-uppercase">${customerText[i]}</h6>
                                    <h1 class="display-5 text-white mb-0" data-toggle="counter-up counter">${customerCounter[i]}</h1>
                                </div>
                            </div>
                        </div>`
    }
    document.querySelector("#customerExp").innerHTML = customersExpirience;

    //Counter
    // $('[data-toggle="counter-up counter"]').counterUp({
    //     delay: 5,
    //     time: 1500
    // });

    //Filter
    $("#cakeList ul li").click(function(){
        var iteClass = $(this).attr("class").substring(0,3);
        console.log(iteClass);
        $(".item .all").hide();
        $(".item ." + iteClass).show();

        $(this).siblings(".activeCard").removeClass("activeCard");
        $(this).addClass("activeCard");
    })



    //Citaj jos
    $("#btnRead").click(function(){
        if($("#moreText").is(":visible")){
            $("#moreText").fadeOut().hide();
        }
        else{
            $("#moreText").fadeIn().show();
        }
    })

    //Klijenti
    $(document).ready(function(){
        changeCients();
    });

    function changeCients(){
        var curClients = $(".clientActive");
        if(curClients.next().length){
            var nextClients = curClients.next()
        }
        else{
            var nextClients = curClients.parent().children(":first");
        }
        curClients.hide().removeClass("clientActive");
        nextClients.fadeIn(2500).addClass("clientActive");
        setTimeout(changeCients,5000);
    }
}

{/* <div class="col-md-5 bg-dark text-white border-inner p-4">
<div class="d-flex align-items-center mb-3">
    <img class="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style="width: 60px; height: 60px;">
    <div class="ps-3">
        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
        <span>Profession</span>
    </div>
</div>
<p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
</p>
</div>
<div class="col-md-5 bg-dark text-white border-inner p-4">
<div class="d-flex align-items-center mb-3">
    <img class="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style="width: 60px; height: 60px;">
    <div class="ps-3">
        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
        <span>Profession</span>
    </div>
</div>
<p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
</p>
</div>
</div>
<div class="row clientText">
<div class="col-5 bg-dark text-white border-inner p-4">
<div class="d-flex align-items-center mb-3">
    <img class="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style="width: 60px; height: 60px;">
    <div class="ps-3">
        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
        <span>Profession</span>
    </div>
</div>
<p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
</p>
</div>
<div class="col-5 bg-dark text-white border-inner p-4">
<div class="d-flex align-items-center mb-3">
    <img class="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" style="width: 60px; height: 60px;">
    <div class="ps-3">
        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
        <span>Profession</span>
    </div>
</div>
<p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
</p>
</div>
</div>  */}

let cusPic= ["testimonial-3.jpg", "testimonial-1.jpg", "testimonial-4.jpg", "testimonial-2.jpg"]
let customerName= ["John", "Anna", "Sarah", "Michael"];
let customerText= ["I love this place, this cakes are like haven for real!", "This is the place where I love to come to have good snack!", "This place is awesome, I love food, I love people there it's really quiet and relaxing, u could even study there!", "I won't say u anything, u should go and see by yourself! 10/10!!" ];
var writeClients= "";
for(let y=0; y<customerName.length; y++){
    writeClients+= `<div class="col-5 bg-dark text-white border-inner p-4">
    <div class="d-flex align-items-center mb-3">
        <img class="img-fluid flex-shrink-0" src="img/${cusPic[y]}" style="width: 60px; height: 60px;">
        <div class="ps-3">
            <h4 class="text-primary text-uppercase mb-1">${customerName[y]}</h4>
            <span>Profession</span>
        </div>
    </div>
    <p class="mb-0">${customerText[y]}</p>
    </div>
    </div>`
}
document.querySelector("#customers").innerHTML=writeClients;

//Kontakt
if(path == "contact.html"){

    //Regularni izrazi
    var regMail = /^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})+$/
    var regName = /^([A-Z][a-z]{2,10})\s([A-Z][a-z]{3,15})$/
    var regMsg = /(.{10})+/

    //Provera forme
    var conName = document.querySelector("#addName");
    conName.addEventListener("blur",function(){
        formCheck(regName,conName);
    })

    var conMail = document.querySelector("#addMail");
    conMail.addEventListener("blur",function(){
        formCheck(regMail,conMail);
    })

    var conMsg = document.querySelector("#addMsg");
    conMsg.addEventListener("blur",function(){
        formCheck(regMsg,conMsg);
    })

    var conSel = document.querySelector("#addType");
    conSel.addEventListener("change",function(){
        var conSelected = conSel.options[conSel.selectedIndex].value;
        if(conSelected == 0){
            conSel.nextElementSibling.classList.remove("eHide");
            conSel.nextElementSibling.classList.add("eShow");
        }
        else{
            conSel.nextElementSibling.classList.remove("eShow");
            conSel.nextElementSibling.classList.add("eHide");
        }
    })

    var conRadio = document.getElementsByName("fast");
    conRadio.forEach(element => element.addEventListener("change",function(){
        for(let i= 0; i <conRadio.length; i++){
            if(conRadio[i].checked){
                conRadio[1].parentElement.nextElementSibling.classList.remove("eShow");
                conRadio[1].parentElement.nextElementSibling.classList.add("eHide");
                break;
            }
            else{
                conRadio[1].parentElement.nextElementSibling.classList.remove("eHide");
                conRadio[1].parentElement.nextElementSibling.classList.add("eShow");
            }
        }
    }))

    var conCheck = document.querySelector("#agree");
    conCheck.addEventListener("change",function(){
        if(conCheck.checked){
            conCheck.nextElementSibling.nextElementSibling.classList.remove("eShow");
            conCheck.nextElementSibling.nextElementSibling.classList.add("eHide");
        }
        else{
            conCheck.nextElementSibling.nextElementSibling.classList.remove("eHide");
            conCheck.nextElementSibling.nextElementSibling.classList.add("eShow");
        }
    })

    var conBtn = document.querySelector("#send");
    conBtn.addEventListener("click",function(){
        var eBr = 0;
        var p = 1;

        var conSelected = conSel.options[conSel.selectedIndex].value;
        if(conSelected == 0){
            conSel.nextElementSibling.classList.remove("eHide");
            conSel.nextElementSibling.classList.add("eShow");
            p=1;
        }
        else{
            conSel.nextElementSibling.classList.remove("eShow");
            conSel.nextElementSibling.classList.add("eHide");
            p=0;
        }
        eBr += p;
        p=1;
        for(let i= 0; i <conRadio.length; i++){
            if(conRadio[i].checked){
                conRadio[1].parentElement.nextElementSibling.classList.remove("eShow");
                conRadio[1].parentElement.nextElementSibling.classList.add("eHide");
                p=0;
                break;
            }
            else{
                conRadio[1].parentElement.nextElementSibling.classList.remove("eHide");
                conRadio[1].parentElement.nextElementSibling.classList.add("eShow");
                p=1;
            }
        }
        eBr += p;
        p=1;
        if(conCheck.checked){
            conCheck.nextElementSibling.nextElementSibling.classList.remove("eShow");
            conCheck.nextElementSibling.nextElementSibling.classList.add("eHide");
            p=0;
        }
        else{
            conCheck.nextElementSibling.nextElementSibling.classList.remove("eHide");
            conCheck.nextElementSibling.nextElementSibling.classList.add("eShow");
            p=1;
        }
        eBr += p;;
        eBr += formCheck(regName,conName);
        eBr += formCheck(regMail,conMail);
        eBr += formCheck(regMsg,conMsg);

        if(!eBr){
            conBtn.nextElementSibling.classList.remove("sHide");
            conBtn.nextElementSibling.classList.add("sShow");
        }
    })


}   

//Functions

function formCheck(reg,val){
    if(reg.test(val.value)){
            val.nextElementSibling.classList.remove("eShow");
            val.nextElementSibling.classList.add("eHide");
            return 0;
        }
    else{
            val.nextElementSibling.classList.remove("eHide");
            val.nextElementSibling.classList.add("eShow");
            return 1;
        }
}

  