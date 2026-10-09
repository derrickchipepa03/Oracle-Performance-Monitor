console.log("tools loaded")

// Defining whats going to be inside of each tool card with const tools identifier

const tools = [
    {
        id: "AutomationAnalyser",

        card: {
            icon: {
                lucide: "wand-sparkles",
                baseClass: "icon",           
                className: "automation_icon"
            },
            title: "Automation Opportunity Analyser",
            description: "Describe a repetitive business process and discover where automation could save time, reduce manual work and improve efficiency.",            
            technologies: ["JavaScript", "Automation", "Analytics"],
            categories: ["automation"],
            image: "../images/ai-business-assistant.png",
            status: "In Development",
            featured: true,
        },

        modal: {
            title: "Automation Opportunity Analyser",
            description: "Analyse repetitive business processes and identify potential opportunities for automation.",
            problem: "Businesses often spend significant time on repetitive administrative processes without knowing which steps could be automated or how much time those processes consume.",
            solution: "The Automation Opportunity Analyser evaluates how a process currently works, estimates its manual workload and identifies areas where software automation may improve the workflow.",
            features: [
                "Business process analysis",
                "Manual workload calculation",
                "Estimated annual process cost",
                "Automation potential assessment",
                "Workflow analysis",
                "Automation recommendations",
                "Potential time-saving estimates",
                "Personalised automation enquiry"
            ],
            technologies: [
                "JavaScript",
                "Python",
                "FastAPI",
                "Automation"
            ],
            demoUrl: "automation-analyser.html"
        }
    },

    {
        id: "SpreadsheetAnalyser",

        card: {
            icon: {
                lucide: "table-properties",
                baseClass: "icon",           
                className: "spreadsheet_icon"
            },
            title: "Smart Spreadsheet Analyser",
            description: "Analyse Excel and CSV data to uncover useful insights, identify data-quality issues and discover opportunities for automation.",            
            technologies: ["Python","Pandas","Excel"],
            categories: ["data-analytics"],
            image: "../images/workflow-automation-platform.png",
            status: "In Development",
            featured: true,
        },

        modal: {    
            title: "Smart Spreadsheet Analyser",
            description: "A spreadsheet analysis tool designed to transform raw business data into useful insights while identifying common data-quality problems.",
            problem: "Businesses frequently depend on spreadsheets containing inconsistent formatting, duplicate records, missing values and large amounts of information that can be difficult to analyse manually.",
            solution: "The Smart Spreadsheet Analyser examines uploaded spreadsheet data, identifies potential data-quality issues and generates useful summaries to help businesses understand their information and identify repetitive processes that could be automated.",
            features: [
                "Excel and CSV file upload",
                "Automatic data structure analysis",
                "Duplicate record detection",
                "Missing value identification",
                "Data-quality assessment",
                "Statistical summaries",
                "Charts and visualisations",
                "Analysis results export"
            ],
            technologies: [
                "Python",
                "Pandas",
                "FastAPI",
                "JavaScript",
                "HTML",
                "CSS" 
            ]
        },
    },

    {
        id: "DocumentAnalyser",

        card: {
            icon: {
                lucide: "scan-text",
                baseClass: "icon",           
                className: "document_icon"
            },
            title: "Document Workflow Analyser",
            description: "Analyse business documents to identify important information, detect missing details and explore document automation opportunities.",            
            technologies: ["Python", "Documents", "Automation"],
            categories: ["documents"],
            image: "../images/business-analytics-dashboard.png",
            status: "In Development",
            featured: true
        },

        modal: {
            title: "Document Workflow Analyser",
            description: "A document analysis tool that examines business documents, identifies important information and demonstrates opportunities for automated document processing.",
            problem: "Businesses often spend significant time manually reviewing invoices, forms and other documents, extracting important information and transferring it into spreadsheets or internal systems.",
            solution: "The Document Workflow Analyser processes uploaded documents, identifies relevant fields and highlights how document information could be extracted, validated and organised automatically.",
            features: [
                "Business document upload",
                "Document content analysis",
                "Important field identification",
                "Missing information detection",
                "Structured data extraction",
                "Document processing summaries",
                "Automation opportunity recommendations",
                "Structured data export"
            ],
            technologies: [
                "Python",
                "FastAPI",
                "JavaScript",
                "Document Processing",
                "HTML",
                "CSS"
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
let activeFilter = "all";
let searchTerm = "";

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".tool-filter-button");

function updateTools () {

    const filteredTools = tools.filter((tool) => {

        // Does it match the selected category?
        const matchesFilter = 
        activeFilter === "all" ||
        tool.card.categories.includes(activeFilter);

        // Everything we want the search bar to search
        const searchableText = [
            tool.card.title,
            tool.card.description,
            ...tool.card.technologies,
            ...tool.card.categories
        ]
        .join(" ")
        .toLowerCase();

        // Does it match what the user typed?
        const matchesSearch =
            searchTerm === "" ||
            searchableText.includes(searchTerm);

            return matchesFilter && matchesSearch;

    });

    if (toolsContainer) {
        rendertools(
            filteredTools,
            toolsContainer
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

        updateTools();
    });
});

if (searchInput) {
    searchInput.addEventListener("input", () => {

        searchTerm = searchInput.value
        .trim()
        .toLowerCase();

        updateTools();
    });
}

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
