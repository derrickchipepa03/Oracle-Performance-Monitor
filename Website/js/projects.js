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
            categories: ["ai"],
            image: "../images/ai-business-assistant.png",
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
            categories: ["automation"],
            image: "../images/workflow-automation-platform.png",
            status: "In Development",
            featured: true,
        },

        modal: {    
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
            categories: ["analytics"],
            image: "../images/business-analytics-dashboard.png",
            status: "In Development",
            featured: true
        },

        modal: {
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
const modalTags = document.getElementById("modal-tags");
const allProject = document.getElementById("all-project");
const aiProject = document.getElementById("AIBusinessAssistant");
const automationProject = document.getElementById("WorkflowAutomationPlatform");
const analyticsProject = document.getElementById("BusinessAnalyticsDashboard");
const featuredProjects = document.getElementById("featured-projects");
const grid = document.getElementById("projects-grid");
const header = document.getElementById("site-header");

// header scroll
let lastScrollY = window.scrollY;
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    if (currentScrollY <= headerHeight) {
        header.classList.add("header-visible");
        lastScrollY = currentScrollY;
        return;
    }
    if (currentScrollY < lastScrollY) {
        header.classList.add("header-visible");
    }

    else if (currentScrollY > lastScrollY) {
        header.classList.remove("header-visible");
    }

    lastScrollY = currentScrollY;
});

// section for creating and filtering project cards //

function createProjectCard(project){
    const card = document.createElement("article");
    card.classList.add("project-card");

    // IMAGE

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("project-card__image");

    const image = document.createElement("img");

    image.src = project.card.image;
    image.alt = `${project.card.title} preview`;

    // CONTENT

    const content = document.createElement("div");
    content.classList.add("project-card__content");

    // ICON

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("project-icon");

    const iconBox = document.createElement("div");

    iconBox.classList.add(
        project.card.icon.baseClass,
        project.card.icon.className
    );  

    const icon = document.createElement("i");

    icon.setAttribute(
        "data-lucide",
         project.card.icon.lucide
    );

    iconBox.append(icon); 
    iconContainer.append(iconBox);

    // TITLE
    const title = document.createElement("h3");
    title.textContent = project.card.title;

    // DESCRIPTION
    const description = document.createElement("p");
    description.classList.add("project-description");
    description.textContent = project.card.description;

    // TECHNOLOGIES
    const technologies = document.createElement("div");
    technologies.classList.add("project-technologies");

    project.card.technologies.forEach((technology) => {
        const technologyTag = document.createElement("span");
        technologyTag.textContent = technology;
        technologies.append(technologyTag);
    });


    // FOOTER
    const footer = document.createElement("div");
    footer.classList.add("project-card__footer");

    // STATUS
    const status = document.createElement("div");
    status.classList.add("project-card__status");

    const statusDot = document.createElement("span");
    statusDot.classList.add("status-dot");

    const statusText = document.createElement("span");
    statusText.textContent = project.card.status;

    status.append(statusDot, statusText);

    const projectTop = document.createElement("div");
    projectTop.classList.add("project-card__top");

    projectTop.append(
        iconContainer,
        status
    );

    // BUTTON
    const button =  document.createElement("button");
    button.classList.add("project-button");
    button.textContent = "View Project";

    // OPEN MODAL
    button.addEventListener("click", () => {
        openModal(project.id);
    });

    // IMAGE + STATUS
imageContainer.append(
    image
);

    // BUILD FOOTER
    footer.append(button);

       // BUILD CONTENT
    content.append (
        projectTop,
        title,
        description,
        technologies,
        footer
    );

     // BUILD CARD
    card.append(imageContainer, content);

    return card;
}

function renderProjects(projectsList, grid){
    grid.innerHTML = "";

    

    projectsList.forEach((project) => {
        const card = createProjectCard(project);

        grid.append(card);
    });

    lucide.createIcons();
};


// PROJECTS PAGE

const projectsContainer =
    document.getElementById("projects-grid");

if (projectsContainer) {
    renderProjects(
        projects,
        projectsContainer
    );
}

// HOME PAGE

const featuredProjectsContainer =
    document.getElementById("project-grid");

if (featuredProjectsContainer) {
    const featuredProjects = projects.filter(
        (project) => project.card.featured
    );

    renderProjects(
        featuredProjects,
        featuredProjectsContainer
    );

}

// FILTER
const filterButtons = document.querySelectorAll(".project-filter-button");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        const filter = button.dataset.filter;

        // active
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // filter projects
        const filteredProjects = 
        filter === "all"
        ? projects
        : projects.filter((project) =>
            project.card.categories.includes(filter)
        );
        
        // Render into projects container
        if (projectsContainer) {
            renderProjects(
                filteredProjects,
                projectsContainer
            );
        }
    });
});

//dropdown to filter projects logic
const urlParams = new URLSearchParams(window.location.search);
const urlFilter = urlParams.get("filter");
const projectFromURL = urlParams.get("project");

if (urlFilter) {
    const matchingButton = document.querySelector(
        `.project-filter-button[data-filter="${urlFilter}"]`   
    );

    if (matchingButton) {
        matchingButton.click();
    }
}

if (projectFromURL) {
    openModal(projectFromURL);
}
// Open/Close card section //

// Function for open card
function openModal(projectId) {
    const project = projects.find((project) => project.id === projectId);

    if (!project) {
        console.error('Project "${projectKey}" was not found.')
        return;
    }
    
    const modal = project.modal;

    // turn each of the card content identifiers into text
    modalTitle.textContent = modal.title;
    modalDescription.textContent = modal.description;
    modalProblem.textContent = modal.problem;
    modalSolution.textContent = modal.solution;

    // FEATURES
    modalFeatures.innerHTML = "";

    modal.features.forEach((feature) => {
        const listItem = document.createElement("li")
        listItem.textContent = feature;
        modalFeatures.appendChild(listItem);
    });

    // TECHNOLOGIES
    modalTechnologies.innerHTML = "";

    modal.technologies.forEach((tech) => {
        const technologyTag = document.createElement("span");
        technologyTag.textContent = tech;
        modalTechnologies.appendChild(technologyTag);
    });

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // TAGS
    modalTags.innerHTML = "";

project.card.categories.forEach((category) => {
    const tagElement = document.createElement("span");
    tagElement.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    modalTags.appendChild(tagElement);
});

}

// Function for closing card
function closeModal() {
    if (!modalOverlay) {
        return;
    }
    modalOverlay.classList.add("hidden");
    document.body.style.overflow = "";
}

if (closeButton) {
    closeButton.addEventListener("click", closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener("click", (event) => {
        if (event.target == modalOverlay) {
            closeModal();
        }
    });
}

// add event listener so when user presses escape on keyboard, function close modal is executed and closes the card.
document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        closeModal();
    }
});


// lucide.createIcons();
