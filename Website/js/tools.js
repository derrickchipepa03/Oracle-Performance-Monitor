console.log("tools loaded")

// Defining whats going to be inside of each tool card with const tools identifier

const tools = [
    {
        id: "SQLQueryAnalyser",

        card: {
            icon: {
                lucide: "database",
                baseClass: "icon",           
                className: "database_icon"
            },
            title: "SQL Query Analyser",
            description: "Analyse SQL queries to identify potential performance issues, inefficient patterns and opportunities for optimisation.",            
            technologies: ["SQL", "Python", "Database"],
            categories: ["database"],
            image: "../images/ai-business-assistant.png",
            status: "In Development",
            featured: true,
        },

        modal: {
            title: "SQL Query Analyser",
            description: "Analyse SQL queries to identify potential performance issues, inefficient patterns and opportunities for optimisation.",
            problem: "Poorly written SQL can cause slow application performance, unnecessary database load and inefficient resource usage. Identifying these issues manually can be time-consuming, particularly with larger queries.",
            solution: "The SQL Query Analyser examines SQL statements and highlights potentially inefficient patterns, providing clear recommendations that can help improve query structure and performance.",
            features: [
                "SQL query analysis",
                "Performance issue detection",
                "Inefficient pattern detection",
                "Query complexity analysis",
                "Optimisation recommendations",
                "Readable analysis results"
            ],
            technologies: [
                "Python",
                "SQL",
                "JavaScript",
                "FastAPI"
            ],
            categories: ["ai"],
        }
    },

    {
        id: "LogAnalyser",

        card: {
            icon: {
                lucide: "file-code",
                baseClass: "icon",           
                className: "file-code_icon"
            },
            title: "Log Analyser",
            description: "Analyse application and server logs to identify errors, warnings and recurring operational problems.",            
            technologies: ["Python", "Logs", "Automation"],
            categories: ["automation", "infrastructure"],
            image: "../images/workflow-automation-platform.png",
            status: "In Development",
            featured: true,
        },

        modal: {    
            title: "Log Analyser",
            description: "Analyse application and server logs to quickly identify errors, warnings and recurring operational problems.",
            problem: "Application and server logs can contain thousands of entries, making it difficult to manually identify important errors, repeated failures and patterns affecting system reliability.",
            solution: "The Log Analyser processes log data, identifies important events and groups recurring issues so that problems can be investigated more quickly.",
            features: [
                "Log file analysis",
                "Error detection",
                "Warning detection",
                "Recurring issue detection",
                "Error frequency analysis",
                "Log filtering",
                "Summary generation"
            ],
            technologies: [
                "Python",
                "JavaScript",
                "FastAPI",
                "Regular Expressions"  
            ]
        },
    },

    {
        id: "DatabaseHealthChecker",

        card: {
            icon: {
                lucide: "monitor",
                baseClass: "icon",           
                className: "monitor_icon"
            },
            title: "Database Health Checker",
            description: "Analyse database diagnostic information and identify performance, storage and availability issues.",            
            technologies: ["Oracle", "SQL", "Monitoring"],
            categories: ["database"],
            image: "../images/business-analytics-dashboard.png",
            status: "In Development",
            featured: true
        },

        modal: {
            title: "Database Health Checker",
            description: "Analyse database diagnostic information to identify performance, storage and availability issues.",
            problem: "Database problems can develop across multiple areas including storage, sessions, waits, blocking and resource utilisation. Reviewing these areas individually can make health checks slow and inconsistent.",
            solution: "The Database Health Checker analyses database diagnostic information and presents important findings through a simple health report with warnings and recommended areas for investigation.",
            features: [
                "Database health overview",
                "Storage utilisation checks",
                "Session analysis",
                "Blocking session detection",
                "Performance warning detection",
                "Database wait analysis",
                "Health score",
                "Recommended actions"
            ],
            technologies: [
                "Oracle",
                "SQL",
                "Python",
                "FastAPI"
            ]
        }   
    }];

// Definitions relevant to the specific oidentifies in my html file for the modals //
const toolCards = document.querySelectorAll(".tool-card");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalProblem = document.getElementById("modal-problem");
const modalSolution = document.getElementById("modal-solution");
const modalFeatures = document.getElementById("modal-features");
const modalTechnologies = document.getElementById("modal-technologies");
const modalTags = document.getElementById("modal-tags");
const alltool = document.getElementById("all-tool");
const aitool = document.getElementById("AIBusinessAssistant");
const automationtool = document.getElementById("WorkflowAutomationPlatform");
const analyticstool = document.getElementById("BusinessAnalyticsDashboard");
const featuredtools = document.getElementById("featured-tools");
const grid = document.getElementById("tools-grid");
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

