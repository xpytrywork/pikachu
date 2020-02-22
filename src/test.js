let n = 1
const string = `
画个皮卡丘给你看
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*::before,*::after{
    box-sizing: border-box;
}
#demo{
    height:65vh;
    background: #FFE600;
}
.skin{
    position: relative;
}
.triangle{
    /* width:10px;
    height: 10px; */
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform:rotate(0deg);
    }
    33%{
        transform:rotate(10deg);
    }
    66%{
        transform:rotate(-10deg);
    }
    100%{
        transform:rotate(0deg);
    }
}
.triangle:hover{
    transform-origin: 50% 100%;
    animation: wave 0.8s infinite;
}
.circle{
    background-color: black;
    position: absolute;
    width: 19px;
    height: 6px;
    border: 1px solid black;
    top:-15px;
    left: -9.5px;
    border-radius: 10px 10px 0 0;
}
.eyeLeft{
    border: 2px solid rgb(0, 0, 0);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
     transform: translateX(-100px); 
    background-color: rgb(46, 46, 46);
} 
.eyeRight{
    border: 2px solid rgb(0, 0, 0);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
     transform: translateX(100px); 
    background-color: rgb(46, 46, 46);
} 
 .eyeLeft::before{
    content: '';
    display: block;/*伪类元素before默认是一个span元素*/
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top: 2px;
    left: 10px;
}
.eyeRight::before{
    content: '';
    display: block;/*伪类元素before默认是一个span元素*/
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top:2px;
    left:10px;
} 
.mouth{
    /*border-color: blue black yellow green;上右下左*/
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -10px;
    z-index: 1;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
    margin-left: -50px;
}
.mouth .up .lip{
    border: 5px solid black; 
    height: 30px;
    width:100px;
    border-top-color: transparent;
    border-right-color: transparent; 
    position: absolute;
    left: 50%;
    background: #FFE600;
}
.mouth .up .lip::before{
    content: '';
    position: absolute;
    display: block;
    width: 11px;
    height: 25px;
    background: #FFE600;
    bottom: 0;
}
.mouth .up .lip.left::before{
    right: -5px;
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0px;
    transform: rotate(15deg) translateX(53px);
    margin-left: -50px;
}
.mouth .up .lip.right::before{
    left: -5px;
}
.mouth .down{
    height: 230px;
    position: absolute;
    top: 15px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .circle1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom:0;
    left: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background:  rgb(155, 0, 10);
    overflow: hidden;
}
.mouth .down .circle1 .circle2{
    /* border: 1px solid green; */
    width: 200px;
    height: 300px;
    position: absolute;
    background: rgb(255, 72, 95);
    bottom: -95px;
    left: 50%;
    border-radius: 50%;
    margin-left: -100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    background: rgb(255, 0, 0);
}
 .face.left{
    transform: translateX(-300px);
    border-radius: 50%;
} 
.face.right{
    transform: translateX(300px);
    border-radius: 50%;
}
.face>img{
   position: absolute;
   top: 50%;
   left: 50%;
}
.face.right>img{
    transform: translateY(180deg);
    transform-origin: 0 0;
}`
demo1.innerHTML = string.substring(0, n)
console.log(n)
let id = setInterval(() => {
    n = n + 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    console.log(n + ':' + string.substring(0, n))
    demo1.innerHTML = string.substring(0, n)
    demo2.innerText = string.substring(0, n)
    demo2.scrollTop = demo2.scrollHeight;
}, 15);