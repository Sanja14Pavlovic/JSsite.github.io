{/* <div class="navbar-nav ms-auto mx-lg-auto py-0">
<a href="index.html" class="nav-item nav-link active">Home</a>
<a href="about.html" class="nav-item nav-link">About Us</a>
<a href="menu.html" class="nav-item nav-link">Menu & Pricing</a>
<a href="team.html" class="nav-item nav-link">Master Chefs</a>
<a href="contact.html" class="nav-item nav-link">Contact Us</a>
</div> */}
//mainmenu
let links = ["index.html", "#aboutUs", "#products", "contact.html"];
let pageNames = ["Home", "About Us", "Menu & Pricing", "Contact Us"];

var writeMenu = `<div class="navbar-nav ms-auto mx-lg-auto py-0">`
for(let i=0; i<links.length; i++){
    writeMenu += `<a href="${links[i]}" class="nav-item nav-link active">${pageNames[i]}</a>`;
}
writeMenu += `</div>`;
document.querySelector("#navbarCollapse").innerHTML = writeMenu;



// <!-- <div class="col-sm-6">
//                             <div class="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style="width: 90px; height: 90px;">
//                                 <i class="fa fa-heartbeat fa-2x text-white"></i>
//                             </div>
//                             <h4 class="text-uppercase">100% Healthy</h4>
//                             <p class="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
//                         </div>
//                         <div class="col-sm-6">
//                             <div class="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style="width: 90px; height: 90px;">
//                                 <i class="fa fa-award fa-2x text-white"></i>
//                             </div>
//                             <h4 class="text-uppercase">Award Winning</h4>
//                             <p class="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
//                         </div> -->
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

// <!-- <div class="col-lg-3 col-md-6">
//                     <div class="d-flex">
//                         <div class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
//                             <i class="fa fa-star text-white"></i>
//                         </div>
//                         <div class="ps-4">
//                             <h6 class="text-primary text-uppercase">Our Experience</h6>
//                             <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-3 col-md-6">
//                     <div class="d-flex">
//                         <div class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
//                             <i class="fa fa-users text-white"></i>
//                         </div>
//                         <div class="ps-4">
//                             <h6 class="text-primary text-uppercase">Cake Specialist</h6>
//                             <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-3 col-md-6">
//                     <div class="d-flex">
//                         <div class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
//                             <i class="fa fa-check text-white"></i>
//                         </div>
//                         <div class="ps-4">
//                             <h6 class="text-primary text-uppercase">Complete Project</h6>
//                             <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-3 col-md-6">
//                     <div class="d-flex">
//                         <div class="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
//                             <i class="fa fa-mug-hot text-white"></i>
//                         </div>
//                         <div class="ps-4">
//                             <h6 class="text-primary text-uppercase">Happy Clients</h6>
//                             <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
//                         </div>
//                     </div>
//                 </div> -->

let customerText= ["OUT EXPIRIENCE", "CAKE SPECALIST", "COMPLETE PROJECT", "HAPPY CLIENTS"]
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


//counter 
$('[data-toggle="counter-up counter"]').counterUp({
    delay: 5,
    time: 1500
  });


// image changer 
//   $("aboutImageHover img").hover(
//     function(){
//         console.log(1);
//         $(this).attr("src","img/cake-for-about.jpg");
//     },
//     function(){
//         console.log(2);
//         $(this).attr("src", "img/about.jpg");
//     })


