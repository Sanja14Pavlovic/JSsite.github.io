//Globalno
var path = window.location.pathname.split("/").pop();

let links = ["index.html", "#aboutUs", "#products", "contact.html"];
let pageNames = ["Home", "About Us", "Menu", "Contact Us And About Me"];

var writeMenu = `<div class="navbar-nav ms-auto mx-lg-auto py-0">`
for(let i=0; i<links.length; i++){
    writeMenu += `<a href="${links[i]}" class="nav-item nav-link active">${pageNames[i]}</a>`;
}
writeMenu += `</div>`;
document.querySelector("#navbarCollapse").innerHTML = writeMenu;

    let footerMenuText= ["Home", "About Us", "Menu", "Contact Us And About Me"];
    let footerMenuLink= ["index.html","#aboutUs", "#products", "contact.html"];
    let footerMenuWrite="";
    for(let i=0; i<footerMenuLink.length; i++){
        footerMenuWrite+= `<a class="text-secondary mb-2" href="${footerMenuLink[i]}"><i class="bi bi-arrow-right text-primary me-2"></i>${footerMenuText[i]}</a>`
    }
    document.querySelector("#footMenu").innerHTML=footerMenuWrite;


    let footerIcons= ["<i class='fa fa-sitemap'></i>", "<i class='fa-solid fa-robot'></i>", "<i class='fa-solid fa-file'></i>"];
    let footerLinksIcon= ["sitemap.xml","robots.txt","dokumentacija.pdf"];
    var writeFooter= "";
    for(let i=0;i<footerIcons.length; i++){
        writeFooter+= `<a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2" href="${footerLinksIcon[i]}">${footerIcons[i]}</a>`
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
    let customerIcon= ["bi bi-star","bi bi-arrow-up","bi bi-skip-start-circle","bi bi-star-fill"]
    var customersExpirience = "";
    for(let i=0; i<customerText.length; i++){
        customersExpirience += `<div class="col-lg-3 col-md-6">
                                <div class="d-flex">
                                <div class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                    <i class="${customerIcon[i]}"></i>
                                </div>
                                <div class="ps-4">
                                    <h6 class="text-primary text-uppercase">${customerText[i]}</h6>
                                    <h1 class="display-5 text-white mb-0" data-toggle="counter-up counter"">${customerCounter[i]}</h1>
                                </div>
                            </div>
                        </div>`
    }
    document.querySelector("#customerExp").innerHTML = customersExpirience;

    //counter
    // $('[data-toggle="counter-up counter"]').counterUp({
    //     delay: 5,
    //     time: 1500
    //   });

    //Filter
    $("#cakeList ul li").click(function(){
        var iteClass = $(this).attr("class").substring(0,3);
        console.log(iteClass);
        $(".item .all").hide();
        $(".item ." + iteClass).show();

        $(this).siblings(".activeCard").removeClass("activeCard");
        $(this).addClass("activeCard");
    })

    var cakeImg = ["cake-1.jpg","bcake1.jpg","bcake2.jpg","bcake3.jpg","cake-2.jpg","wcake2.jpg","wcake3.jpg","cake-3.jpg","ccake1.jpg","ccake2.jpg","ccake3.jpg","ccake4.jpg"];
    var cakePrice = ["$99.99","$85.99","$58.99","$100","$55.90","$78.99","$79.99","$89.99","$100.00","$109.99","$90.99","$59.99"];
    var cakeType = ["Birthrday on 3 floor","Birthrday cace rose", "Birthrday cake flowers", "Birthrday cake chill",  "Wedding cake od 3 floor","Wedding cake od 2 floor","small wedding cake", "Custom cake chocolate", "Custom cake grafit","Custom cake city","Custom cake fruits","Custom cake like pancakes"];
    var cakeClass=["bir","bir", "bir","bir", "wed", "wed", "wed", "oth", "oth", "oth", "oth", "oth"]
    var cakeText = ["9/10","7/10","8.5/10","7.3/10","8.8/10","5.9/10","10/10","9.9/10","9.5/10","7.9/10","8.3/10","7.8/10"];
    var cakeWrite = "";
    for(let i=0; i < cakeImg.length; i++){
        cakeWrite += `<div class="col-lg-6 ${cakeClass[i]} all">
                             <div class="d-flex h-100">
                                 <div class="flex-shrink-0">
                                     <img class="img-fluid" src="img/${cakeImg[i]}" alt="" style="width: 150px; height: 85px;">
                                     <h4 class="bg-dark text-primary p-2 m-0">${cakePrice[i]}</h4>
                                 </div>
                                 <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                                     <h5 class="text-uppercase">${cakeType[i]}</h5>
                                     <span>Customer expirience: </br>${cakeText[i]}</span>
                                 </div>
                             </div>
                         </div>`
    }
    document.querySelector("#cardCakes").innerHTML = cakeWrite;

    var clientImg = ["testimonial-1.jpg", "testimonial-2.jpg","testimonial-3.jpg","testimonial-4.jpg"];
    var clientName = ["Sarah","John","Dave","Anna"];
    var clientProf = ["Artist","Chrief","Photographer","Athelitics"];
    var clientText = ["This place is awesome, I love food, I love people there it's really quiet and relaxing, u could even study there!", "I won't say u anything, u should go and see by yourself! 10/10!!","This is the place where I love to come to have good snack!","I love this place, this cakes are like haven for real!","This place is awesome, I love food, I love people there it's really quiet and relaxing, u could even study there!"];
    var clientWrite = '<div class="row clientText clientActive">';
    for(let i=0; i<clientImg.length; i++){
        clientWrite += `<div class="col-5 bg-dark text-white border-inner p-4">
                         <div class="d-flex align-items-center mb-3">
                             <img class="img-fluid flex-shrink-0" src="img/${clientImg[i]}" style="width: 60px; height: 60px;">
                             <div class="ps-3">
                                 <h4 class="text-primary text-uppercase mb-1">${clientName[i]}</h4>
                                 <span>${clientProf[i]}</span>
                             </div>
                         </div>
                         <p class="mb-0">${clientText[i]}</p>
                     </div>`;
        if(i == 1){
            clientWrite += `</div>
                     <div class="row clientText">`
        }
    }
    clientWrite += "</div>";
    document.querySelector("#cardClients").innerHTML = clientWrite;

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

//Kontakt
if(path == "contact.html"){

    //card contact
    let cardContactText=["Out office", "Email Us", "Call Us"];
    let cardSpan=["15 Street, New York, USA","chessecake@gmail.com", "+381 648579725"];
    let cardIcon=["bi bi-geo-alt fs-1 text-white", "bi bi-envelope-open fs-1 text-white", "bi bi-phone-vibrate fs-1 text-white" ];
    var cardWrite = "";
    for(let i=0; i<cardIcon.length; i++){
        cardWrite += `<div class="col-lg-4 col-md-6">
                         <div class="bg-primary border-inner text-center text-white p-5">
                             <i class="${cardIcon[i]}"></i>
                             <h6 class="text-uppercase my-2">${cardContactText[i]}</h6>
                            <span>${cardSpan[i]}</span>
                         </div>
                     </div>`
    }
    document.querySelector("#iconsContacts").innerHTML=cardWrite;

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

  