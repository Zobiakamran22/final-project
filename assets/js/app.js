let cartoon = $ ('.cartoon')
let pogo = $('.pogo')
let aboutLayer= $ ('.aboutlayer')
let aboutSection= $ ('.about-section')
let course= $ ('.course')
let courseSection= $ ('.course-section')
let teacher= $ ('.teacher')
let teacherSection= $ ('.teacher-section')
let party= $ ('.party')
let partyLayer= $ ('.party-layer')

let contact= $ ('.contact')
let contactList= $ ('.contact-list')



console.log(pogo);


cartoon.on('click', function () {
    $('.pogo').toggle(400)
})

aboutLayer.on('click', function () {
    $('.about-section').toggle(400)
})

course.on('click', function () {
    $('.course-section').toggle(400)
   
})


teacher.on('click', function () {
    $('.teacher-section').toggle(400)
})


party.on('click', function () {
    $('.party-layer').toggle(800)
})


contact.on('click', function () {
    $('.contact-list').toggle(800)
})


let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue =parseInt(valueDisplay.getAttribute
  ("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue +=1;
    valueDisplay.textContent = startValue;
    if(startValue== endValue){
      clearInterval(counter)
    }
  },duration);
});











    $('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
      nav:true,
      dots:false,
      autoplay:true,
      items:3,
      pullDrag:false,
    //   autoWidth:false,
      autoplayHoverPause:true,
     
    
      responsive:{
        0:{
            items:4,
            nav:true,
            loop:true,
            // autoWidth:false,
           
        },
        600:{
            items:4,
            nav:true,
            loop:true,
            // autoWidth:false,
         
           
        },
        1000:{
            
            items:4,
            nav:true,
            loop:true,
            // autoWidth:false,
         
        
        },

        1300:{
          items:4,
          nav:true,
          loop:true,
        }

        
    }
  })