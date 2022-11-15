
//변수선언

const slide_w = document.querySelector('.slide-wrapper');
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const l_btn = document.querySelector('.prev');
const r_btn = document.querySelector('.next');


const img_n = slide_img.length;  //목록개수
console.log(img_n);
const img_w = 300; //이미지 한장 너비
const m = 30; //마진값
const s_con = 3; //보여줄 개수

let count = 0;

//감싸는 부모요소의 너비를 구하기
slide.style.width = (img_w+m)*img_n - m + 'px';
//1620=(300+30)*5-30px

//함수작성
function mslide(n){
  slide.style.left = (img_w+m)* -n  + 'px'; //
  count = n;
  console.log(slide.style.left); //-330, -660..
  console.log(count);
}

//3초마다 mslide를 호출하여 자동으로 움직이게 함.
var Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
},3000);


//이전버튼 클릭시 해당 방향으로 움직이게
l_btn.addEventListener('click', function(){
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n - s_con);
  }
});

//다음버튼
r_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
});


const slide_w2 = document.querySelector('.slide-wrapper2');
const slide2 = document.querySelector('.slide2');
const slide_img2 = document.querySelectorAll('.slide2 li');
const img_w2 = 960;
const s_con2 = 1;
const l_btn2 = document.querySelector('.prev2');
const r_btn2 = document.querySelector('.next2');
var Timer = setInterval(function(){
  if(count < img_n-s_con2){
    mslide2(count+1);
  }else{
    mslide2(0);
  }
},3000);
slide2.style.width = (img_w2+m)*img_n - m + 'px';
function mslide2(n2){
  slide2.style.left = (img_w2+m)* -n2  + 'px'; //
  count = n2;
}

l_btn2.addEventListener('click', function(){
  if(count > 0){
    mslide2(count-1);
  }else{
    mslide2(img_n - s_con2);
  }
});

//다음버튼
r_btn2.addEventListener('click', function(){
  if(count < img_n-s_con2){
    mslide2(count+1);
  }else{
    mslide2(0);
  }
});