var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div'),
    intensity: 0.3,
    image1: 'images/Img21.jpg',
    image2: 'images/Img22.jpg',
    displacementImage: 'distortion/10.jpg'
});
var mynewAnimation = new hoverEffect({
    parent: document.querySelector('.my-div1'),
    intensity: 0.3,
    image1: 'images/Img21.jpg',
    image2: 'images/Img22.jpg',
    displacementImage: 'distortion/1.jpg'
});

var mynewAnimation1 = new hoverEffect({
    parent: document.querySelector('.my-div2'),
    intensity: 0.3,
    image1: 'images/Img21.jpg',
    image2: 'images/Img22.jpg',
    displacementImage: 'distortion/4.png'
});

var mynewAnimation2 = new hoverEffect({
    parent: document.querySelector('.my-div4'),
    intensity: 0.3,
    image1: 'images/Img21.jpg',
    image2: 'images/Img22.jpg',
    displacementImage: 'distortion/fluid.jpg'
});

var mynewAnimation3 = new hoverEffect({
    parent: document.querySelector('.my-div3'),
    intensity: 0.3,
    image1: 'images/Img21.jpg',
    image2: 'images/Img22.jpg',
    displacementImage: 'distortion/8.jpg'
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