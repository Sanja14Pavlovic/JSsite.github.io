//Globalno
var path = window.location.pathname;

let links = ["index.html", "#aboutUs", "#products", "contact.html"];
let pageNames = ["Home", "About Us", "Menu & Pricing", "Contact Us"];

var writeMenu = `<div class="navbar-nav ms-auto mx-lg-auto py-0">`
for(let i=0; i<links.length; i++){
    writeMenu += `<a href="${links[i]}" class="nav-item nav-link active">${pageNames[i]}</a>`;
}
writeMenu += `</div>`;
document.querySelector("#navbarCollapse").innerHTML = writeMenu;

//Indeks
if(path =="/index.html" || path == "/"){

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
    $('[data-toggle="counter-up counter"]').counterUp({
        delay: 5,
        time: 1500
    });

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

//Kontakt
if(path == "/contact.html"){

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