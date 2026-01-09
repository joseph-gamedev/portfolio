// Resume Data (Redesigned for Project-Centric Layout)
const resumeData = {
    header: {
        name: "Joseph Fernandez",
        title: "Gameplay Programmer"
    },
    summary: "Developer with 10+ years of experience in game programming, real-time visualization, and XR applications.",
    socials: [
        { label: "GitHub", url: "https://github.com/joseph-gamedev" },
        { label: "LinkedIn", url: "https://linkedin.com/in/joseph-fernandez" },
        { label: "Email", url: "mailto:joseph@example.com" }
    ],
    // Categories: Featured, Gameplay, Tools, Prototypes
    projectCategories: [
        {
            id: "featured",
            title: "Featured",
            description: "Highlights of my best technical work.",
            projectIds: ["shadows", "lab-designer"]
        },
        {
            id: "gameplay",
            title: "Gameplay Programming",
            description: "Core mechanics, AI, and systems design.",
            projectIds: ["shadows", "platformer", "rhythm"]
        },
        {
            id: "tools",
            title: "Tools Development",
            description: "Pipelines, editors, and workflow optimization.",
            projectIds: ["lab-designer", "importer"]
        }
    ],
    projects: {
        "shadows": {
            id: "shadows",
            title: "Shadows of Dawn",
            tagline: "High-fidelity Multiplayer FPS",
            category: "Gameplay Programming",
            company: "NextPlayerGames",
            date: "2024 - Present",
            image: "assets/shadows_of_dawn.png",
            tools: ["Unreal Engine 5", "C++", "Steamworks", "Replication Graph"],
            links: [
                { label: "Steam Page", url: "#" },
                { label: "Tech Blog", url: "#" }
            ],
            overview: "A high-fidelity multiplayer FPS featuring replicated weapon systems and inventory management. I was responsible for the core networking architecture and weapon handling.",
            contributions: [
                "Engineered high-fidelity replicated weapon systems in Unreal Engine, comprising server-authoritative hit detection, recoil, and ammo management.",
                "Architected robust multiplayer session management and real-time synchronization systems for seamless player interactions using the Common Session Subsystem.",
                "Developed scalable replicated inventory systems and network-optimized AI behaviors, ensuring consistency across clients.",
                "Optimized network bandwidth usage by implementing custom replication conditions for high-frequency actors."
            ],
            gallery: []
        },
        "lab-designer": {
            id: "lab-designer",
            title: "3D Lab Designer",
            tagline: "Real-time Architectural Visualization Tool",
            category: "Tools Development",
            company: "BuMo3DR",
            date: "2016 - 2024",
            image: "assets/lab_designer.png",
            tools: ["Unreal Engine 5", "C++", "Python", "AWS SDK", "USD"],
            links: [
                { label: "Product Page", url: "#" }
            ],
            overview: "Comprehensive architectural visualization tool for real-time lab design across PC and XR platforms. It allows non-technical users to design complex lab layouts in minutes.",
            contributions: [
                "Ported project from Unreal Engine 4 to Unreal Engine 5, leveraging Nanite and Lumen for photorealism.",
                "Implemented interactions for room creation, wall structures, and dynamic presentation tools based on constructive solid geometry (CSG).",
                "Engineered systems for object connections, traffic management, and lab automation simulation.",
                "Designed custom file formats with C++ parsers for project saving and loading, integrated with AWS S3.",
                "Developed Unreal Editor utilities (Blutility) to automate asset import pipelines."
            ],
            gallery: []
        },
        "platformer": {
            id: "platformer",
            title: "Time-Warp Platformer",
            tagline: "2D Puzzle Platformer Mechanic",
            category: "Gameplay Programming",
            company: "Personal Project",
            date: "2023",
            image: "",
            tools: ["Unity", "C#", "Shader Graph"],
            links: [],
            overview: "A prototype focusing on a 'rewind' mechanic allowing players to reverse time for specific objects.",
            contributions: [
                "Implemented a circular buffer system to record object states (position, velocity, animation) for time reversal.",
                "Created custom shaders to visualize the 'time warp' effect using stencil buffers."
            ],
            gallery: []
        },
        "rhythm": {
            id: "rhythm",
            title: "Beat Slayer",
            tagline: "Rhythm-based Combat Prototype",
            category: "Gameplay Programming",
            company: "Game Jam",
            date: "2022",
            image: "",
            tools: ["Unreal Engine 4", "Blueprints", "FMOD"],
            links: [],
            overview: "A combat game where attacks must sync with the music beat.",
            contributions: [
                "Integrated FMOD for precise beat detection and extracting BPM data at runtime.",
                "Designed the input system to allow for 'perfect', 'good', and 'miss' timing windows."
            ],
            gallery: []
        },
        "importer": {
            id: "importer",
            title: "Universal Mesh Importer",
            tagline: "Runtime Asset Import Plugin",
            category: "Tools Development",
            company: "Personal Tool",
            date: "2021",
            image: "",
            tools: ["C++", "Assimp", "Unreal Engine"],
            links: [{ label: "GitHub", url: "#" }],
            overview: "A plugin to import OBJ/FBX models at runtime without freezing the game thread.",
            contributions: [
                "Wrapped around the Assimp library to parse model data asynchronously.",
                "Generated procedural meshes in Unreal Engine from the parsed data."
            ],
            gallery: []
        }
    }
};

