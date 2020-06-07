const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//nav//

let navBar = document.querySelectorAll('nav a');
navBar.forEach((value, index) => {
  value.textContent = siteContent['nav'][`nav-item-${index + 1}`];
});

navBar[0].style.color = 'green';
navBar[1].style.color = 'green';
navBar[2].style.color = 'green';
navBar[3].style.color = 'green';
navBar[4].style.color = 'green';
navBar[5].style.color = 'green';


//cta//

let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = '<h1>DOM<br> Is<br> Awesome</h1>';


let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent['cta']['button'];


let ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//main//

let topH4 = document.querySelectorAll('.main-content .top-content h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];


let topP = document.querySelectorAll('.main-content .top-content p');
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];


let mainContentImg = document.querySelector('.main-content img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


let bottomH4 = document.querySelectorAll('.main-content .bottom-content h4');
bottomH4[0].textContent = siteContent['main-content']['product-h4'];
bottomH4[1].textContent = siteContent['main-content']['services-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];


let bottomP = document.querySelectorAll('.main-content .bottom-content p');
bottomP[0].textContent = siteContent['main-content']['product-content'];
bottomP[1].textContent = siteContent['main-content']['services-content'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];

//contact//

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];


let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = '<p>123 Way 456 Street<br> Somewhere, USA</p>';
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];


//footer//

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];


//new content//

let nav = document.getElementsByTagName('nav')[0];

let navItem1 = document.createElement('a');
navItem1.textContent = 'DOM>JS';
navItem1.style.color = 'green';
nav.prepend(navItem1);

let navItem2 = document.createElement('a');
navItem2.textContent = 'Kelli Pierce';
navItem2.style.color = 'green';
nav.appendChild(navItem2);

