// gallary
const pages = document.querySelectorAll(".gallary__item");
let currentIndex = 0;
let isClickable = true;
const clickDelay = 1500;

$(".filter__gallary").click(function (event) {
  if (!isClickable) return; // Ngăn chặn click nếu clickDelay đang hoạt động
  isClickable = false; // Đặt isClickable thành false để bắt đầu delay

  const nextIndex = (currentIndex + 1) % pages.length; // Tính toán nextIndex và quay lại đầu nếu vượt quá số phần tử

  $(".gallary__item.active__gallary").addClass("disappearonleft");
  $(pages[currentIndex]).one("webkitAnimationEnd", function (event) {
    this.classList.remove("disappearonleft", "active__gallary");
    pages[nextIndex].classList.add("active__gallary");
    currentIndex = nextIndex; // Cập nhật currentIndex thành nextIndex
    isClickable = true; // Cho phép click lại sau khi animation kết thúc
  });

  pages[nextIndex].classList.add("appearonright");
  $(pages[nextIndex]).one("webkitAnimationEnd", function (event) {
    this.classList.remove("appearonright");
  });

  setTimeout(() => {
    isClickable = true; // Đảm bảo cho phép click sau khoảng delay
  }, clickDelay);
});
// setInterval(() => {
//   $(".filter__gallary").click();
// }, 4000);
// Khởi tạo active__gallary cho phần tử đầu tiên
pages[currentIndex].classList.add("active__gallary");
// //////////////////

  ////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////
//header
  $(window).scroll(function (e) {
    if (parseInt($(document).scrollTop()) >= 135) {
      // console.log("ok");
      $(".header").addClass("scrolltop");
    } else {
      $(".header").removeClass("scrolltop");
    }
    ////////////////////////////////////////////////////////////////////////
  
    
  });

//////////////
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", 
  scrollTrigger: {
    trigger: ".horizontalt",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontalt").offsetWidth,
  },
});
/////////////////////////////////////////////
// infor
gsap.to(".info__number", {
  rotateX: 360,
  stagger: 1,
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "bounce.in",
});
gsap.from(".philosophy__h2heading", {
  duration: 2,
  opacity: 0,
  scale: 1.5,
  ease: "bounce",
  stagger: {
    each: 0.5,
    from: "start",
  },
  scrollTrigger: {
    trigger: ".philosophy__h2heading",

    // scrub: true, // Làm mượt chuyển động khi cuộn
  },
});
// //////////////////

gsap.from(".vision__body", {
  duration: 2,
  x: -200,
  opacity: 0,
  delay: 2,
  scrollTrigger: {
    trigger: ".philosophy__h2heading",

    toggleActions: "play reverse play reverse", // Các hành động khi scroll
    scrub: true, // Làm mượt chuyển động khi cuộn
  },
});

gsap.from(".mission__body", {
  duration: 2,
  x: 200,
  opacity: 0,
  delay: 2,
  scrollTrigger: {
    trigger: ".philosophy__h2heading",

    toggleActions: "play reverse play reverse", // Các hành động khi scroll
    scrub: true, // Làm mượt chuyển động khi cuộn
  },
});
gsap.from(".cl1", {
  x: 50,
  scale: 1.5,
  duration: 4,
  scrollTrigger: {
    trigger: ".intro__filter",
    start: "top bottom", // Khi phần tử .cloud bắt đầu vào view
    end: "bottom top", // Khi phần tử .cloud rời khỏi view
    toggleActions: "play reverse play reverse", // Các hành động khi scroll
    scrub: true, // Làm mượt chuyển động khi cuộn
  },
});
gsap.to(".cloud ", {
  stagger: 1,
  y: 400,
  duration: 1,
  scrollTrigger: {
    trigger: ".intro__filter",
    start: "top bottom", // Khi phần tử .cloud bắt đầu vào view
    end: "bottom top", // Khi phần tử .cloud rời khỏi view
    toggleActions: "play reverse play reverse", // Các hành động khi scroll
    scrub: true, // Làm mượt chuyển động khi cuộn
  },
});

//////////////////////////
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".randomtext").forEach((element) => {
  let originalText = element.dataset.value; // Lấy văn bản gốc từ thuộc tính data-value

  element.onmouseover = function (event) {
    let iterations = 0;
    const interval = setInterval(() => {
      let newText = ""; // Chuỗi mới sau khi thay đổi

      // Tạo chuỗi ngẫu nhiên từng ký tự cho đến khi đủ độ dài
      for (let i = 0; i < originalText.length; i++) {
        if (i < Math.floor(iterations)) {
          newText += originalText[i]; // Giữ nguyên ký tự từ văn bản gốc
        } else {
          newText += letters[Math.floor(Math.random() * 26)]; // Chọn ngẫu nhiên một ký tự từ letters
        }
      }

      event.target.innerText = newText; // Gán văn bản mới vào phần tử

      if (iterations >= originalText.length) {
        clearInterval(interval); // Dừng interval khi đã hoàn thành
      }

      iterations += 1 / 3; // Tăng số lần lặp
    }, 100);
  };
});
// setInterval(function() {
//   $(".randomtext").trigger('mouseover')
// },10000)
///////////////////////
//reason
$(".reason__list").slideUp();
$(".btn__reason").click(function () {
  $(".reason__list").slideToggle();
  
});


  $(".desc__hide").slideUp();
  
  $(".mation__heading").click(function() {
    $(this).next().slideToggle();
    console.log("ok");
  });



////////////////////////////////
///from
//contact
$(".contact__content").slideUp();
$(".contact__info").click(function () {
  $(this).next().slideToggle();
  $(this).find(".contact__icon").text(function(index, text) {
    return text === "+" ? "-" : "+";
});



})


///////////////////

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

