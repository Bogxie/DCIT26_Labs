
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-btn");

const Projects = [
    { projects: './Images/Project-1.png', description: "DCIT26 Laboratory 2" },
    { projects: './Images/Project-2.png', description: "DCIT26 Laboratory 3" },
    { projects: './Images/Project-3.png', description: "DCIT26 Laboratory 3" },
    { projects: './Images/Project-4.png', description: "Sana ito maging Capstone" },
]

let projectHtml = "";

Projects.forEach((project, i) => {

    projectHtml += `
    <div class="card">
        <img src="${project.projects}" alt="Project-${i + 1}">
        <div class="card-description">
        <p>${project.description}</p>
        </div>
    </div>`;
});
const container =  document.querySelector('.project-container');
container.innerHTML = projectHtml;

container.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === "IMG") {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        const description = e.target.nextElementSibling.innerText;
        captionText.innerHTML = description;
    }

});

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


