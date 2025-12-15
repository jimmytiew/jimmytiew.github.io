const questions = document.getElementsByClassName("question");

Array.from(questions).forEach((q) => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling; // 找到对应的answer
        answer.classList.toggle("active");
    });
});