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

let links = document.querySelectorAll("header nav a")
for(let i = 0; i< links.length;i++){
  links[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`]
  links[i].style.color = "green"
}


document.querySelector('.cta h1').textContent = siteContent.cta.h1
document.querySelector('.cta button').textContent = siteContent.cta.button


let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let mainContentH4s  = document.querySelectorAll('.main-content h4');

mainContentH4s[0].textContent = siteContent['main-content']['features-h4']
mainContentH4s[1].textContent = siteContent['main-content']['about-h4']
mainContentH4s[2].textContent = siteContent['main-content']['services-h4']
mainContentH4s[3].textContent = siteContent['main-content']['product-h4']
mainContentH4s[4].textContent = siteContent['main-content']['vision-h4']


let mainContentParagraphs  = document.querySelectorAll('.main-content p');
mainContentParagraphs[0].textContent = siteContent['main-content']['features-content']
mainContentParagraphs[1].textContent = siteContent['main-content']['about-content']
mainContentParagraphs[2].textContent = siteContent['main-content']['services-content']
mainContentParagraphs[3].textContent = siteContent['main-content']['product-content']
mainContentParagraphs[4].textContent = siteContent['main-content']['vision-content']

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactDetails = document.querySelectorAll('.contact p')

console.log(siteContent.contact.address)

contactDetails[0].textContent = siteContent.contact.address;
contactDetails[1].textContent = siteContent.contact.phone;
contactDetails[2].textContent = siteContent.contact.email;
document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4'];

let footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright

let additionalLink = document.createElement('a');
additionalLink.textContent = 'Support';
additionalLink.style.color = 'green'


let nav = document.querySelector('nav');
nav.appendChild(additionalLink);


let extraLink = document.createElement('a');
extraLink.textContent = 'News'
extraLink.style.color = 'green'

let newNav = document.querySelector('nav');
newNav.prepend(extraLink);    