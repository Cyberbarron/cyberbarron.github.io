const viewBtn = document.querySelector("button")
viewBtn.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});

const typingTest = document.querySelector("header p");
const text = "Frontend Developer | Security Learner";
let index = 0;
typingTest.textContent = "";
function typeWriter() {
    if (index < text.length) {
        typingTest.textContent += text[index];
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();

const sendBtn = document.querySelector("#send-btn");
const successMsg = document.querySelector("#success-msg");
sendBtn.addEventListener("click", () => {
    successMsg.style.display = "block";
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
});
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
sections.forEach(section => observer.observe(section));