// console.log("test"); //연결되었는지 확인

window.onload = function(){
    if(window.scrollY > 500){
        gsap.to('to-top', 0.6,{
            x:0
        });

    }else{
        gsap.to('to-top', 0.6,{
            x:100
        });
    }
}








// document(바디영역안에 있는) querySelector(선택자 가져올 건데) 
// search_bar 안에 있는 것들을 const타입의 searchE1 변수에 담기
const searchE1 = document.querySelector('.search_bar');
console.log(searchE1);

const searchInputE1 = searchE1.querySelector('input');
console.log(searchInputE1);

//클릭했을 때를 사용하기 위해
searchE1.addEventListener('click' , function(){
    searchInputE1.focus();
})

//커서가 깜빡일 때 focus
searchInputE1.addEventListener('focus',function(){
    // 클래스 추가
    searchE1.classList.add('focused');

    searchInputE1.setAttribute('placeholder','Search')
})

//focus가 빠진 상태 blur
searchInputE1.addEventListener('blur',function(){
    searchE1.classList.remove('focused');
    searchInputE1.setAttribute('placeholder','');
})


//배지 js
const badgeE1 = document.querySelector('#top_layout .badges ');
// console.log(badgeE1);

window.addEventListener('scroll',_.throttle(function(){
    // scrollY좌표가 500초과일 때
    if(window.scrollY > 500){
        //배지 숨기기
        // badgeE1.style.display = 'none';

        // gsap(요소, 지속시간, {옵션});
        gsap.to(badgeE1, 0.6, {
            opacity:0,
            display:'none'
        });
        //상담버튼 보이기 to top
        gsap.to('#to-top', 0.6,{
            x:0

        })
    }else{
        //배지 보이기
        // badgeE1.style.display = 'block';

        // gsap(요소, 지속시간, {옵션});
        gsap.to(badgeE1, 0.6, {
            opacity:1,
            display:'block'
        });
        //상단버튼 숨기기 to top
        gsap.to('#to-top', 0.6,{
            x:100
        })
    }
},300));

// _.throttle(함수,시간);


//헤더의 끝--------------------------------------------------------------------- 

const fadeEls = document.querySelectorAll('#body_layout .fade--in');
console.log(fadeEls);

// forEach(변수, index);

fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEl);
    // console.log(index);
    
    gsap.to(fadeEl,1,{
        opacity:1,
        delay:(index+1)*0.7
    });
});


// SWIPER기능을 사용하기위한 생성자 호출, new Swiper('선택자', {옵션});
new Swiper(".notice--line .swiper-container",{
    //
    direction : 'vertical',
    //자동 슬라이드
    autoplay:true,
    //슬라이드가 끝난 후 처음부터 반복
    loop:true
});


//notice--------------------------------------------------------------------------------------------


new Swiper(".promotion .swiper-container",{   
    // 화면에 보여줄 슬라이드 개수
    slidesPerView : 3,
    // 슬라이드 사이 여백
    spaceBetween : 10,
    //1번이미지가 가운데보여주는 옵션
    centeredSlides : true,
    
    autoplay:{
        delay : 3000
    },
    loop:true,
    pagination:{ //페이지 번호 사용 여부
        el: '.swiper-pagination', //페이지 번호 요소 선택자
        clickable:true //사용자의 페이지 번호 요소 제어
    },
    navigation:{
        prevEl: '.swiper-button-prev', //이전번호 선택자
        nextEl: '.swiper-button-next' //다음번호 선택자
    }
});

//슬라이드 배너 스와이퍼--------------------------------------------------------------------------------------------

new Swiper('#awards .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
    }
})



const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);

const promotionToggleBtn = document.querySelector('.toggle-promotion');
// console.log(promotionToggleBtn);

//true 숨기기, false 보이기
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion =!isHidePromotion;
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');

    }else{
        //보임처리
        //classList. 가지고온 클래스 확인
        promotionEl.classList.remove('hide');
    }
});
// -----------------------------------------------------------------------------

//범위 랜덤 함수
function random(min, max){
    //.toFiexd()를 통해반환된 문자 데이터를
    //parseFloat()을 통해 소수점을 가지는 숫자데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector,delay, size){
    //gsap.to(요소,시간,옵션)
    gsap.to(selector,1,{
        y:20,
        repeat:-1,
        yoyo:true,
        ease : Power1.easeInOut,
        delay:random(0,delay)
    });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

// ----------------------------------------------------------------------------

const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEl);

// forEach로 꺼내올 변수 spyEl
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소
        triggerHook: .8 //다음 요소를 포여줄 텀
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

// --------------------------------------------------------------------------------

// to-top

const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function(){
    gsap.to(window, 0.7,{
        scrollTo:0
    });
});