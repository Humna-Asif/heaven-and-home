"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {
    gsap.from("a", {
      stagger: 0.2,
      duration: 1,
      y: 10,
      opacity: 0
    });


    gsap.from("#heading", {
      y: 40,
      delay: 0.1,
      duration: 1,
      opacity:0,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });

    gsap.from("#sustain",{
      y:30,
      duration:1,
      stagger:3,
      opacity:0,
    })

    gsap.from("#circleimg",{
      x:30,
      duration:2,
      stagger:1,
      rotate:190,
    })

    gsap.from("#visit",{
      y:30,
      duration:3,
      stagger:2,
      opacity:0,
    })
    gsap.from("#circle i",{
      y:-60,
      duration:2,
      stagger:3,
      opacity:0,


    })

    gsap.from("#motive",{
      y:40,
      opacity:0,
      delay:.1,
      duration:1,
      scrollTrigger:{
        trigger:"#motive",
        scroller:"body",
        toggleActions: "play none none reset",
      }
    })

    gsap.from("#motive p span",{
      duration:2,
      opacity:0,
      scale:0,
      rotate:190,
      scrollTrigger:{
        trigger:"#motive",
        scroller:"body",
        toggleActions: "play none none reset",
      }
          })

          gsap.from("#heromotive",{
            duration:1,
            y:50,
            opacity:0,
            scrollTrigger:{
              trigger:"#heromotive",
              start:"80%",
              scroller:"body",
              toggleActions: "play none none reset",
            }

          })

    gsap.from("#ftext",{
      duration:2,
      scale:.7,
      opacity:0,
      scrollTrigger:{
        trigger:"#future",
        scroller:"body",
        start:"bottom 40%",
        toggleActions: "play none none reset",
      }    })

    const imgElement = document.querySelector("#dreamS img");

    imgElement.addEventListener("mouseover", function() {
      gsap.to(imgElement, {
        duration: .5,
        height: "34vw",
        width: "26vw",
        onStart: () => imgElement.setAttribute("src", "https://i.pinimg.com/564x/c8/ed/f8/c8edf8c0d412a3ef117ab4c61dd84a3d.jpg")
      });
    });
    
    imgElement.addEventListener("mouseleave", function() {
      gsap.to(imgElement, {
        duration: .5,
        height: "32vw",
        width: "24vw",
        onStart: () => imgElement.setAttribute("src", "https://cdn.pixabay.com/photo/2023/09/27/21/39/furniture-8280352_1280.jpg")
      });
    });

    const visit = document.querySelector("#visit");

    visit.addEventListener("mouseover", function() {
      gsap.to("#visit i",{
        rotate:-85,
      })

      gsap.to("#visit h4",{
        fontSize:"1.5vw",
      })
    })

    visit.addEventListener("mouseleave", function() {
      gsap.to("#visit i",{
        rotate:0,
      })

      gsap.to("#visit h4",{
        fontSize:"1vw",
      })
    })
    const sustain = document.querySelector("#susimagewrapper img");

    sustain.addEventListener("mouseover", function() {
      gsap.to("#susimagewrapper img", {
        duration:2,
        onStart: () => sustain.setAttribute("src", "https://i.pinimg.com/736x/fc/40/19/fc4019cb2271512d886d81314eb9d3ea.jpg")

      });

      gsap.to("#sustain h3",{
        fontSize:"1.9vw",
        textDecoration:"underline",

      })
    });
    
    sustain.addEventListener("mouseleave", function() {
      gsap.to("#susimagewrapper img", {
        duration:1,
        onStart: () => sustain.setAttribute("src", "https://images.unsplash.com/photo-1730407787420-a23fcbc7dbe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8")
    
      });
      gsap.to("#sustain h3",{
        fontSize:"1vw",
        textDecoration:"none",
      })
    });

    const navLinks = document.querySelectorAll("#nav a");

  navLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
      gsap.to(link, {
        textDecoration: "underline"
      });
    });

    link.addEventListener("mouseout", function() {
      gsap.to(link, {
        textDecoration: "none"
      });
    });
  });
    

    document.querySelector("#ftext button")
    .addEventListener("mouseover", function(){
      gsap.to("#future #fimg",{
        opacity:1,
        duration:1.4,
      })
    })

    document.querySelector("#ftext button")
    .addEventListener("mouseleave", function(){
      gsap.to("#future #fimg",{
        opacity:0,
        duration:1,
      })
    })

    gsap.to(" #imgbox",{
      transform:"translateX(-175%)",
      scrollTrigger:{
        trigger:"#pictures",
        scroller:"body",
        start:"top 5%",
        end:"top -100%",
        pin:true,
        scrub:1,
      }
    })

    gsap.to("#bimg", {
      scale: 1.9, 
      opacity:1,
      delay:1,
      scrollTrigger: {
        trigger: "#banner",
        start: "top 80%", 
        end: "bottom 20%", 
        scrub: 1, 
      },
    });
    gsap.to("#banner h1", {
      color:"white",
      scrollTrigger: {
        trigger: "#banner",
        start: "top 70%", 
        end: "bottom 20%", 
        scrub: 1, 
      },
    });

    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });
    return () => {
      scroll.destroy(); 
    };
  }, []);

  return (
    <div id="main">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Dancing+Script:wght@400..700&family=Faculty+Glyphic&family=Marcellus&family=Nanum+Gothic&family=Scada:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
      <style>
   @import url('https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Faculty+Glyphic&family=Marcellus&family=Scada:ital,wght@0,400;0,700;1,400;1,700&display=swap');
     </style>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      
      <div id="home">
        <div id="nav">
          <div id="nleft">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Products</a>
          </div>

          <div id="centertag"><a href="#">Haven & Home</a></div>

          <div id="nright">
            <a href="#">Our journey</a>
          </div>
        </div>

        <div id="hero">
          <div id="sustain">
            <h5>01.</h5>
            <h3>Sustainability.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
            <div  id="susimagewrapper" >
              <img src='https://images.unsplash.com/photo-1730407787420-a23fcbc7dbe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'></img>

            </div>
          </div>

          <div  id="dreamS">
            <img src='https://cdn.pixabay.com/photo/2023/09/27/21/39/furniture-8280352_1280.jpg'></img>
            <h1 id="heading"><span>Your</span><br></br>Dream Space <br /><span> Awaits</span></h1>
            <div id="circleimg"></div>
          </div>

          <div id="visit">
            <div id="circle">
              <i className="fa-solid fa-arrow-down"></i>
            </div>
            <h4>Visit our gallery.</h4>
          </div>
        </div>
      </div>

      <div id="motive">
        <h3>Our <br></br>Design<br></br>Philosophy</h3>
        <p>
          Lorem Ipsum is simply dummy text of the <span id="onespan"></span>printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          <span id="twospan"></span> specimen book. It has survived <span id="threespan"></span>not only five centuries.
          when an unknown printer took a galley of type and scrambled it to make a type 
           specimen book. It has survived not only fit  It 
        </p>
      </div>

      <div id="pictures">
        <div id='imgbox'>
        <h1> Our <br></br> Creations</h1>
         <img id='imgb1' src='https://i.pinimg.com/564x/8c/fb/00/8cfb005afd286feaa4f64690999b5094.jpg'></img>
         <img id='imgb2' src='https://i.pinimg.com/564x/59/de/84/59de84a886081835594a5e2346c431d4.jpg' ></img>
         <img id='imgb3' src='https://i.pinimg.com/564x/26/2b/04/262b04db51ca82d455953c0f77dc245e.jpg' ></img>
         <img id='imgb4' src='https://i.pinimg.com/564x/02/ec/80/02ec80a4b8cdd4aa40e114255cfdb4b2.jpg' ></img>
         <img id='imgb5' src='https://i.pinimg.com/736x/bc/6b/9f/bc6b9f4aee741d27d0502044f32659e1.jpg' ></img>
         <img id='imgb6' src='https://i.pinimg.com/564x/d3/b9/02/d3b902038bba5f2bbdeb480852792a50.jpg' ></img>
         <img id='imgb7' src='https://i.pinimg.com/564x/4e/30/c6/4e30c64bec09613ea082d3c99bd9cf64.jpg' ></img>

        </div>
      </div>

  <div id='heromotive'>
      <div id="motive1st">
      <img src='https://i.pinimg.com/564x/49/42/a1/4942a188fe2c4ed87351f6cb82d9b41f.jpg'></img>

        <h3>Our <br></br>motive</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
           specimen book. It has survived not only five centuries. 
        </p>
        

      </div>
      <div id="motive2nd">
       <h3>Our <br></br>motive</h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type  
        </p>
        <img src='https://img.freepik.com/free-photo/vase-wooden-sideboard-table_53876-105830.jpg?ga=GA1.1.808026991.1726639246&semt=ais_hybrid'></img>

        </div>
 </div>

      <div id="banner">
        <div id="bimg"></div>
        <h1>Haven & Home </h1>
      </div>

      <div id="future">
      <img id='fimg'></img>

       <div id='photos'>
        <img id='img1' src='https://i.pinimg.com/564x/a4/de/a4/a4dea414e8eed0d69f37149622e074d2.jpg'></img>
         <img id='img2' src='https://i.pinimg.com/564x/2c/9c/b2/2c9cb29a4c615a46e22414e229660046.jpg'></img>
         <img id='img3' src='https://i.pinimg.com/564x/6e/c6/fb/6ec6fbdc0e2b8e7b7fb07ae2c722f866.jpg' ></img>
         <img id='img4' src='https://i.pinimg.com/564x/77/7d/3d/777d3de6000049d4d00447e321d7b064.jpg' ></img>
         <img id='img5' src='https://i.pinimg.com/564x/bc/ba/58/bcba58f2e7683404329539107c0109e0.jpg' ></img>
         <img id='img6' src='https://i.pinimg.com/564x/b4/15/3b/b4153b3867bee28dc46c66630b7f9b81.jpg' ></img>
         <img id='img7' src='https://i.pinimg.com/564x/0e/46/b3/0e46b34a7a08dfd8aa092f6eb76cf133.jpg'></img>


        </div>
     <div id="ftext">
          <h1>Think of the future</h1>
          <button>Join the movement</button>
        </div>
      </div>

    </div>
    
  );
}

export default App;