// section for creating and filtering tool cards //

function createtoolCard(tool){
    const card = document.createElement("article");
    card.classList.add("tool-card");

    // IMAGE
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("tool-card__image");

    const image = document.createElement("img");

    image.src = tool.card.image;
    image.alt = `${tool.card.title} preview`;

    // CONTENT
    const content = document.createElement("div");
    content.classList.add("tool-card__content");

    // ICON

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("tool-icon");

    const iconBox = document.createElement("div");

    iconBox.classList.add(
        tool.card.icon.baseClass,
        tool.card.icon.className
    );  

    const icon = document.createElement("i");

    icon.setAttribute(
        "data-lucide",
         tool.card.icon.lucide
    );

    iconBox.append(icon); 
    iconContainer.append(iconBox);

    // TITLE
    const title = document.createElement("h3");
    title.textContent = tool.card.title;

    // DESCRIPTION
    const description = document.createElement("p");
    description.classList.add("tool-description");
    description.textContent = tool.card.description;

    // TECHNOLOGIES
    const technologies = document.createElement("div");
    technologies.classList.add("tool-technologies");

    tool.card.technologies.forEach((technology) => {
        const technologyTag = document.createElement("span");
        technologyTag.textContent = technology;
        technologies.append(technologyTag);
    });


    // FOOTER
    const footer = document.createElement("div");
    footer.classList.add("tool-card__footer");

    // STATUS
    const status = document.createElement("div");
    status.classList.add("tool-card__status");

    const statusDot = document.createElement("span");
    statusDot.classList.add("status-dot");

    const statusText = document.createElement("span");
    statusText.textContent = tool.card.status;

    status.append(statusDot, statusText);

    const toolTop = document.createElement("div");
    toolTop.classList.add("tool-card__top");

    toolTop.append(
        iconContainer,
        status
    );

    // BUTTON
    const button =  document.createElement("button");
    button.classList.add("tool-button");
    button.textContent = "View tool";

    // OPEN MODAL
    button.addEventListener("click", () => {
        openModal(tool.id);
    });

    // IMAGE + STATUS
imageContainer.append(
    image
);

    // BUILD FOOTER
    footer.append(button);

       // BUILD CONTENT
    content.append (
        toolTop,
        title,
        description,
        technologies,
        footer
    );

     // BUILD CARD
    card.append(imageContainer, content);

    return card;
}

function rendertools(toolsList, grid){
    grid.innerHTML = "";

    

    toolsList.forEach((tool) => {
        const card = createtoolCard(tool);

        grid.append(card);
    });

    lucide.createIcons();
};


// PROJECTS PAGE

const toolsContainer =
    document.getElementById("tools-grid");

if (toolsContainer) {
    rendertools(
        tools,
        toolsContainer
    );
}

// HOME PAGE

const featuredtoolsContainer =
    document.getElementById("tool-grid");

if (featuredtoolsContainer) {
    const featuredtools = tools.filter(
        (tool) => tool.card.featured
    );

    rendertools(
        featuredtools,
        featuredtoolsContainer
    );

}

// FILTER
const filterButtons = document.querySelectorAll(".tool-filter-button");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        const filter = button.dataset.filter;

        // active
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // filter tools
        const filteredtools = 
        filter === "all"
        ? tools
        : tools.filter((tool) =>
            tool.card.categories.includes(filter)
        );
        
        // Render into tools container
        if (toolsContainer) {
            rendertools(
                filteredtools,
                toolsContainer
            );
        }
    });
});

//dropdown to filter projects logic
const urlParams = new URLSearchParams(window.location.search);
const urlFilter = urlParams.get("filter");
const toolFromURL = urlParams.get("tool");

if (urlFilter) {
    const matchingButton = document.querySelector(
        `.tool-filter-button[data-filter="${urlFilter}"]`   
    );

    if (matchingButton) {
        matchingButton.click();
    }
}

if (toolFromURL) {
    openModal(toolFromURL);
}

// Open/Close card section //

// Function for open card
function openModal(toolId) {
    const tool = tools.find((tool) => tool.id === toolId);

    if (!tool) {
        console.error('Tool "${toolKey}" was not found.')
        return;
    }
    
    const modal = tool.modal;

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

tool.card.categories.forEach((category) => {
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
