const navMenu =document.getElementById('nav-menu'), 
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');


    toggleMenu.addEventListener('click', () =>{
        navMenu.classList.toggle('show');
    })
    closeMenu.addEventListener('click', () =>{
        navMenu.classList.remove('show');
    })

    document.addEventListener('mousemove', move);
    function move (e){
        this.querySelectorAll('.move').forEach(layer => {
            const speed = layer.getAttribute('data-speed') 
            const x = (window.innerWidth - e.pageX*speed)/120
            const y = (window.innerHeight - e.pageY*speed)/120

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`

        });
    }
    gsap.from('.nav__logo, .nav__toggle' , {opacity: 0, duration: 1, delay: 2, y:10})
    gsap.from('.nav__item' , {opacity: 0, duration: 1, delay: 2.1, y:30, stragger: 0.2})
    gsap.from('.home__title' , {opacity: 0, duration: 1, delay: 1.6, y:30})
    gsap.from('.home__description' , {opacity: 0, duration: 1, delay: 1.8, y:30})
    gsap.from('.home__button' , {opacity: 0, duration: 1, delay: 2.1, y:30})
    gsap.from('.home__img' , {opacity: 0, duration: 1, delay: 1.3, y:30})
    


    const productos=document.getElementById("productos");
    const dropdown=document.getElementById("dropdown");

    productos.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
    
    
    const meaty = document.getElementById("meaty");    
    const hawaiian = document.getElementById("hawaiian");
    const mediterranian = document.getElementById("mediterranian");
    const veggie = document.getElementById("veggie");
    const capresse = document.getElementById("capresse");
    const bacon = document.getElementById("bacon");
    const inicio = document.getElementById("Inicio");


var imagenpizza = document.getElementById("imagenPizza");
    var titulo = document.getElementById("tituloPizza");
    var ingredientes = document.getElementById("ingredientesPizza");

    meaty.addEventListener('click', () =>{
        titulo.innerHTML = "Pizza Meaty";
        ingredientes.innerHTML = "Tiras de panceta, Jamón, Salchichas italianas, Muzzarella, Pepperoni, Salsa de tomate";
        imagenpizza.src = "img/image2.png";
        dropdown.classList.toggle("active");
        navMenu.classList.remove('show');
    });



    hawaiian.addEventListener('click', () =>{
        titulo.innerHTML = "Pizza Hawaiiana";
        ingredientes.innerHTML = "Tiras de panceta, Jamón, Muzzarella, Ananas, Salsa de tomate";
        imagenpizza.src = "img/image3.png";
        dropdown.classList.toggle("active");
        navMenu.classList.remove('show');

    });

    mediterranian.addEventListener('click', () =>{
        titulo.innerHTML = "Pizza Mediterrania";
        ingredientes.innerHTML = "Tiras de panceta, Aceitunas, Muzzarella, Pepperoni, Salsa de tomate";
        imagenpizza.src = "img/image4.png";
        dropdown.classList.toggle("active");
        navMenu.classList.remove('show');

    });

    veggie.addEventListener('click', () =>{
        titulo.innerHTML = "Pizza Veggie";
        ingredientes.innerHTML = "Alcauciles, Brocoli, Muzzarella, Hongos, Salsa de tomate, Cebolla colorada, zucchini, Tomate";
        imagenpizza.src = "img/image5.png";
        dropdown.classList.toggle("active");
        navMenu.classList.remove('show');

    });

    capresse.addEventListener('click', () =>{
        titulo.innerHTML = "Pizza Capresse";
        ingredientes.innerHTML = "Pimientos, Aceitunas, Pollo, Muzzarella, Hongos, Salsa de tomate, Tomate, Cebolla";
        imagenpizza.src = "img/image6.png";
        dropdown.classList.toggle("active");
        navMenu.classList.remove('show');

    });

    bacon.addEventListener('click', () =>{
        titulo.innerHTML = "Pizza Bacon";
        ingredientes.innerHTML = "Pimientos, Panceta, Mozzarella, Salsa de tomate, Cebolla";
        imagenpizza.src = "img/image1.png";
        dropdown.classList.toggle("active");
        navMenu.classList.remove('show');

    });


    inicio.addEventListener('click', () =>{
       imagenpizza.src = "img/pizza2.gif";
       titulo.innerHTML = "";
       ingredientes.innerHTML = "";
       navMenu.classList.remove('show');
    });