
//loading page animation
function PageTransition(){
 var t1 = gsap.timeline();
    t1.to(".loading-screen",{
            duration:1.2,
            width:"100%",
            left:"0%",
            ease:"Expo.easeInOut"
    });
    t1.to(".loading-screen",{
        duration:1,
        width:"100%",
        left:"100%",
        ease:"Expo.easeInOut",
        delay:0.3
    });

    t1.set(".loading-screen",{left:"-100%"});

}

//page content animation
function ContentAnimation(){
    var t2 = gsap.timeline();
    t2.from(".animate-this",{duration:1,y:30,opacity:0,stagger:0.4,delay:0.2});
}

// delay function when loading render
function delay(n){
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    })
}


//barba control js

$(function(){
    barba.init({
        sync:true,
        transitions:[
            {
                async leave(data){
                    const done = this.async();
                    PageTransition();
                    await delay(1000);
                    done();
                },
                async enter(data){
                    ContentAnimation();
                },
                async once(data){
                    ContentAnimation();
                }
            },
        ]
    })
});