/* --- DATA STORE (Modify your content here) --- */
const portfolioData = {
    projects: [

        {
            id: "p1",
            title: "Tank Multiplayer (Mobile)",
            brief: `A Multiplayer tank battle game with room creation and joining.
            \nUsing Photon Fusion 2 for networking. `,
            mainImg: "res\\images\\tank banner.png",
            about: "A 3d Multiplayer tank battle game using Photon Fusion 2 for networking. Players can create and join rooms with id. The player with most kills in the end of round will win.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Networking", title: "Networking", desc: "Photon fusion 2 with Host mode." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Controls", title: "Controls", desc: "Powered by local LLMs." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Environment", title: "Noir Style", desc: "Atmospheric lighting." }
            ]
        },
        {
            id: "p2",
            title: "AI NPC (Desktop)",
            brief: `AI NPC with local host LLM, Real time voice generation and lips-syncing. `,
            mainImg: "res\\images\\NPC.png",
            about: "This project uses a custom investigation mechanism allowing players to deduce clues without hand-holding.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Clue+System", title: "Clue System", desc: "Dynamic linking of evidence." },
                { img: "https://placehold.co/400x300/1e293b/white?text=NPC+Dialogue", title: "NPC AI", desc: "Powered by local LLMs." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Environment", title: "Noir Style", desc: "Atmospheric lighting." }
            ]
        },
        {
            id: "p3",
            title: "Procedural Dungeon Generation (Desktop)",
            brief: "Customizable dungeon generation using A* algo for path finding.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `This project demonstrates a dynamic dungeon generation system powered by the A* algorithm.
                    Multiple configurable parameters allow flexible generation and precise control over the desired outcome.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        {
            id: "p4",
            title: "Fun Run (Mobile)",
            brief: "An endless runner game made from scratch.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `This project showcases a 3D endless runner game developed entirely from scratch. 
            It features a modular level generation system, optimized player controller, 
            dynamic obstacle spawning, and scalable difficulty progression to ensure 
            smooth performance and engaging gameplay.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        , {
            id: "p5",
            title: "VolleyBall Smash (Desktop)",
            brief: "A fast-paced local multiplayer game built for smooth controls, balanced mechanics, and competitive replayability.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `This project is a local 2-player game with a focus on competitive and responsive gameplay.
            It supports simultaneous input handling on a single device, 
            ensuring smooth and fair interaction between both players`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        
        {
            id: "p6",
            title: "Ball Maze (Mobile)",
            brief: "A 2D logic-based puzzle game designed with structured progression, clean mechanics, and scalable level architecture.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `A 2D gyro-controlled puzzle game inspired by classic ball mechanics, 
            where the objective is to guide balls into the center. It features interactive elements such as locked doors, 
            portals, and rotating levels to add complexity and challenge. The system is designed with a scalable architecture that supports expanding levels.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        {
            id: "p7",
            title: "Tap Blast (Mobile)",
            brief: "A fast-paced 2D tap game focused on reflex, timing, and smooth responsive gameplay.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `This is a 2D tap-based game built around quick reflexes and simple but addictive mechanics. 
            The core idea is easy to understand, but the challenge ramps up as the pace increases, pushing the player’s timing and focus. 
            I designed the system to feel responsive and smooth, making sure every tap registers cleanly`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        {
            id: "p8",
            title: "Cube Collector (Mobile)",
            brief: "A 2d color cube catch game.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `Players control a sliding tile at the bottom of the screen, 
            moving left and right to catch falling cubes. The goal is to match the color of the tile with the falling cubes to score. 
            However, the tile’s color changes randomly, requiring quick reflexes. Catching a mismatched color costs a heart, 
            while catching falling heart icons will replenish your lives.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        {
            id: "p9",
            title: "Ball In Hole (Mobile)",
            brief: "3d puzzle game with gyro controls.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `The core gameplay mechanics involve gyroscopic motion control, 
            requiring players to navigate a ball through intricate environments. 
            Success depends on strategic pathfinding and precision handling to reach the goal while avoiding environmental hazards and falls into the void.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        },
        {
            id: "p10",
            title: "Card Drawer (Mobile)",
            brief: "Local two player card game.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: `Players take turns playing one card at a time into a center pile. 
            If a player throws a card that matches the number of the card played right before it, 
            the player who just went must pick up the entire pile. The goal is to get rid of your hand, 
            the first person to run out of cards wins the game.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        }
    ],
    experience: [
        {
            id: "e1",
            title: "Heilmwater Studios",
            brief: "Lead programmer on a project from concept to launch, also contributed to a 3d open world game.",
            mainImg: "https://placehold.co/800x400/16a34a/white?text=TechCorp+Office",
            about: `At Heilmwater Studios, I was the sole programmer on a potion-making game, 
            
            handling all gameplay code and system development from concept to completion. 
            I worked closely with artists and designers to turn ideas into functional mechanics, 
            improve team workflow, and maintain clear project documentation. 
            I also contributed to system development for a 3D world game, 
            expanding my experience in larger gameplay architecture.`,
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Team+Meet", title: "Leadership", desc: "Mentored junior devs." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Code+Review", title: "Quality", desc: "Implemented CI/CD pipelines." }
            ]
        },
        {
            id: "e2",
            title: "Freelance Designer",
            brief: "Created UI/UX designs for 10+ international clients.",
            mainImg: "https://placehold.co/800x400/ea580c/white?text=Design+Studio",
            about: "Specialized in minimalist and accessibility-focused web design.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Figma", title: "Prototyping", desc: "High fidelity wireframes." }
            ]
        },
    ]
};

