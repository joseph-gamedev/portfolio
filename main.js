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
            id: "professional",
            title: "Professional Work",
            description: "Commercial projects delivered for BuMo3DR and Electronic Arts.",
            projectIds: ["adhesive", "proton", "car-config", "packaging", "avant", "industry4", "nasal", "boggle", "nfs-shift", "nfs-hp", "madden", "java-ports"]
        },
        {
            id: "tools",
            title: "Tools Development",
            description: "Plugins and pipeline optimization tools.",
            projectIds: ["video-plugin"]
        },
        {
            id: "personal",
            title: "Personal Projects",
            description: "Open source libraries and experiments.",
            projectIds: ["tiny_vfs", "jobkit"]
        }
    ],
    projects: {
        "tiny_vfs": {
            id: "tiny_vfs",
            title: "tiny_vfs",
            tagline: "Virtual File System",
            category: "Personal Projects",
            company: "Open Source",
            date: "2024",
            image: "./assets/code_systems.png",
            tools: ["C++", "VFS", "Systems"],
            links: [
                { label: "GitHub", url: "https://github.com/joseph-gamedev/tiny_vfs" }
            ],
            overview: "A lightweight, portable virtual file system library designed for game engines.",
            contributions: [
                "Implemented a flexible mounting system for physical directories and archives.",
                "Designed a platform-agnostic file interface for cross-platform compatibility.",
                "Optimized for minimal memory footprint and high read performance."
            ],
            gallery: []
        },
        "jobkit": {
            id: "jobkit",
            title: "jobkit",
            tagline: "C++ Job System",
            category: "Personal Projects",
            company: "Open Source",
            date: "2024",
            image: "./assets/code_systems.png",
            tools: ["C++", "Multithreading", "Fibers"],
            links: [
                { label: "GitHub", url: "https://github.com/joseph-gamedev/jobkit" }
            ],
            overview: "A fiber-based job system for efficient multithreading in game applications.",
            contributions: [
                "Implemented fiber-based task switching for low-overhead concurrency.",
                "Designed a lock-free work-stealing queue for load balancing across cores.",
                "Created a simple API for dependency management and graph execution."
            ],
            gallery: []
        },
        "shadows": {
            id: "shadows",
            title: "Shadows of Dawn",
            tagline: "High-fidelity Multiplayer FPS",
            category: "Gameplay Programming",
            company: "NextPlayerGames",
            date: "2024 - Present",
            image: "./assets/shadows_thumb.jpg",
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
            gallery: [
                "./assets/shadows_HUD.png",
                "./assets/shadows_gameplay_1.gif",
                "./assets/shadows_gameplay_2.gif",
                "./assets/shadows_gameplay_3.gif",
                "./assets/shadows_gameplay_4.gif"
            ]
        },
        "lab-designer": {
            id: "lab-designer",
            title: "3D Lab Designer",
            tagline: "Real-time Architectural Visualization Tool",
            category: "Tools Development",
            company: "BuMo3DR",
            date: "Dec 2016 - June 2024",
            image: "./assets/lab_designer.png",
            tools: ["Unreal Engine 5", "C++", "Python", "AWS SDK", "USD"],
            links: [
                { label: "Product Page", url: "#" }
            ],
            overview: "Comprehensive architectural visualization tool for real-time lab design across PC and XR platforms. It allows non-technical users to design complex lab layouts in minutes.",
            contributions: [
                "Ported project from Unreal Engine 4 to Unreal Engine 5.",
                "Implemented core features: room creation, wall structures, and dynamic presentation tools.",
                "Engineered systems for object connections, traffic management, and lab automation simulation.",
                "Developed advanced drawing tools for complex structures and wall designs.",
                "Created data structures and algorithms for wall, ceiling, and floor manipulation.",
                "Integrated libraries for computational solid geometry and file format imports (Visio, DWG).",
                "Designed custom file formats with parsers for project saving and loading.",
                "Implemented AWS SDK integration for cloud-based file storage and authentication.",
                "Developed Unreal Editor utilities and pipeline tools to enhance workflow efficiency.",
                "Created plugins to improve code reusability across the project.",
                "Implemented undo/redo functionality using design patterns (Command, Memento).",
                "Integrated Photon SDK for cross-platform multiplayer functionality.",
                "Developed modules for simulation, auto-detection of rooms, and floor generation.",
                "Designed and implemented user interface components."
            ],
            gallery: []
        },
        "adhesive": {
            id: "adhesive",
            title: "Adhesive Technology Exploration",
            tagline: "XR Experience",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "Jan 2020 - Oct 2020",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unreal Engine 4", "Vuforia", "Photon Networking"],
            links: [],
            overview: "Interactive VR/AR experience demonstrating adhesive technologies with performance-optimized assets.",
            contributions: [
                "Developed VR and AR versions of the application and implemented code for multiple systems.",
                "Optimized performance on mobile hardware, prioritizing Memory Management for reducing Poly Count and Texture Map memory usage.",
                "Implemented Cross-Platform Multiplayer functionality, 360 Video integration, Hand Motion Controller support, In-game Screenshots, and utilized design patterns (Command, Factory, Message) for structured software architecture."
            ],
            gallery: []
        },
        "proton": {
            id: "proton",
            title: "Proton Center Location Estimator",
            tagline: "AR Utility",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "Nov 2019 - Jan 2020",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unity", "Vuforia"],
            links: [],
            overview: "Designed and developed the entire application based on specific client requirements.",
            contributions: [
                "Designed and developed the entire application based on specific client requirements."
            ],
            gallery: []
        },
        "car-config": {
            id: "car-config",
            title: "VR Car Configurator",
            tagline: "Virtual Reality Product Configurator",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "Oct 2019",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unreal Engine 4", "Photon Networking"],
            links: [],
            overview: "A VR experience allowing users to configure and view cars in a virtual showroom.",
            contributions: [
                "Engineered library and plugin code in C++ and implemented game-play logic using Blueprints.",
                "Led the product development from inception to completion.",
                "Designed and integrated cross-platform and multi-player functionality.",
                "Applied design patterns including Factory and Singleton to enhance code architecture."
            ],
            gallery: []
        },
        "packaging": {
            id: "packaging",
            title: "Packaging Technology Training",
            tagline: "VR/MR Training Application",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "Apr 2019 - May 2020",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unreal Engine 4", "Photon Networking"],
            links: [],
            overview: "Training simulation for packaging technology procedures.",
            contributions: [
                "Created 3D UI interactions, animated interactions, and controllers.",
                "Implemented grab interactions tailored for the Oculus platform.",
                "Integrated cross-platform multiplayer functionality and an in-game replay system.",
                "Implemented design patterns (Command, Factory, Message) to enhance software architecture efficiency."
            ],
            gallery: []
        },
        "avant": {
            id: "avant",
            title: "Avant (VR)",
            tagline: "Enterprise VR Application",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "Apr 2018 - May 2020",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unreal Engine 4", "Photon Networking"],
            links: [],
            overview: "A VR application for enterprise training and visualization.",
            contributions: [
                "Implemented an in-game replay system enabling users to view and save replays of their interactions in XML format, with support for cross-platform multiplayer functionality.",
                "Refactored and ported library code into project plugins to enhance reusability.",
                "Enhanced codebase by rewriting and optimizing various components.",
                "Employed design patterns such as Message, Command, and State Machine to improve software architecture."
            ],
            gallery: []
        },
        "industry4": {
            id: "industry4",
            title: "Industry 4.0 Training (MR)",
            tagline: "Mixed Reality Training",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "Jul 2018 - Nov 2018",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unity", "Photon Networking", "MRTK", "Vuforia SDK"],
            links: [],
            overview: "Mixed Reality application for Industry 4.0 concept training.",
            contributions: [
                "Implemented features such as cross-platform multiplayer, spectator view, and live event synchronization.",
                "Applied various design patterns, including Message, State Machines, Singleton, and Event Listeners.",
                "Integrated gesture recognition and image target detection APIs."
            ],
            gallery: []
        },
        "nasal": {
            id: "nasal",
            title: "Journey through Nasal Cavity",
            tagline: "Medical Simulation",
            category: "Professional Work",
            company: "BuMo3DR",
            date: "",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unreal Engine 4", "Photon Networking"],
            links: [],
            overview: "A medical VR simulation visualizing the nasal cavity.",
            contributions: [
                "Designed and implemented the entire application workflow.",
                "Developed AI algorithms to efficiently simulate the flow of large particles.",
                "Created a custom particle system module with path modifiers and various emitter shapes.",
                "Developed an iPad application for spectator view and scene control."
            ],
            gallery: []
        },
        "video-plugin": {
            id: "video-plugin",
            title: "360 Video VR Plugin",
            tagline: "UE4 Media Plugin",
            category: "Tools Development",
            company: "BuMo3DR",
            date: "",
            image: "./assets/vr_ar_tech.png",
            tools: ["Unreal Engine 4", "Python", "Nvidia Ansel"],
            links: [],
            overview: "Custom plugin for rendering 360 videos in Unreal Engine.",
            contributions: [
                "Created a custom plugin in Unreal Engine 4 to render 360 videos.",
                "Developed scripts in Python to utilize ffmpeg for combining individual frames into videos of desired resolutions.",
                "Automated 360 frame capture using Nvidia Ansel for efficient video creation processes."
            ],
            gallery: []
        },
        "boggle": {
            id: "boggle",
            title: "Boggle (iPhone)",
            tagline: "Mobile Game Port",
            category: "Professional Work",
            company: "Electronic Arts",
            date: "",
            image: "./assets/boggle_1.jpg",
            tools: ["Objective-C", "C++"],
            links: [],
            overview: "iPhone version of the classic Boggle game.",
            contributions: [
                "Fixed multiple crashes and bugs.",
                "Expanded iPhone device support.",
                "Integrated in-house SDKs for enhanced functionality."
            ],
            gallery: [
                "./assets/boggle_1.jpg",
                "./assets/boggle_2.jpg",
                "./assets/boggle_3.png"
            ]
        },
        "nfs-shift": {
            id: "nfs-shift",
            title: "Need for Speed: Shift",
            tagline: "Mobile Racing",
            category: "Professional Work",
            company: "Electronic Arts",
            date: "",
            image: "./assets/nfs_shift_feat.jpg",
            tools: ["Objective-C", "C++"],
            links: [],
            overview: "Mobile adaptation of NFS Shift.",
            contributions: [
                "Improved user interface as per the design.",
                "Fixed several crashes and bugs.",
                "Integrated AD sdk and COPPA sdk."
            ],
            gallery: [
                "./assets/nfs_shift_icon.jpg",
                "./assets/nfs_shift_shot_1.png"
            ]
        },
        "nfs-hp": {
            id: "nfs-hp",
            title: "Need for Speed: Hot Pursuit",
            tagline: "Mobile Racing",
            category: "Professional Work",
            company: "Electronic Arts",
            date: "",
            image: "./assets/nfs_hp_feat.jpg",
            tools: ["Objective-C", "C++"],
            links: [],
            overview: "Mobile adaptation of NFS Hot Pursuit.",
            contributions: [
                "Tested Everyplay SDK for video recording with developer assistance.",
                "Integrated AD SDK and proprietary SDKs to enhance user experience.",
                "Added support for the latest iOS devices.",
                "Implemented user interface changes."
            ],
            gallery: [
                "./assets/nfs_hp_icon.png",
                "./assets/nfs_hp_shot_1.png",
                "./assets/nfs_hp_shot_2.png",
                "./assets/nfs_hp_shot_3.avif",
                "./assets/nfs_hp_shot_4.avif",
                "./assets/nfs_hp_shot_5.avif"
            ]
        },
        "madden": {
            id: "madden",
            title: "Madden NFL (iPad)",
            tagline: "Sports Simulation",
            category: "Professional Work",
            company: "Electronic Arts",
            date: "",
            image: "./assets/madden_main.jpg",
            tools: ["Objective-C", "C++", "iOS SDK"],
            links: [],
            overview: "iPad version of Madden NFL.",
            contributions: [
                "Optimized application performance, fixed bugs, and updated to the latest iOS version.",
                "Expanded iOS device compatibility.",
                "Integrated AD SDK and proprietary SDKs to enhance user experience."
            ],
            gallery: [
                "./assets/madden_main.jpg",
                "./assets/madden_shot_1.webp"
            ]
        },
        "java-ports": {
            id: "java-ports",
            title: "Java Feature Phone Ports",
            tagline: "Legacy Mobile Ports",
            category: "Professional Work",
            company: "Electronic Arts",
            date: "",
            image: "./assets/java_ports_main.jpg",
            tools: ["Java ME"],
            links: [],
            overview: "Porting various EA titles to feature phones.",
            contributions: [
                "Ported EA titles including Sims, NFS Hot Pursuit, FIFA, Bejeweled, and The Simpsons to various Java feature phones."
            ],
            gallery: [
                "./assets/java_port_shot_1.jpg",
                "./assets/java_port_shot_2.jpg",
                "./assets/java_port_shot_3.jpg",
                "./assets/java_port_shot_4.jpg",
                "./assets/java_port_shot_5.jpg",
                "./assets/java_port_shot_6.jpg"
            ]
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
        card.onclick = (e) => {
            // Prevent opening detail view if clicking unrelated, but here the whole card is clickable. 
            // We just let it bubble or handle it. 
            openDetailView(pid);
        };

        // Use a placeholder if no image
        let mediaHtml = '';
        if (project.image) {
            // Check for gallery for slideshow
            const gallery = project.gallery && project.gallery.length > 1 ? JSON.stringify(project.gallery).replace(/"/g, '&quot;') : null;
            const mouseAttrs = gallery ? `onmouseenter="startCardSlideshow(this)" onmouseleave="stopCardSlideshow(this)" data-images="${gallery}"` : '';

            mediaHtml = `<div class="card-media" ${mouseAttrs}><img src="${project.image}" alt="${project.title}"></div>`;
        } else {
            // Use dummy screenshot as requested
            mediaHtml = `<div class="card-media"><img src="./placeholder_thumb.png" alt="${project.title} Placeholder"></div>`;
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
        
        ${project.gallery && project.gallery.length > 0 ? `
            <section class="detail-gallery">
                <h2>Gallery</h2>
                <div class="gallery-container">
                    ${project.gallery.map(item => {
        const isVideo = item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.ogg');
        if (isVideo) {
            return `
                                <video controls preload="metadata" class="gallery-item">
                                    <source src="${item}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            `;
        } else {
            return `<img src="${item}" alt="${project.title} Screenshot" loading="lazy" class="gallery-item">`;
        }
    }).join('')}
                </div>
            </section>
        ` : ''}
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

// Card Slideshow Logic
window.cardSlideshowIntervals = new Map();

window.startCardSlideshow = function (element) {
    const images = JSON.parse(element.getAttribute('data-images'));
    if (!images || images.length < 2) return;

    let index = 0;
    const img = element.querySelector('img');

    // Clear any existing
    if (window.cardSlideshowIntervals.has(element)) clearInterval(window.cardSlideshowIntervals.get(element));

    const interval = setInterval(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        // Preload next? Browser handles it usually
    }, 1200); // 1.2 second switch

    window.cardSlideshowIntervals.set(element, interval);
}

window.stopCardSlideshow = function (element) {
    if (window.cardSlideshowIntervals.has(element)) {
        clearInterval(window.cardSlideshowIntervals.get(element));
        window.cardSlideshowIntervals.delete(element);
    }
    // Reset to primary image if desired. Not strictly necessary but nice.
    const images = JSON.parse(element.getAttribute('data-images'));
    if (images && images.length > 0) {
        const img = element.querySelector('img');
        img.src = images[0];
    }
}
