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

// Khởi tạo active__gallary cho phần tử đầu tiên
pages[currentIndex].classList.add("active__gallary");
