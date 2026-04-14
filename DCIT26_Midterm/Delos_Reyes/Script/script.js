const techStack = [
    { image: './Images/Html.png', label: "HTML" },
    { image: './Images/Css.png', label: "CSS" },
    { image: './Images/Javascript.png', label: "JAVASCRIPT" },
    { image: './Images/React.png', label: "React" }
]

let techStackHtml = ''

techStack.forEach((tech, i) => {
    techStackHtml += `
    <div class="tech-stack-img">
        <img src="${tech.image}" alt="Tech-stack-${i + 1}">
        <div class="tech-stack-label">
        <p>${tech.label}</p>
        </div>
    </div>`;
});

document.querySelector('.tech-stack').innerHTML = techStackHtml;
