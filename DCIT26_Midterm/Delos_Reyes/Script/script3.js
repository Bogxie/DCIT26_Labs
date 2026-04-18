const resumes = [
    {
        label: "Educational Background",
        content: [
            "Primary: Punta Elementary Schhol (SY: 2013-2014)",
            "Secondar: Tanza National Trade School (SY: 2019-2018)",
            "Senior High: Tanza National Trade School (SY: 2018-2020)"
        ]
    },
    {
        label: "Experience",
        content: [
            "Developed a student and subject management system using Java (1 week)",
            "Created an e-portfolio using Bootstrap (1 month)",
            "Built an e-portfolio without using frameworks (1 week)",
            "Developed a capstone prototype using React (almost 6 months)"
        ]
    },
    {
        label: "Skills",
        content: [
            "Vibe coding",
            "Html",
            "Css",
            "Javascript",
            "React"
        ]
    }
]

let accordionHtml = "";

resumes.forEach((resume) => {
    accordionHtml += `
        <div class="accordion-item">
            <button class="accordion">${resume.label}<span class="arrow">▼</span> </button>
            <div class="panel">
                <ul>
                 ${resume.content.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
})

const accordion = document.querySelector('.Accordion-container');
accordion.innerHTML = accordionHtml;

accordion.addEventListener('click', (e) => {

    const button = e.target.closest('.accordion');
    if (!button) return;

    button.classList.toggle('active');

    const panel = button.nextElementSibling;

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});

