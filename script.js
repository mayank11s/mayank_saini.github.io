/* --- DATA STORE (Modify your content here) --- */
const portfolioData = {
    projects: [

        {
            id: "p1",
            title: "Tank Multiplayer (Mobile)",
            brief: `A Multiplayer tank battle game with room creation and joining.
            \nUsing Photon Fusion 2 for networking. `,
            mainImg: "res\\images\\tank banner.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241260/tank_gameplay_zklhyp.mp4",
            about: "A 3d Multiplayer tank battle game using Photon Fusion 2 for networking. Players can create and join rooms with id. The player with most kills in the end of round will win.",
            details: [
                { img: "https://placehold.co/400x300/1e293b/white?text=Networking", title: "Multiplayer Architecture", desc: "Implemented real-time networking using Photon Fusion 2 in a Client-Host topology, allowing seamless room creation and state synchronization." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Controls", title: "Mobile-Optimized Controls", desc: "Implemented Unity's modern Input System, seamlessly integrating virtual joysticks and UI buttons for responsive, touch-based gameplay." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Game+Loop", title: "Match Logic & Leaderboards", desc: "Programmed a complete core game loop including timed rounds, live kill tracking, and a dynamic post-match leaderboard." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Combat", title: "Synchronized Combat", desc: "Developed a responsive damage and respawn system with networked visual feedback, including explosion and smoke particle effects." },
                { img: "https://placehold.co/400x300/1e293b/white?text=Customization", title: "Player Identity", desc: "Built a pre-game lobby interface allowing players to customize their tank's visual appearance before deploying into the arena." }
            ]
        },
        {
            id: "p2",
            title: "AI NPC (Desktop)",
            brief: "An interactive AI NPC system featuring local LLM dialogue generation, real-time voice generation, and lip-syncing.",
            mainImg: "res\\images\\NPC.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241323/Ai_Npc_kggiqi.mp4",
            about: "This project introduces a fully dynamic interrogation mechanic. Player input is processed by a locally hosted LLaMA model via Ollama, strictly governed by a custom JSON architecture to maintain personality and context. The generated text is then converted into speech in real-time, driving procedural lip-sync animations for a highly immersive, unscripted character interaction.",
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Local+LLM", title: "Local Inference via Ollama", desc: "Integrated Ollama to run lightweight LLaMA models entirely locally, eliminating API costs and internet requirements while generating real-time responses."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=JSON+Context", title: "Context-Aware AI Control", desc: "Engineered a JSON-based context pipeline to feed the LLM specific constraints, ensuring the NPC stays in character and only reveals clues when logically prompted."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Voice+Gen", title: "Real-Time TTS Synthesis", desc: "Implemented a dynamic text-to-speech (TTS) pipeline that instantly converts the AI's unscripted text responses into natural-sounding voice audio."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Lip+Sync", title: "Procedural Lip-Syncing", desc: "Developed an animation system that analyzes the real-time generated audio to drive accurate, synchronized mouth movements and facial expressions on the 3D model."
                }
            ]
        },
        {
            id: "p3",
            title: "Procedural Dungeon Generation (Desktop)",
            brief: "A highly customizable procedural generation system utilizing grid-based logic and the A* algorithm to create infinite, playable environments.",
            mainImg: "res\\images\\Dungeon banner.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241743/Dungeon_Gen_Video_ifrykt.mp4",
            about: "This Unity procedural generator uses a grid architecture to spawn dimension-bounded rooms. It enforces 'void area' spatial rules to prevent overlapping geometry and intelligently connects corridors via A* pathfinding. The result is a fully navigable, atmospheric dungeon featuring randomized intersections and dynamic door sockets.",
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Grid+Gen",
                    title: "Grid-Based Architecture",
                    desc: "Rooms are dynamically spawned on a structured grid system using configurable minimum and maximum size boundaries, ensuring diverse but controlled layouts."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=A*+Algorithm",
                    title: "A* Path Generation",
                    desc: "Implemented the A* (A-Star) algorithm to automatically calculate and generate interconnected corridors, seamlessly linking multiple room sockets and complex intersections."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Spatial+Logic",
                    title: "Spatial Void Constraints",
                    desc: "Engineered a spatial rule system using designated 'red chunks' (void areas) around generated rooms to actively prevent overlapping geometry and ensure clean pathways."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Atmosphere",
                    title: "Atmospheric Visuals",
                    desc: "Integrated dynamic torch lighting, detailed brick textures, and arched doorways to create a dark, immersive dungeon-crawler atmosphere that complements the procedurally generated layouts."
                }
            ]
        },
        {
            id: "p4",
            title: "Fun Run (Mobile)",
            brief: "An endless runner game made from scratch.",
            mainImg: "res\\images\\Fun_Run.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241251/Fun_Run_mknd77.mp4",
            about: `This project showcases a 3D endless runner game developed entirely from scratch. 
            It features a modular level generation system, optimized player controller, 
            dynamic obstacle spawning, and scalable difficulty progression to ensure 
            smooth performance and engaging gameplay.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Level+Spawning",
                    title: "Infinite Track",
                    desc: "A straightforward system that spawns and recycles path segments to create an endless track while keeping performance smooth."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Mobile+Controls",
                    title: "Touch Controls",
                    desc: "Basic mobile input integration allowing the player to swipe to change lanes, jump over gaps, and dodge obstacles."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Game+Loop",
                    title: "Core Loop & UI",
                    desc: "A classic runner loop featuring randomized obstacle placement, collectible items, and a standard high-score tracking interface."
                }
            ]
        },
        {
            id: "p5",
            title: "VolleyBall Smash (Desktop)",
            brief: "A fast-paced local multiplayer game built for smooth controls, balanced mechanics, and competitive replayability.",
            mainImg: "res\\images\\Volleyball.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241258/Volleyball_arnp5n.mp4",
            about: `This project is a local 2-player game with a focus on competitive and responsive gameplay.
            It supports simultaneous input handling on a single device, 
            ensuring smooth and fair interaction between both players.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Local+Multiplayer",
                    title: "Shared Keyboard Input",
                    desc: "Configured simultaneous local multiplayer on a single keyboard, using independent WASD and Arrow key mappings so both players can move and jump without input blocking."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=2D+Physics",
                    title: "2D Physics & Collisions",
                    desc: "Implemented basic 2D physics to handle the ball's gravity and bounce, along with clean collision detection for the players, the ground, and the center net."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Match+UI",
                    title: "Match Loop & UI",
                    desc: "Developed a straightforward match system featuring a live scoreboard, an overhead countdown timer, and automatic round resets when a point is scored."
                }
            ]
        },

        {
            id: "p6",
            title: "Ball Maze (Mobile)",
            brief: "2D Ball Maze puzzle game .",
            mainImg: "res\\images\\BallMaze5.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241275/Ball_Maze_x05lhm.mp4",
            about: `A 2D gyro-controlled puzzle game inspired by classic ball mechanics, 
            where the objective is to guide balls into the center. It features interactive elements such as locked doors, 
            portals, and rotating levels to add complexity and challenge. The system is designed with a scalable architecture that supports expanding levels.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Gyro+Controls",
                    title: "Gyroscopic Movement",
                    desc: "Integrated mobile device tilt controls, allowing the player to naturally navigate the ball through the maze using the phone's built-in gyroscope."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Shader+Graph",
                    title: "Shader-Based Rendering",
                    desc: "Optimized the game's visuals by keeping all base puzzle sprites pure white. A custom shader graph dynamically applies colors and glows, making level themes highly flexible and memory-efficient."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Locked+Doors",
                    title: "Trigger-Based Locks",
                    desc: "Designed a logic system where the ball must interact with specific triggers to open corresponding doors, adding sequential puzzle-solving to the levels."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Portals",
                    title: "Teleportation Portals",
                    desc: "Programmed a seamless portal mechanic that instantly transports the ball across the board, allowing for non-linear maze layouts."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Rotating+Levels",
                    title: "Dynamic Rotation",
                    desc: "Implemented rotating environmental pieces that shift the maze geometry, requiring players to time their movements and adapt to changing paths."
                }
            ]
        },
        {
            id: "p7",
            title: "Tap Blast (Mobile)",
            brief: "A fast-paced 2D tap game focused on reflex, timing, and smooth responsive gameplay.",
            mainImg: "res\\images\\TapBlast.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241440/2d_Tap_Game_zeawbf.mp4",
            about: `This is a 2D tap-based game built around quick reflexes and simple but addictive mechanics. 
            The core idea is easy to understand, but the challenge ramps up as the pace increases, pushing the player’s timing and focus. 
            I designed the system to feel responsive and smooth, making sure every tap registers cleanly.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Tap+Controls",
                    title: "Touch Detection",
                    desc: "Implemented direct 2D touch and click detection so that player taps instantly and reliably register on the moving bomb targets."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Spawning",
                    title: "Dynamic Spawning",
                    desc: "Created a straightforward spawner system that tosses bombs onto the screen at varying trajectories to keep the player on their toes."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=VFX",
                    title: "Explosion VFX",
                    desc: "Added satisfying visual feedback using simple particle systems for the explosion bursts and lingering smoke clouds when a bomb is successfully tapped."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=UI+Score",
                    title: "Live Score Tracking",
                    desc: "Built a clean, basic UI overlay to track and display the player's score in real-time as they clear the screen."
                }
            ]
        },
        {
            id: "p8",
            title: "Neon Catch (Mobile)",
            brief: "2d Neon color cube catch game.",
            brief: "A minimalist 2D arcade game focused on quick lane-switching and reflexes.",
            mainImg: "res\\images\\NeonCatch.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241258/Neon_Catch_dpo7ms.mp4",
            about: `A fast-paced reflex game where players must quickly react to catch falling cubes. The mechanics are highly stripped down, focusing purely on timing, hand-eye coordination, and beating high scores as the falling speed progressively increases.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Controls",
                    title: "Instant Lane Shifting",
                    desc: "Programmed simple, responsive touch controls that allow the player to instantly snap their block between the left and right sides of the screen."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Core+Loop",
                    title: "Catch & Score Logic",
                    desc: "Built a straightforward collision and logic loop that registers successful catches to increase the score, while a single miss triggers a game over."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Difficulty",
                    title: "Progressive Difficulty",
                    desc: "Implemented a dynamic time-scaling system that gradually increases the gravity and fall speed of the cubes and the tile color changes randomly."
                }
            ]
        },
        {
            id: "p9",
            title: "Ball In Hole (Mobile)",
            brief: "A minimalist 3D puzzle game utilizing gyroscopic controls to navigate a ball through precarious mazes.",
            mainImg: "res\\images\\Ball_In_Hole.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241494/Ball_In_Hole_dxu8wv.mp4",
            about: `The core gameplay mechanics involve gyroscopic motion control, 
            requiring players to navigate a ball through intricate 3D environments. 
            Success depends on strategic pathfinding and precision handling to reach the goal while avoiding falls into the void.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Gyro+Physics",
                    title: "Gyroscopic Physics",
                    desc: "Integrated mobile device tilt controls with the 3D physics engine, allowing players to naturally steer the ball by tilting their phone."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Level+Design",
                    title: "Precarious Pathways",
                    desc: "Designed suspended 3D puzzle tracks that require careful momentum management to prevent the ball from rolling off the edge."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Progression",
                    title: "Level Progression",
                    desc: "Implemented a clean, functional level-selection UI to manage player progression across multiple distinct stages."
                }
            ]
        }, {
            id: "p10",
            title: "Snap Stack (Mobile)",
            brief: "A fast-paced local two-player card game focused on quick reflexes and deck management.",
            mainImg: "res\\images\\card.png",
            videoUrl: "https://res.cloudinary.com/dpxmy2gbf/video/upload/v1773241231/Card_Game_npr9no.mp4",
            about: `Players take turns playing one card at a time into a center pile. 
            If a player throws a card that matches the number of the card played right before it, 
            the player who just went must pick up the entire pile. The goal is to get rid of your hand, 
            the first person to run out of cards wins the game.`,
            details: [
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Shared+Screen",
                    title: "Mirrored Multiplayer UI",
                    desc: "Designed a top-down, shared-screen interface with inverted controls and displays so two players can comfortably play on opposite ends of a single mobile device."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Deck+Logic",
                    title: "Deck Management",
                    desc: "Programmed a 52-card virtual deck that automatically shuffles, splits into equal 26-card hands, and tracks each player's remaining card count in real-time."
                },
                {
                    img: "https://placehold.co/400x300/1e293b/white?text=Match+State",
                    title: "Match Detection",
                    desc: "Built a straightforward logic loop that checks the numerical value of the newly played card against the top of the pile to instantly trigger the pickup penalty."
                }
            ]
        }
    ],
    experience: [
        {
            id: "e1",
            title: "Unity Programmer | Heilmwater Studios",
            brief: "Completed an 8-month internship developing core mechanics for an open-world RPG and serving as Lead Programmer on an alchemy simulator.",
            mainImg: "https://placehold.co/800x400/16a34a/white?text=Heilmwater+Studios",
            // videoUrl: "res\\videos\\Internship_Project_Prototype3.mp4",
            about: `During my 8-month tenure at Heilmwater Studios, I contributed to two major mobile titles. I started on 'Legends of Heilmwater,' an unreleased 3D open-world game, where I engineered essential player traversal mechanics and assisted with level design. I then transitioned to Lead Programmer for 'Apotheosis of Ainoi,' an alchemy simulation game. For this title, I built the entire codebase from scratch, managing everything from the core crafting logic to cross-discipline coordination between the art and design teams.`,
            details: [
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=Progression+Loop", 
                    title: "Automated Game Loops", 
                    desc: "Engineered the core progression system for 'Apotheosis of Ainoi,' allowing players to upgrade from manual harvesting and grinding to a fully automated pipeline connected by item-transfer portals." 
                },
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=Traversal+Mechanics", 
                    title: "Open-World Mechanics", 
                    desc: "Developed robust player traversal systems for a 3D open-world environment, including stamina management, dynamic dashing, and fluid swimming mechanics." 
                },
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=Architecture", 
                    title: "System Architecture", 
                    desc: "Designed and implemented the foundational code architecture for the alchemy simulator, ensuring scalable and optimized systems for the crafting economy and machine upgrades." 
                },
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=Documentation", 
                    title: "Technical Leadership", 
                    desc: "Bridged the gap between the programming, art, and design departments while writing and maintaining comprehensive technical documentation for both game projects." 
                }
            ]
        },
        {
            id: "e2",
            title: "Game Developer Intern | Crimson Insights",
            brief: "Developed 2D mobile games from concept to launch while refining and monetizing existing projects for publication.",
            mainImg: "https://placehold.co/800x400/ea580c/white?text=Crimson+Insights", // Update with a relevant image
            videoUrl: "", // Leave empty if you don't have a video, or add a link if you do!
            about: `During my internship at Crimson Insights, I worked extensively across a portfolio of 2D mobile titles. My responsibilities were split between rapid development—taking high-level game concepts from management and building them from scratch—and maintaining existing projects. This involved debugging code, transforming assets, and integrating the IronSource SDK for ad monetization. I also managed the final build pipeline, generating .aab files for official store releases.`,
            details: [
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=Prototyping", 
                    title: "Rapid Game Development", 
                    desc: "Built multiple 2D mobile games entirely from scratch, taking core ideas from management and developing them into fully playable, polished products." 
                },
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=IronSource+SDK", 
                    title: "Ad Monetization", 
                    desc: "Implemented comprehensive monetization loops using the IronSource SDK, successfully integrating banner, interstitial, and rewarded video ads into live projects." 
                },
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=AAB+Builds", 
                    title: "Optimization & Deployment", 
                    desc: "Refined existing codebases by fixing bugs and updating features, ultimately managing the Android build process to generate launch-ready .aab files." 
                },
                { 
                    img: "https://placehold.co/400x300/1e293b/white?text=Team+Coordination", 
                    title: "Asset Integration", 
                    desc: "Collaborated directly with the art department to request, transform, and seamlessly integrate 2D sprites and UI elements into the Unity engine." 
                }
            ]
        }
    ]
};

/* --- SHARED: Populate Dropdowns --- */
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
                // USE REPLACE INSTEAD OF HREF TO PREVENT HISTORY TREE
                window.location.replace(targetUrl);
            }
        } else {
            a.href = targetUrl;
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
            // On Click: Open detail in the same tab
            card.onclick = () => window.location.href = `detail.html?type=${type}&id=${item.id}`;
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
    document.getElementById('detail-about-text').textContent = item.about;

    const imgElement = document.getElementById('detail-main-img');
    const videoElement = document.getElementById('detail-main-video');

    // Smart logic: If a videoUrl exists, show the video and hide the image.
    if (item.videoUrl) {
        videoElement.src = item.videoUrl;
        videoElement.style.display = 'block'; // Show video
        imgElement.style.display = 'none';    // Hide image
    } else {
        // If no videoUrl exists (like in Experiences), show the image and hide the video.
        imgElement.src = item.mainImg;
        imgElement.style.display = 'block';   // Show image
        videoElement.style.display = 'none';  // Hide video
    }

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