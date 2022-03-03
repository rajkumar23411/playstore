let footerTags = document.querySelector('.footer');
let liTags = document.querySelectorAll('.footer ul li');

liTags.forEach(elem => {
    elem.addEventListener('click', function() {
        footerTags.querySelector('.active').classList.remove('active');

        elem.classList.add('active');
    });
});

let navbarTags = document.querySelector('#navbar'),
    navLiTags = document.querySelectorAll('#navbar ul li');

navLiTags.forEach(e => {
    e.addEventListener('click', () => {
        navbarTags.querySelector('.active').classList.remove('active');
        e.classList.add('active');
    })
})


const games = document.querySelector('#games'),
    apps = document.querySelector('#apps'),
    offers = document.querySelector('#offers'),
    movies = document.querySelector('#movies'),
    books = document.querySelector('#books'),
    appSection = document.querySelector('.apps'),
    mainSection = document.querySelector('.games'),
    moviesSection = document.querySelector('.movies'),
    bookSection = document.querySelector('.books'),
    offerSection = document.querySelector('.offer'),
    microphoneBtn = document.querySelector('.fa-microphone'),
    microphoneSection = document.querySelector('.microphone'),
    accountSection = document.querySelector('.account'),
    searchDiv = document.querySelector('.search_div');

games.addEventListener('click', () => {
    mainSection.style.display = "block";
    appSection.style.display = " none";
    moviesSection.style.display = "none";
    bookSection.style.display = "none";
    offerSection.style.display = "none";
})
apps.addEventListener('click', () => {
    appSection.style.display = "block"
    mainSection.style.display = "none";
    moviesSection.style.display = "none";
    bookSection.style.display = "none";
    offerSection.style.display = "none";
})
movies.addEventListener('click', () => {
    appSection.style.display = "none"
    mainSection.style.display = "none";
    moviesSection.style.display = "block";
    bookSection.style.display = "none";
    offerSection.style.display = "none";
})
books.addEventListener('click', () => {
    appSection.style.display = "none"
    mainSection.style.display = "none";
    moviesSection.style.display = "none";
    bookSection.style.display = "block";
    offerSection.style.display = "none";
});

offers.addEventListener('click', () => {
    appSection.style.display = "none"
    mainSection.style.display = "none";
    moviesSection.style.display = "none";
    bookSection.style.display = "none";
    offerSection.style.display = "block";
});

microphoneBtn.addEventListener('click', () => {
    microphoneSection.classList.add('visible');
});

document.querySelector('#micro_Cross').addEventListener('click', () => {
    microphoneSection.classList.remove('visible');
});

document.querySelector('#profile').addEventListener('click', () => {
    accountSection.classList.add('active');
})

document.getElementById('acc_close').addEventListener('click', () => {
    accountSection.classList.remove('active');
});

document.querySelector('#search').addEventListener('click', () => {
    searchDiv.classList.add('active');
});

document.querySelector('#search_div_arrow').addEventListener('click', () => {
    searchDiv.classList.remove('active');
});