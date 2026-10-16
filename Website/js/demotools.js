console.log("tools loaded")

// Defining whats going to be inside of each tool card with const tools identifier

const demoTools = [
    {
        id: "SQLFormatter",

        card: {
            icon: {
                lucide: "square-code",
                baseClass: "icon",           
                className: "square-code_icon"
            },
            title: "SQL Formatter",
            description: "Format and clean SQL queries instantly for improved readability.",            
            url: "#"
        }
    },

    {
        id: "JSONFormatter",

        card: {
            icon: {
                lucide: "braces",
                baseClass: "icon",           
                className: "json_icon"
            },
            title: "JSON Formatter & Validator",
            description: "Format, validate and inspect JSON data with clear error detection.",            
            url: "#"
        }
    },

    {
        id: "LogAnalyser",

        card: {
            icon: {
                lucide: "file-search",
                baseClass: "icon",           
                className: "file_icon"
            },
            title: "Log Analyser",
            description: "Analyse log files to quickly identify errors, warnings and important events.",            
            url: "#"
        }
    },

    {
        id: "CSVDataChecker",

        card: {

            icon: {
                lucide: "table",
                baseClass: "icon",
                className: "csv_icon"
        },
            title: "CSV Data Checker",
            description:
            "Inspect CSV data for missing values, duplicates and common data-quality issues.",
            url: "#"
        }
    }];

    // section for creating and filtering tool cards //

function createDemoToolCard(tool){
    const card = document.createElement("article");
    card.classList.add("demo-tool-card");

    // ICON

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("tool-icon");

    const iconBox = document.createElement("div");

    iconBox.classList.add(
        "demo-tool-icon",
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

    // BUTTON
    const button =  document.createElement("button");
    button.classList.add("demo-tool-button");
    button.textContent = "View tool";

       // BUILD CONTENT
    card.append (
        iconBox,
        title,
        description,
        button
    );

    return card;
}

function renderDemoTools(demoToolsList, container){
    container.innerHTML = "";

    demoToolsList.forEach((tool) => {
        const card = createDemoToolCard(tool);

        container.append(card);
    });

    lucide.createIcons();
};


// PROJECTS PAGE

const demoToolsContainer =
    document.getElementById("demo-tools-grid");

if (demoToolsContainer) {
    renderDemoTools(
        demoTools,
        demoToolsContainer
    );
}
