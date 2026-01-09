// Resume Data (Extracted from provided source)
const resumeData = {
    header: {
        name: "Joseph Fernandez",
        title: "Gameplay Programmer"
    },
    summary: "Developer with 10+ years of experience in game programming, real-time visualization, and XR applications.",
    experience: [
        {
            title: "Gameplay Programmer",
            company: "NextPlayerGames, USA",
            date: "2024 - Present",
            responsibilities: [
                "Implemented replicated weapon mechanics in Unreal Engine, including ammo handling, hit detection, and recoil.",
                "Developed replicated systems for session management, player interactions, and real-time data synchronization.",
                "Developed multiplayer inventory and NPC replication with AI-driven behaviors in Unreal Engine."
            ]
        },
        {
            title: "Lead Game Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "Nov 2021 - Jun 2024",
            responsibilities: [
                "Led teams of 10+ programmers and designers on 5+ projects involving computer graphics and extended reality.",
                "Developed a 3D Lab Designer using Unreal Engine and C++, enabling real-time visualization across PC, AR, VR, and MR.",
                "Engineered core systems for room creation, wall structures, traffic simulation, and lab automation.",
                "Integrated real-time ray tracing, Nanite, and advanced global illumination.",
                "Engineered new tools and frameworks with C++, C#, and Python, enhancing efficiency by 30%.",
                "Mentored more than 5 junior developers through weekly code reviews."
            ]
        },
        {
            title: "Senior Game Programmer",
            company: "BuMo3DR, Chennai, India",
            date: "May 2018 - Oct 2021",
            responsibilities: [
                "Delivered 10+ projects involving 3D computer graphics and XR.",
                "Designed data visualization applications utilizing OGDF.",
                "Integrated ARKit, Vuforia, and MRTK, reducing integration time by 20%.",
                "Wrote cross-platform core libraries to improve code re-usability by 50%."
            ]
        },
        {
            title: "3D Programmer",
            company: "BuMo3DR",
            date: "Mar 2016 - Apr 2018",
            responsibilities: [
                "Created 3D applications focusing on graphics programming and optimization.",
                "Implemented XR features for over 5 client projects."
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "Electronic Arts",
            date: "Jun 2012 - Mar 2014",
            responsibilities: [
                "Worked on iOS Live services for over 10 mobile games.",
                "Enhanced features for Battleship, Monopoly, Need for Speed, and Madden NFL, reducing bug reports by 20%.",
                "Ported EA titles including Sims, NFS Hot Pursuit, and FIFA to over 100+ Java feature phones."
            ]
        }
    ],
    projects: [
        {
            title: "Shadows of Dawn",
            company: "NextPlayerGames",
            date: "2024 - Present",
            description: "A high-fidelity multiplayer FPS featuring replicated weapon systems and inventory management.",
            details: [
                "Engineered high-fidelity replicated weapon systems in Unreal Engine, comprising server-authoritative hit detection, recoil, and ammo management.",
                "Architected robust multiplayer session management and real-time synchronization systems for seamless player interactions.",
                "Developed scalable replicated inventory systems and network-optimized AI behaviors, ensuring consistency across clients."
            ],
            tools: "Unreal Engine, C++, Multiplayer",
            platforms: "PC",
            image: "assets/shadows_of_dawn.png"
        },
        {
            title: "3D Lab Designer",
            company: "BuMo3DR",
            date: "Dec 2016 - June 2024",
            description: "Comprehensive architectural visualization tool for real-time lab design across PC and XR platforms.",
            details: [
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
            tools: "Unreal Engine 4, Unreal Engine 5, Unity, ARKit, Photon Networking, AWS SDK.",
            platforms: "PC, Oculus Rift, Oculus Rift S, Oculus Quest, iPad, and Hololens"
        },
        {
            title: "Adhesive Technology Exploration",
            company: "BuMo3DR",
            date: "Jan 2020 - Oct 2020",
            description: "Interactive VR/AR experience demonstrating adhesive technologies with performance-optimized assets.",
            details: [
                "Developed VR and AR versions of the application and implemented code for multiple systems.",
                "Optimized performance on mobile hardware, prioritizing Memory Management for reducing Poly Count and Texture Map memory usage.",
                "Implemented Cross-Platform Multiplayer functionality, 360 Video integration, Hand Motion Controller support, In-game Screenshots, and utilized design patterns (Command, Factory, Message) for structured software architecture."
            ],
            tools: "Unreal Engine 4, Vuforia, Photon Networking",
            platforms: "PC, Oculus Rift, iPad"
        },
        {
            title: "Proton Center Location Estimator",
            company: "BuMo3DR",
            date: "Nov 2019 - Jan 2020",
            details: [
                "Designed and developed the entire application based on specific client requirements."
            ],
            tools: "Unity, Vuforia",
            platforms: "iPad (AR)"
        },
        {
            title: "VR Car Configurator",
            company: "BuMo3DR",
            date: "Oct 2019",
            details: [
                "Engineered library and plugin code in C++ and implemented game-play logic using Blueprints.",
                "Led the product development from inception to completion.",
                "Designed and integrated cross-platform and multi-player functionality.",
                "Applied design patterns including Factory and Singleton to enhance code architecture."
            ],
            tools: "Unreal Engine 4, Photon Networking",
            platforms: "PC, Oculus Rift S"
        },
        {
            title: "Packaging Technology Training",
            company: "BuMo3DR",
            date: "Apr 2019 - May 2020",
            details: [
                "Created 3D UI interactions, animated interactions, and controllers.",
                "Implemented grab interactions tailored for the Oculus platform.",
                "Integrated cross-platform multiplayer functionality and an in-game replay system.",
                "Implemented design patterns (Command, Factory, Message) to enhance software architecture efficiency."
            ],
            tools: "Unreal Engine 4, Photon Networking",
            platforms: "PC, Oculus Rift"
        },
        {
            title: "Avant (VR)",
            company: "BuMo3DR",
            date: "Apr 2018 - May 2020",
            details: [
                "Implemented an in-game replay system enabling users to view and save replays of their interactions in XML format, with support for cross-platform multiplayer functionality.",
                "Refactored and ported library code into project plugins to enhance reusability.",
                "Enhanced codebase by rewriting and optimizing various components.",
                "Employed design patterns such as Message, Command, and State Machine to improve software architecture."
            ],
            tools: "Unreal Engine 4, Photon Networking",
            platforms: "PC, Oculus Rift"
        },
        {
            title: "Industry 4.0 Training (MR)",
            company: "BuMo3DR",
            date: "Jul 2018 - Nov 2018",
            details: [
                "Implemented features such as cross-platform multiplayer, spectator view, and live event synchronization.",
                "Applied various design patterns, including Message, State Machines, Singleton, and Event Listeners.",
                "Integrated gesture recognition and image target detection APIs."
            ],
            tools: "Unity, Photon Networking, MRTK, Vuforia SDK",
            platforms: "Hololens, iPad"
        },
        {
            title: "Journey through Nasal Cavity",
            company: "BuMo3DR",
            date: "",
            details: [
                "Designed and implemented the entire application workflow.",
                "Developed AI algorithms to efficiently simulate the flow of large particles.",
                "Created a custom particle system module with path modifiers and various emitter shapes.",
                "Developed an iPad application for spectator view and scene control."
            ],
            tools: "Unreal Engine 4, Photon Networking",
            platforms: "PC, Oculus Rift, HTC Vive"
        },
        {
            title: "360 Video VR Plugin",
            company: "BuMo3DR",
            date: "",
            details: [
                "Created a custom plugin in Unreal Engine 4 to render 360 videos.",
                "Developed scripts in Python to utilize ffmpeg for combining individual frames into videos of desired resolutions.",
                "Automated 360 frame capture using Nvidia Ansel for efficient video creation processes."
            ],
            tools: "Unreal Engine 4, Python, Nvidia Ansel",
            platforms: "Oculus Go, Oculus Rift, HTC Vive"
        },
        {
            title: "Virtual Lab (VR)",
            company: "BuMo3DR",
            date: "",
            details: [
                "Developed user interface, animation interactions, and motion controls."
            ],
            tools: "Unity, Photon Networking",
            platforms: "PC, Oculus Rift"
        },
        {
            title: "Go Game (MR)",
            company: "BuMo3DR",
            date: "",
            details: [
                "Designed and implemented game logic and mechanics, creating and fine-tuning the core gameplay elements to ensure a seamless and engaging user experience.",
                "Developed an editor application that allows for the precise placement of virtual objects in real-world locations, enhancing the game's interactive capabilities.",
                "Created AI algorithms that enable enemy entities to exhibit realistic flocking and evasion behaviors, adding depth and challenge to the gameplay."
            ],
            tools: "Unity, Vuforia",
            platforms: "Hololens, iPad"
        },
        {
            title: "Data Visualization",
            company: "BuMo3DR",
            date: "",
            details: [
                "Designed and developed the entire application according to client specifications.",
                "Integrated OGDF (Open Graph Drawing Framework) for advanced graph visualization.",
                "Implemented client authorization API for secure access."
            ],
            tools: "Unreal Engine 4, OGDF",
            platforms: "PC"
        },
        {
            title: "VR Video Gallery",
            company: "BuMo3DR",
            date: "",
            details: [
                "Created a custom 360 video player to render and display videos.",
                "Designed and implemented a user interface for browsing and interacting with the video library."
            ],
            tools: "Unity",
            platforms: "Samsung Gear VR"
        },
        {
            title: "Battleship (iPhone)",
            company: "Electronic Arts",
            date: "",
            details: [
                "Enhanced application performance and stability through optimization and bug fixing.",
                "Updated the application to support the latest iOS platform available at the time.",
                "Expanded device compatibility to include more iOS devices."
            ],
            tools: "Objective-C, C++",
            platforms: "iPhone"
        },
        {
            title: "Monopoly (iPad)",
            company: "Electronic Arts",
            date: "",
            details: [
                "Added and replaced game tokens.",
                "Optimized the application and updated it to the latest iOS version.",
                "Added support for the latest iPad generation.",
                "Resolved several multiplayer connection problems, crashes, and audio issues."
            ],
            tools: "Objective-C, C++",
            platforms: "iPad"
        },
        {
            title: "Boggle (iPhone)",
            company: "Electronic Arts",
            date: "",
            details: [
                "Fixed multiple crashes and bugs.",
                "Expanded iPhone device support.",
                "Integrated in-house SDKs for enhanced functionality."
            ],
            tools: "Objective-C, C++",
            platforms: "iPhone"
        },
        {
            title: "Need for Speed: Shift",
            company: "Electronic Arts",
            date: "",
            details: [
                "Improved user interface as per the design.",
                "Fixed several crashes and bugs.",
                "Integrated AD sdk and COPPA sdk."
            ],
            tools: "Objective-C, C++",
            platforms: "iPhone"
        },
        {
            title: "Need for Speed: Hot Pursuit",
            company: "Electronic Arts",
            date: "",
            details: [
                "Tested Everyplay SDK for video recording with developer assistance.",
                "Integrated AD SDK and proprietary SDKs to enhance user experience.",
                "Added support for the latest iOS devices.",
                "Implemented user interface changes."
            ],
            tools: "Objective-C, C++",
            platforms: "iPhone"
        },
        {
            title: "Madden NFL (iPad)",
            company: "Electronic Arts",
            date: "",
            details: [
                "Optimized application performance, fixed bugs, and updated to the latest iOS version.",
                "Expanded iOS device compatibility.",
                "Integrated AD SDK and proprietary SDKs to enhance user experience."
            ],
            tools: "Objective-C, C++, iOS SDK",
            platforms: "iPad"
        },
        {
            title: "Java Feature Phone Ports",
            company: "Electronic Arts",
            date: "",
            details: [
                "Ported EA titles including Sims, NFS Hot Pursuit, FIFA, Bejeweled, and The Simpsons to various Java feature phones."
            ],
            tools: "Java ME",
            platforms: "Feature Phones"
        }
    ],
    skills: [
        "C++", "C#", "Python", "Unreal Engine 5", "Unity3D",
        "OpenGL", "DirectX", "AR/VR/MR Development",
        "Shader Programming (HLSL/GLSL)", "Multiplayer (Photon/Replication)",
        "Mobile Optimization", "Design Patterns"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    renderExperience();
    setupModals();
    setupScrollAnimations();
});

function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = ''; // Clear existing

    resumeData.projects.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'project-card fade-in-up'; // Add animation class
        // Stagger animation based on index, capped at 500ms
        const delay = Math.min(index * 50, 500);
        card.style.transitionDelay = `${delay}ms`;

        let mediaContent;
        if (project.image) {
            mediaContent = `<img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;">`;
        } else {
            mediaContent = `
                <div style="color: #666; font-family:var(--font-mono); text-align:center; padding:1rem;">
                        [${project.title} Preview]
                    </div>
            `;
        }

        // Show description instead of details in card
        const description = project.description || "Confidential project. System architecture and performance optimization.";

        card.innerHTML = `
            <div class="project-media">
                ${mediaContent}
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="tech-stack">
                    ${project.tools.split(',').slice(0, 3).map(t => `<span class="tech-tag">${t.trim()}</span>`).join('')}
                </div>
                <div class="project-desc">
                    <p>${description}</p>
                </div>
                <div class="card-actions">
                    <a href="#" class="btn view-code-btn" data-index="${index}">Details</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSkills() {
    // Skills are currently static in HTML for simplicity, 
    // but we will ensure they get the animation class if we were generating them.
}

function renderExperience() {
    const container = document.querySelector('#experience .container');
    if (!container) return;

    // Create or get the wrapper list
    let list = document.getElementById('experience-list');
    if (!list) {
        list = document.createElement('div');
        list.id = 'experience-list';
        container.appendChild(list);
    }

    // Clear list to avoid duplicates if re-rendered
    list.innerHTML = '';

    resumeData.experience.forEach((job, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in-up';
        item.style.transitionDelay = `${Math.min(index * 50, 500)}ms`;

        item.innerHTML = `
            <h3>${job.title}</h3>
            <h4>${job.company} <span class="date">${job.date}</span></h4>
            <ul>
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        `;
        list.appendChild(item);
    });
}

function setupModals() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    // Use event delegation for dynamically created buttons
    document.querySelector('.projects-grid').addEventListener('click', (e) => {
        if (e.target.classList.contains('view-code-btn')) {
            e.preventDefault();
            const index = e.target.dataset.index;
            const project = resumeData.projects[index];

            modalTitle.textContent = project.title;
            modalBody.innerHTML = `
                <h3>${project.company} <span class="date">${project.date}</span></h3>
                <div class="modal-meta" style="margin-bottom:1.5rem; display:flex; gap:1rem; flex-wrap:wrap;">
                    <span class="tech-tag">${project.platforms}</span>
                    <span class="tech-tag">${project.tools}</span>
                </div>
                
                <h4>Key Contributions</h4>
                <ul>
                    ${project.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after revealing to only animate once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px 100px 0px" });

    // Observe static and dynamic elements using the new class
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(el => observer.observe(el));
    }, 100);
}
