var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div'),
    intensity: 0.3,
    image1: 'images/Img21.jpg',
    image2: 'images/Img22.jpg',
    displacementImage: 'distortion/10.jpg'
});

const tl = new TimelineLite({paused:true})
tl.fromTo(".writing",1,{
    opacity:0,
    x:100
},{
    opacity:1,
    x:0
})

const img = document.getElementById("myimg")
img.addEventListener('mouseenter',(e)=>{
    tl.restart();
})
img.addEventListener('mouseleave',(e)=>{
    tl.reverse();
})