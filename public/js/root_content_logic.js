function selectSubject() {
    const subjects = document.querySelectorAll(".subject")

    for (let i = 0; i < subjects.length; i++) {
        subjects[i].addEventListener("click", function () {
            for (let j = 0; j < subjects.length; j++) {
                subjects[j].classList.remove("selected");
                subjects[j].classList.add("unselected");
            }
            this.classList.remove("unselected");
            this.classList.add("selected");
        });
    }
}

selectSubject();