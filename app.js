let box_h = document.querySelector(".box_h"),
  box_m = document.querySelector(".box_m"),
  box_s = document.querySelector(".box_s"),
  btn_start = document.querySelector(".btn_start"),
  btn_stop = document.querySelector(".btn_stop"),
  btn_reset = document.querySelector(".btn_reset"),
  box_recorde = document.querySelector(".box_recorde"),
  btn_record = document.querySelector(".btn_record"),
  btn_clear_record = document.querySelector(".btn_claer_list_record"),
  btn_dark_mood = document.querySelector(".btn_chenge_mood");
var stopwatchV;
function stopwatch() {
  box_s.value++,
    60 == box_s.value
      ? (box_m.value++, (box_s.value = 0))
      : 60 == box_m.value && (box_h.value++, (box_m.value = 0));
}
btn_start.addEventListener("click", () => {
  stopwatchV = setInterval(stopwatch, "17");
}),
  btn_stop.addEventListener("click", () => {
    clearInterval(stopwatchV);
  }),
  btn_reset.addEventListener("click", function () {
    clearInterval(stopwatchV),
      (box_s.value = "00"),
      (box_m.value = "00"),
      (box_h.value = "00");
  }),
  btn_record.addEventListener("click", () => {
    box_s.value > 0
      ? ((box_recorde.innerHTML +=
          "<li class='li-style'><span class='style-btn'> رکورد جدید </span></br> <span class='style-btn b-ms'>میلی ثانیه: " +
          box_s.value +
          "</span> <span class='style-btn b-mm'> ثانیه : " +
          box_m.value +
          "</span><span class='style-btn b-mh'>دقیقه : " +
          box_h.value +
          "</span></li>"),
        (btn_clear_record.style.display = "block"))
      : alert("دوست عزیز برای ثبت رکورد باید تایمر را شروع کنید.");
  }),
  btn_clear_record.addEventListener("click", function () {
    1 == confirm("آیا مطمئن هستید می خواهید لیست رکورد ها را پاک کنید ؟؟؟") &&
      ((box_recorde.innerHTML = " "),
      (btn_clear_record.style.display = "none"));
  }),
  btn_dark_mood.addEventListener("click", function () {
    document.body.classList.toggle("body-dark"),
      "حالت شب" === btn_dark_mood.innerHTML
        ? (this.innerHTML = "حالت روز")
        : (btn_dark_mood.innerHTML = "حالت شب");
  });
