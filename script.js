/* --- DATA STORE (Modify your content here) --- */
const portfolioData = {
    projects: [

        {
            id: "p1",
            title: "Tank Multiplayer",
            brief: `A Multiplayer tank battle game with room creation and joining.
            \nUsing Fusion for networking. `,
            mainImg: "res\\images\\tank banner.png",
            about: "This project uses a custom investigation mechanic allowing players to deduce clues without hand-holding.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Clue+System", title: "Clue System", desc: "Dynamic linking of evidence." },
                { img: "https://placehold.co/400x300/1e293b/white?text=NPC+Dialogue", title: "NPC AI", desc: "Powered by local LLMs." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Environment", title: "Noir Style", desc: "Atmospheric lighting." }
            ]
        },
        {
            id: "p2",
            title: "AI NPC",
            brief: `AI NPC with local host LLM, Real time voice generation and lips-syncing. `,
            mainImg: "res\\images\\NPC.png",
            about: "This project uses a custom investigation mechanic allowing players to deduce clues without hand-holding.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Clue+System", title: "Clue System", desc: "Dynamic linking of evidence." },
                { img: "https://placehold.co/400x300/1e293b/white?text=NPC+Dialogue", title: "NPC AI", desc: "Powered by local LLMs." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Environment", title: "Noir Style", desc: "Atmospheric lighting." }
            ]
        },
        {
            id: "p3",
            title: "Procedural Dungeon Generation",
            brief: "Customizable dungeon generation using A* algo for path finding.",
            mainImg: "res\\images\\Dungeon banner.png",
            about: "Built using React and Node.js, featuring real-time inventory management.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Cart+UI", title: "Cart UI", desc: "Seamless checkout flow." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Admin+Panel", title: "Admin Panel", desc: "Sales analytics dashboard." }
            ]
        }
    ],
    experience: [
        {
            id: "e1",
            title: "Senior Developer @ TechCorp",
            brief: "Led a team of 5 developers creating SaaS solutions.",
            mainImg: "https://placehold.co/800x400/16a34a/white?text=TechCorp+Office",
            about: "Responsible for architecture decisions and cloud infrastructure.",
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