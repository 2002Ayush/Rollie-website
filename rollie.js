function show(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  locoScroll.on("scroll", function (dets) {
    if (dets.direction === "up") {
        document.querySelector("#navbar").style.top = "10%";
    }
    else if (dets.direction == "down") {
        document.querySelector("#navbar").style.top = "-100%";
        document.querySelector("#navbar").style.opacity = "0";
    }
})

  
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  }  
show();

 function enemyAnimation(){
  gsap.to("#enemydiv h1",{
    repeat: -1,
  x: "-100%",
  ease: "linear",
  duration: 6
  })

 }
 enemyAnimation();

  function option(){
    document.querySelector("#option1").addEventListener("click",function(){
      document.querySelector("#video2").style.display = "initial";
      document.querySelector("#option1").style.background = "linear-gradient(to bottom right ,#c268b8 30% , #79A7D3 , #6883BC)";
      document.querySelector("#img3").style.display = "initial";
      document.querySelector("#img1").style.display = "none";
      document.querySelector("#img2").style.display = "none";
      document.querySelector("#option3").style.background = "none";
      document.querySelector("#option2").style.background = "none";
      
    })
  
    document.querySelector("#option2").addEventListener("click",function(){
      document.querySelector("#itemimg1").style.display = "initial";
      document.querySelector("#video2").style.display = "none";
      document.querySelector("#itemimg2").style.display = "none";
      document.querySelector("#option1").style.background = "none";
      document.querySelector("#option2").style.background = "linear-gradient(to bottom right ,#c268b8 30% , #79A7D3 , #6883BC)";
      document.querySelector("#option3").style.background = "none";
      document.querySelector("#img1").style.display = "none";
      document.querySelector("#img2").style.display = "initial";
      document.querySelector("#img3").style.display = "none";
  
    })
  
    document.querySelector("#option3").addEventListener("click",function(){
      document.querySelector("#itemimg2").style.display = "initial";
      document.querySelector("#itemimg1").style.display = "none";
      document.querySelector("#video2").style.display = "none";
      document.querySelector("#option1").style.background = "none";
      document.querySelector("#option3").style.background = "linear-gradient(to bottom right ,#c268b8 30% , #79A7D3 , #6883BC)";
      document.querySelector("#option2").style.background = "none";
      document.querySelector("#img1").style.display = "initial";
      document.querySelector("#img2").style.display = "none";
      document.querySelector("#img3").style.display = "none";
    })
  
  
  }
  option();

 function itemshow(){
  document.querySelector("#top").addEventListener("mouseover",function(){
    document.querySelector("#top").style.height = "70vh";
    document.querySelector("#bottom").style.height = "50vh";
    document.querySelector("#vid1").style.display = "initial";
    document.querySelector("#img1").style.display = "none";

   })
  
   document.querySelector("#top").addEventListener("mouseleave",function(){
    document.querySelector("#top").style.height = "60vh";
    document.querySelector("#bottom").style.height = "60vh";
    document.querySelector("#vid1").style.display = "none";
    document.querySelector("#img1").style.display = "initial";
   })
  
   document.querySelector("#bottom").addEventListener("mouseover",function(){
    document.querySelector("#bottom").style.height = "70vh";
    document.querySelector("#top").style.height = "50vh";
    document.querySelector("#vid11").style.display = "initial";
    document.querySelector("#img11").style.display = "none";
   })
  
   document.querySelector("#bottom").addEventListener("mouseleave",function(){
    document.querySelector("#bottom").style.height = "60vh";
    document.querySelector("#top").style.height = "60vh";
    document.querySelector("#vid11").style.display = "none";
    document.querySelector("#img11").style.display = "initial";
   })
  
   document.querySelector("#top2").addEventListener("mouseover",function(){
    document.querySelector("#top2").style.height = "70vh";
    document.querySelector("#bottom2").style.height = "50vh";
    document.querySelector("#vid2").style.display = "initial";
    document.querySelector("#img2").style.display = "none";
   })
  
   document.querySelector("#top2").addEventListener("mouseleave",function(){
    document.querySelector("#top2").style.height = "60vh";
    document.querySelector("#bottom2").style.height = "60vh";
    document.querySelector("#vid2").style.display = "none";
    document.querySelector("#img2").style.display = "initial";

   })
  
   document.querySelector("#bottom2").addEventListener("mouseover",function(){
    document.querySelector("#bottom2").style.height = "70vh";
    document.querySelector("#top2").style.height = "50vh";
    document.querySelector("#vid22").style.display = "initial";
    document.querySelector("#img22").style.display = "none";
   })
  
   document.querySelector("#bottom2").addEventListener("mouseleave",function(){
    document.querySelector("#bottom2").style.height = "60vh";
    document.querySelector("#top2").style.height = "60vh";
    document.querySelector("#vid22").style.display = "none";
    document.querySelector("#img22").style.display = "initial";
   })
  
   document.querySelector("#top3").addEventListener("mouseover",function(){
    document.querySelector("#top3").style.height = "70vh";
    document.querySelector("#bottom3").style.height = "50vh";
    document.querySelector("#vid3").style.display = "initial";
    document.querySelector("#img3").style.display = "none";
   })
  
   document.querySelector("#top3").addEventListener("mouseleave",function(){
    document.querySelector("#top3").style.height = "60vh";
    document.querySelector("#bottom3").style.height = "60vh";
    document.querySelector("#vid3").style.display = "none";
    document.querySelector("#img3").style.display = "initial";
   })
  
   document.querySelector("#bottom3").addEventListener("mouseover",function(){
    document.querySelector("#bottom3").style.height = "70vh";
    document.querySelector("#top3").style.height = "50vh";
    document.querySelector("#vid33").style.display = "initial";
    document.querySelector("#img33").style.display = "none";
   })
  
   document.querySelector("#bottom3").addEventListener("mouseleave",function(){
    document.querySelector("#bottom3").style.height = "60vh";
    document.querySelector("#top3").style.height = "60vh";
    document.querySelector("#vid33").style.display = "none";
    document.querySelector("#img33").style.display = "initial";
   })
 }
 itemshow();
 
 function gsapanimation(){
  var tl=gsap.timeline();

tl.from("#help>h3",{
  opacity:0,
  x:-30,
  duration:1,
  stagger:0.1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#help>h3",
    scrub: 0.3,
  }
})
.from("#shop>h3",{
  opacity:0,
  x:-25,
  duration:1,
  stagger:0.1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#help>h3",
    scrub: 0.5,
  }
})