// Start Render Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Categories
    const mainContainer = document.getElementById('main-content');
    if (mainContainer) {
        resumeData.projectCategories.forEach(category => {
            renderCategory(category, mainContainer);
        });
    }

    // 2. Setup Details View (Modal)
    setupDetailView();
    renderSocials();
});

// --- Rendering Logic ---

function renderCategory(category, container) {
    const section = document.createElement('section');
    section.className = 'project-category-section';
    section.innerHTML = `
        <div class="container">
            <h2 class="category-title">${category.title}</h2>
            <div class="category-grid" id="grid-${category.id}">
                <!-- Cards go here -->
            </div>
        </div>
    `;
    container.appendChild(section);

    const grid = section.querySelector(`#grid-${category.id}`);

    category.projectIds.forEach(pid => {
        const project = resumeData.projects[pid];
        if (!project) return;

        const card = document.createElement('article');
        card.className = 'project-card';
        card.onclick = () => openDetailView(pid); // Entire card is clickable

        // Use a placeholder if no image
        let mediaHtml = '';
        if (project.image) {
            mediaHtml = `<div class="card-media"><img src="${project.image}" alt="${project.title}"></div>`;
        } else {
            // Generate a colored placeholder based on title char code
            const hue = project.title.charCodeAt(0) * 10 % 360;
            mediaHtml = `<div class="card-media placeholder" style="background: hsl(${hue}, 60%, 90%); color: hsl(${hue}, 60%, 30%); display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:2rem;">${project.title.charAt(0)}</div>`;
        }

        card.innerHTML = `
            ${mediaHtml}
            <div class="card-content">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-tagline">${project.tagline}</p>
                <div class="card-tags">
                   ${project.tools.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSocials() {
    const container = document.getElementById('socials-container');
    if (!container) return;
    container.innerHTML = resumeData.socials.map(s =>
        `<a href="${s.url}" target="_blank" class="social-link">${s.label}</a>`
    ).join(' / ');
}

// --- Detail View Logic ---

function setupDetailView() {
    // Create the full-screen view container if it doesn't exist
    if (!document.getElementById('detail-view')) {
        const view = document.createElement('div');
        view.id = 'detail-view';
        view.className = 'detail-view';
        view.innerHTML = `
            <div class="detail-content-wrapper">
                <button class="close-detail-btn" onclick="closeDetailView()">✕</button>
                <div id="detail-content"></div>
            </div>
        `;
        document.body.appendChild(view);
    }
}

function openDetailView(projectId) {
    const project = resumeData.projects[projectId];
    if (!project) return;

    const view = document.getElementById('detail-view');
    const content = document.getElementById('detail-content');

    // Populate Content (sska.fyi style)
    content.innerHTML = `
        <header class="detail-header">
            <h1 class="detail-title">${project.title}</h1>
            <p class="detail-subtitle">${project.company} • ${project.date}</p>
        </header>

        <section class="detail-overview">
            <h2>Overview</h2>
            <p>${project.overview}</p>
        </section>

        <section class="detail-tech">
            <h2>Tech Stack</h2>
            <div class="tech-list">
                ${project.tools.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
        </section>

        <div class="detail-links">
             ${project.links.map(l => `<a href="${l.url}" class="detail-link-btn" target="_blank">${l.label} ↗</a>`).join('')}
        </div>

        <section class="detail-contributions">
            <h2>Contributions</h2>
            <ul>
                ${project.contributions.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </section>
        
        <!-- Gallery could go here if we had real images -->
    `;

    view.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Global scope for onclick
window.closeDetailView = function () {
    const view = document.getElementById('detail-view');
    view.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetailView();
});
