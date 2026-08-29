console.log("Projects loaded")

// Defining whats going to be inside of each project card with const projects identifier

const projects = [
    {
        id: "AIBusinessAssistant",

        card: {
            icon: {
                lucide: "database",
                baseClass: "icon",           
                className: "database_icon"
            },
            title: "AI Business Assistant",
            description: "An intelligent AI-powered assistant designed to automate repetitive business tasks, improve productivity and reduce manual work across an organisation.",            
            technologies: ["Python", "JavaScript", "AI"],
            status: "In Development",
            featured: true,
        },

        modal: {
            title: "AI Business Assistant",
            description: "An intelligent AI-powered assistant designed to automate repetitive business tasks, improve productivity and reduce manual work across an organisation.",
            problem: "Small businesses spend hours every week answering repetitive emails, processing documents, creating reports and searching for information. These tasks reduce productivity and take time away from higher-value work.",
            solution: "The AI Business Assistant uses large language models and intelligent workflows to automate common business tasks while remaining easy to use through a modern web interface.",
            features: [
                "AI-powered chat assistant",
                "Document summarisation",
                "Email drafting",
                "Task automation",
                "User authentication",
                "Admin dashboard",
                "Analytics",
                "Secure API integration",
            ],
            technologies: [
                "Python",
                "FastAPI",
                "JavaScript",
                "HTML",
                "CSS",
                "PostgreSQL",
                "OpenAI API",
                "Docker"
            ],
            categories: ["ai"],
        }
    },

    {
        id: "WorkflowAutomationPlatform",

        card: {
            icon: {
                lucide: "file-code",
                baseClass: "icon",           
                className: "file-code_icon"
            },
            title: "Workflow Automation Platform",
            description: "A platform designed to automate repetitive business processes by connecting applications, APIs and internal workflows through a modern visual interface.",            
            technologies: ["Python", "API", "Integration"],
            status: "In Development",
            featured: true,
        },

        modal: {    
            category: ["automation"],
            title: "Workflow Automation Platform",
            description: "A platform designed to automate repetitive business processes by connecting applications, APIs and internal workflows through a modern visual interface.",
            problem: "Businesses often rely on manual processes to transfer information between systems, leading to wasted time, inconsistent data and avoidable human error.",
            solution: "The Workflow Automation Platform enables businesses to create automated workflows that connect applications, trigger actions and manage business processes without repetitive manual intervention.",
            features: [
                "Visual workflow builder",
                "API integrations",
                "Email automation",
                "Scheduled workflows",
                "Conditional logic",
                "Error handling",
                "Notifications",
                "Workflow History"
            ],
            technologies: [
                "Python",
                "JavaScript",
                "FastAPI",
                "REST APIs",
                "Docker",
                "PostgreSQL",
                "Redis"   
            ]
        },
    },

    {
        id: "BusinessAnalyticsDashboard",

        card: {
            icon: {
                lucide: "monitor",
                baseClass: "icon",           
                className: "monitor_icon"
            },
            title: "Business Analytics Dashboard",
            description: "A modern analytics platform providing interactive dashboards, KPI monitoring and reporting to help businesses make informed decisions from their operational data.",            
            technologies: ["Python", "Dashboards", "Data"],
            status: "In Development",
            featured: true
        },

        modal: {
            category: ["analytics"],
            title: "Business Analytics Dashboard",
            description: "A modern analytics platform providing interactive dashboards, KPI monitoring and reporting to help businesses make informed decisions from their operational data.",
            problem: "Business information is often scattered across multiple systems, making it difficult to identify trends, monitor performance and make timely decisions.",
            solution: "The Business Analytics Dashboard centralises data into a single platform where users can monitor performance through interactive charts, reports and custom dashboards.",
            features: [
                "Interactive dashboards",
                "KPI monitoring",
                "Custom reports",
                "Data visualisation",
                "Export to PDF/Excel",
                "User roles",
                "Alerts",
                "Responsive design"
            ],
            technologies: [
                "Python",
                "JavaScript",
                "Chart.js",
                "HTML",
                "CSS",
                "PostgreSQL",
                "FastAPI"
            ]
        }   
    }];

// Definitions relevant to the specific oidentifies in my html file for the modals //
const projectCards = document.querySelectorAll(".project-card");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalProblem = document.getElementById("modal-problem");
const modalSolution = document.getElementById("modal-solution");
const modalFeatures = document.getElementById("modal-features");
const modalTechnologies = document.getElementById("modal-technologies");
const allProject = document.getElementById("all-project");
const aiProject = document.getElementById("AIBusinessAssistant");
const automationProject = document.getElementById("WorkflowAutomationPlatform");
const analyticsProject = document.getElementById("BusinessAnalyticsDashboard");
const projectFilterButtons = document.querySelectorAll(".project-sections");
const Container = document.getElementById("Projects-container");
const featuredProjects = document.getElementById("featured-projects");

// section for creating and filtering project cards //

function createProjectCards(project){
    const projectContainer = document.getElementById("Projects-container");
}

function renderProjects(projectsList, container){
    const featuredProjects = projects.filter((project) => project.card);
    renderProjects(projects);
};

function filterProjects(category){
    if (filterButtons === "all") {
        renderProjects(projects);
    }
    if (filterButtons === "ai") {
        const filteredProjects = projects.filter((project) => project.modal.categories.includes("ai"));
        renderProjects(filteredProjects);
    }
    if (filterButtons === "automation") {
        const filteredProjects = projects.filter((project) => project.modal.categories.includes("automation"));
        renderProjects(filteredProjects);
    }
    if (filterButtons === "analytics") {
        const filteredProjects = projects.filter((project) => project.modal.categories.includes("analytics"));
        renderProjects(filteredProjects);
    }
};

// event listeners for if someone clicks filter buttons //
projectFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterProjects(projects, filter);
    });
});

// Open/Close card section //

// Function for open card
function openModal(projectId) {
    const project = projects.find((project) => project.id === projectId);

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
    modalTechnologies.innerHTML = "";

    // For features as they will be in line format
    project.features.forEach((feature) => {
        const listItem = document.createElement("li")
        listItem.textContent = feature;
        modalFeatures.appendChild(listItem);
    });

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // For technologies as they will be in line format
    project.technologies.forEach((tech) => {
        const listItem = document.createElement("li")
        listItem.textContent = tech;
        modalTechnologies.appendChild(listItem);
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
        const projectId = card.dataset.project;
        console.log(projectId);
        openModal(projectId);
  });
});

// add event listiner so when user clicks card it closes the card
closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
    if (event.target == modalOverlay) {
        closeModal();
    }
});

// add event listener so when user presses escape on keyboard, function close modal is executed and closes the card.
document.addEventListener("keydown", (event) => {
    if (event.key == "escape") {
        closeModal();
    }
});


// lucide.createIcons();