gsap.from("#logo",{
    rotateX:100,
    duration:1,
    scrollTrigger: {
      scroller:"#main",
      trigger:"#logo",
      scrub: 0.3,
    }
  })
  
  
 }
 gsapanimation();

 function textAnimation(){
  document.querySelector("#textaa").addEventListener("mouseover",function(){
    document.querySelector("#textaa").style.color = 'white';
    document.querySelector("#textaa").style.scale = '1.1';
    document.querySelector("#photo1").style.scale = '1.1';
    document.querySelector("#photo1").style.borderColor = 'white';
   })
  
   document.querySelector("#textaa").addEventListener("mouseleave",function(){
    document.querySelector("#textaa").style.color = '#fffefe5b';
    document.querySelector("#textaa").style.scale = '1';
    document.querySelector("#photo1").style.scale = '1';
    document.querySelector("#photo1").style.borderColor = 'rgba(255, 255, 255, 0.725)';
   })
  
   document.querySelector("#textaaa").addEventListener("mouseover",function(){
    document.querySelector("#textaaa").style.color = 'white';
    document.querySelector("#textaaa").style.scale = '1.1';
    document.querySelector("#photo2").style.scale = '1.1';
    document.querySelector("#photo2").style.borderColor = 'white';
   })
  
   document.querySelector("#textaaa").addEventListener("mouseleave",function(){
    document.querySelector("#textaaa").style.color = '#fffefe5b';
    document.querySelector("#textaaa").style.scale = '1';
    document.querySelector("#photo2").style.scale = '1';
    document.querySelector("#photo2").style.borderColor = 'rgba(255, 255, 255, 0.725)';
   })
  
   
   document.querySelector("#textaa2").addEventListener("mouseover",function(){
    document.querySelector("#textaa2").style.color = 'white';
    document.querySelector("#textaa2").style.scale = '1.1';
    document.querySelector("#photo3").style.scale = '1.1';
    document.querySelector("#photo3").style.borderColor = 'white';
   })
  
   document.querySelector("#textaa2").addEventListener("mouseleave",function(){
    document.querySelector("#textaa2").style.color = '#fffefe5b';
    document.querySelector("#textaa2").style.scale = '1';
    document.querySelector("#photo3").style.scale = '1';
    document.querySelector("#photo3").style.borderColor = 'rgba(255, 255, 255, 0.725)';
   })
  
   document.querySelector("#textaaa2").addEventListener("mouseover",function(){
    document.querySelector("#textaaa2").style.color = 'white';
    document.querySelector("#textaaa2").style.scale = '1.1';
    document.querySelector("#photo4").style.scale = '1.1';
    document.querySelector("#photo4").style.borderColor = 'white';
   })
  
   document.querySelector("#textaaa2").addEventListener("mouseleave",function(){
    document.querySelector("#textaaa2").style.color = '#fffefe5b';
    document.querySelector("#textaaa2").style.scale = '1';
    document.querySelector("#photo4").style.scale = '1';
    document.querySelector("#photo4").style.borderColor = 'rgba(255, 255, 255, 0.725)';
   })
 }
 textAnimation();

 function springAnimation(){
  const spring = document.querySelector("#spring");
document.querySelector("#photodiv").addEventListener("mousemove", (e) =>{
   let  x = e.pageX;
   let y = e.pageY;

   spring.style.top = y + "px";
   spring.style.left = x + "px";
})
document.querySelector("#photodiv").addEventListener("mouseleave", function (e) {
  document.querySelector("#spring").style.top = `5%`;
  document.querySelector("#spring").style.left = `85%`;
})
 }
 springAnimation();

 function PicAnimation(){
  gsap.from("#pic1",{
    y:-15,
    duration:2,
    repeat:-1,
    ease:Power4
   })
  
   gsap.from("#pic2",{
    y:15,
    duration:2,
    repeat:-1,
    ease:Power4
   })
  
   gsap.from("#pic3",{
    y:15,
    duration:2,
    repeat:-1,
    ease:Power4
   })
  
   gsap.from("#pic4",{
    y:-15,
    duration:2,
    repeat:-1,
    ease:Power4
   })
 }
 PicAnimation();

 function process(){ 
  if( $(window).width() > 500){
    $("body").removeClass("mobile").addClass("desktop");

  }else{
    $("body").removeClass("desktop").addClass("mobile");
  }

}
$(window).resize(function(){
   process()
});

process();