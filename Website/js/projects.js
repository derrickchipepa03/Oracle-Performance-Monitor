console.log("Projects loaded")

// Defining whats going to be inside of each project card with const projects identifier

const projects = [
    {
        id: "ClientOperationsPlatform",

        card: {
            icon: {
                lucide: "briefcase-business",
                baseClass: "icon",           
                className: "operations_icon"
            },
            title: "Smart Client Operations Platform",
            description: "An integrated business management platform designed to automate customer enquiries, quotations, bookings and administrative workflows.",            
            technologies: ["Python", "FastAPI", "SQL"],
            categories: ["automation"],
            image: "../images/ai-business-assistant.png",
            status: "In Development",
            featured: true,
        },

        modal: {
            title: "Smart Client Operations Platform",
            description: "A business operations system designed to streamline customer management, automate administrative processes and connect important workflows in one platform.",
            problem: "Many service businesses manage customer enquiries, quotations, appointments and invoices using separate spreadsheets, emails and manual processes. This can result in duplicated work, missed information and inefficient communication.",
            solution: "The Smart Client Operations Platform brings these processes together into a centralised system, allowing businesses to manage customer information, generate quotations, schedule work and automate routine communications.",
            features: [
                "Customer enquiry management",
                "Customer information database",
                "Automated quotation generation",
                "Booking and appointment scheduling",
                "Job and task tracking",
                "Invoice generation",
                "Automated email notifications",
                "Business operations dashboard"
            ],
            technologies: [
                "Python",
                "FastAPI",
                "JavaScript",
                "SQL",
                "REST APIs",
                "HTML",
                "CSS"
            ],
        }
    },

    {
        id: "AutomatedReportingSystem",

        card: {
            icon: {
                lucide: "chart-column-increasing",
                baseClass: "icon",           
                className: "reporting_icon"
            },
            title: "Automated Reporting System",
            description: "A reporting platform designed to automatically process business data, calculate key metrics and generate recurring reports.",            
            technologies: [ "Python", "Pandas", "Analytics"],
            categories: ["analytics"],
            image: "../images/workflow-automation-platform.png",
            status: "In Development",
            featured: true,
        },

        modal: {    
            title: "Automated Reporting System",
            description: "An automated reporting solution designed to replace repetitive spreadsheet processing and manual report creation with a streamlined reporting workflow.",
            problem: "Businesses often spend hours collecting information from multiple spreadsheets, calculating performance metrics, creating charts and preparing recurring management reports.",
            solution: "The Automated Reporting System processes business data, performs calculations, generates visualisations and produces structured reports that can be created and distributed automatically.",
            features: [
                 "Excel and CSV data imports",
                "Automated data processing",
                "Data validation",
                "KPI calculations",
                "Interactive charts",
                "PDF and Excel report generation",
                "Scheduled reporting",
                "Automated email delivery"
            ],
            technologies: [
                "Python",
                "Pandas",
                "FastAPI",
                "JavaScript",
                "SQL",
                "Data Visualisation"
            ]
        },
    },

    {
        id: "DocumentProcessingSystem",

        card: {
            icon: {
                lucide: "files",
                baseClass: "icon",           
                className: "processing_icon"
            },
            title: "Intelligent Document Processing System",
            description: "A document automation platform designed to extract, validate and organise information from invoices, forms and business records.",            
            technologies: ["Python", "Automation", "SQL"],
            categories: ["software"],
            image: "../images/business-analytics-dashboard.png",
            status: "In Development",
            featured: true
        },

        modal: {
            title: "Intelligent Document Processing System",
            description: "An end-to-end document processing platform designed to reduce manual data entry and streamline document-driven business workflows.",
            problem: "Businesses frequently receive large volumes of documents that require manual review, information extraction, validation and data entry. These repetitive activities can be time-consuming and prone to errors.",
            solution: "The Intelligent Document Processing System automates document intake, extracts relevant information, validates important fields and organises the results into structured records for review or further processing.",
            features: [
                 "Document intake and uploads",
                "Automatic information extraction",
                "Field validation",
                "Missing information detection",
                "Document review interface",
                "Approval workflows",
                "Structured data storage",
                "Data export and integration"
            ],
            technologies: [
                 "Python",
                "FastAPI",
                "JavaScript",
                "SQL",
                "Document Processing",
                "REST APIs"
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

// FILTER
let activeFilter = "all";
let searchTerm = "";

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".project-filter-button");

function updateProjects () {

    const filteredProjects = projects.filter((project) => {

        // Does it match the selected category?
        const matchesFilter = 
        activeFilter === "all" ||
        project.card.categories.includes(activeFilter);

        // Everything we want the search bar to search
        const searchableText = [
            project.card.title,
            project.card.description,
            ...project.card.technologies,
            ...project.card.categories
        ]
        .join(" ")
        .toLowerCase();

        // Does it match what the user typed?
        const matchesSearch =
            searchTerm === "" ||
            searchableText.includes(searchTerm);

            return matchesFilter && matchesSearch;

    });

    if (projectsContainer) {
        renderProjects(
            filteredProjects,
            projectsContainer
        );
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        activeFilter = button.dataset.filter;

        // active
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        updateProjects();
    });
});

if (searchInput) {
    searchInput.addEventListener("input", () => {

        searchTerm = searchInput.value
        .trim()
        .toLowerCase();

        updateProjects();
    });
}

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
