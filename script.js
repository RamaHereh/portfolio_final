// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // بيمنع الإرسال الفعلي

      // هون ممكن تحطي منطق إرسال بيانات فعلي لاحقًا (مثل استخدام Fetch)

      alert("شكراً لتواصلك! تم إرسال رسالتك بنجاح.");

      // إعادة تعيين الحقول
      form.reset();
    });
  }
});
