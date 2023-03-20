// 검색창제어
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