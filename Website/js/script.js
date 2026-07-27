console.log("Projects loaded")

// Defining whats going to be inside of each project card with const projects identifier

const projects = {
    oracle: {
        title: "",
        description: "",
        problem: "",
        solution: "",
        features: [
            "",
            "",
            ""
        ],
        technologies: "",
    },

    sql: {
        title: "",
        description: "",
        problem: "",
        solution: "",
        features: [
            "",
            "",
            ""
        ],
        technologies: "",
    },

    linux: {
        title: "",
        description: "",
        problem: "",
        solution: "",
        features: [
            "",
            "",
            ""
        ],
        technologies: "",
    }
};

// Definitions relevant to the specific oidentifies in my html file for the modals
const projectCards = document.querySelectorAll(".project-card");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalProblem = document.getElementById("modal-problem");
const modalSolution = document.getElementById("modal-solution");
const modalFeatures = document.getElementById("modal-features");
const modalTechnologies = document.getElementById("modal-technologies");

// Function for open card
function openModal(projectKey) {
    const project = projects[projectKey];

    if (!project) {
        console.error('Project "${projectKey}" was not found.')
        return;
    }
    
    // turn each of the card content identifiers into text
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalProblem.textContent = project.problem;
    modalSolution.textContent = project.solution;
    modalTechnologies.textContent = project.technologies;

    modalFeatures.innerHTML = "";

    // For features as they will be in line format
    project.features.forEach((feature) => {
        const listItem = document.createElement("li")
        listItem.textContent = feature;
        modalFeatures.appendChild(listItem);
    });

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

// Function for closing card
function closeModal() {
    modalOverlay.classList.add("hidden");
    document.body.style.overflow = "";
}

// add event listener for open card
projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        const projectKey = card.dataset.project;
        console.log(projectKey);
        openModal(projectKey);
  });
});

// add event listiner so when user clicks card it closes the card
closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
    if (event.target == modalOverlay) {
        closeModal;
    }
});

// add event listener so when user presses escape on keyboard, function close modal is executed and closes the card.
document.addEventListener("keydown", (event) => {
    if (event.key == "escape") {
        closeModal;
    }
});

lucide.createIcons();