/* --- SHARED: Populate Dropdowns --- */
function populateDropdowns() {
    const projDrop = document.getElementById('project-dropdown');
    const expDrop = document.getElementById('experience-dropdown');

    // Helper to create links
    const createLink = (item, type) => {
        const a = document.createElement('a');
        a.className = 'dropdown-item';
        a.textContent = item.title;
        // Logic: if we are on index, open new tab. If on detail, reload current page
        const isDetailPage = window.location.pathname.includes('detail.html');
        const targetUrl = `detail.html?type=${type}&id=${item.id}`;

        if (isDetailPage) {
            a.href = "#";
            a.onclick = (e) => {
                e.preventDefault();
                window.location.href = targetUrl; // Reloads current page with new query params
            }
        } else {
            a.href = targetUrl;
            a.target = "_blank"; // Opens new tab from home page
        }
        return a;
    };

    portfolioData.projects.forEach(p => projDrop.appendChild(createLink(p, 'projects')));
    portfolioData.experience.forEach(e => expDrop.appendChild(createLink(e, 'experience')));
}

/* --- INDEX PAGE LOGIC --- */
function initIndexPage() {
    const container = document.getElementById('list-container');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function renderList(type) {
        container.innerHTML = ''; // Clear current
        const items = portfolioData[type];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            // On Click: Open detail in new tab
            card.onclick = () => window.open(`detail.html?type=${type}&id=${item.id}`, '_blank');

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${item.mainImg}" alt="${item.title}" class="card-img">
                </div>
                <div class="card-content">
                    <h2>${item.title}</h2>
                    <br>
                    <div class="arrow-indicator">➔</div>
                    <p>${item.brief}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Tab Switching Logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderList(btn.dataset.tab);
        });
    });

    // Initial Load
    renderList('projects');
}

/* --- DETAIL PAGE LOGIC --- */
function initDetailPage() {
    // 1. Get Query Params from URL (e.g., ?type=projects&id=p1)
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const id = params.get('id');

    if (!type || !id) {
        document.body.innerHTML = "<h1 style='text-align:center; padding-top:100px;'>404: Content not found</h1>";
        return;
    }

    // 2. Find Data
    const item = portfolioData[type].find(x => x.id === id);
    if (!item) return;

    // 3. Inject Content
    document.getElementById('detail-title').textContent = item.title;
    document.getElementById('detail-main-img').src = item.mainImg;
    document.getElementById('detail-about-text').textContent = item.about;

    // 4. Build Zig-Zag Layout
    const zigZagContainer = document.getElementById('zig-zag-content');
    item.details.forEach(detail => {
        const row = document.createElement('div');
        row.className = 'detail-row';
        row.innerHTML = `
            <img src="${detail.img}" alt="${detail.title}">
            <div class="detail-text">
                <h3>${detail.title}</h3>
                <p>${detail.desc}</p>
                <hr style="width:50px; border:1px solid var(--primary-color); margin-top:10px;">
            </div>
        `;
        zigZagContainer.appendChild(row);
    });
}

/* --- INIT --- */
document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();

    if (document.getElementById('list-container')) {
        initIndexPage();
    }

    if (document.getElementById('detail-title')) {
        initDetailPage();
    }
});