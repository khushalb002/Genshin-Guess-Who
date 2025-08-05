const characters = [
    {
        name: "Lumine",
        image: "media/Lumine_Icon.png",
        traits: "Sword, Visionless",
        colorClass: "char-1",
        rarity: 5
    },
    {
        name: "Aether",
        image: "media/Aether_Icon.png",
        traits: "Sword, Visionless",
        colorClass: "char-2",
        rarity: 5
    },
    {
        name: "Albedo",
        image: "media/Albedo_Icon.png",
        traits: "Sword, Geo",
        colorClass: "char-3",
        rarity: 5
    },
    {
        name: "Alhaitham",
        image: "media/Alhaitham_Icon.png",
        traits: "Sword, Dendro",
        colorClass: "char-4",
        rarity: 5
    },
    {
        name: "Aloy",
        image: "media/Aloy_Icon.png",
        traits: "Bow, Cryo",
        colorClass: "char-5",
        rarity: 5
    },
    {
        name: "Arlecchino",
        image: "media/Arlecchino_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-6",
        rarity: 5
    },
    {
        name: "Ayaka",
        image: "media/Kamisato_Ayaka_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-7",
        rarity: 5
    },
    {
        name: "Ayato",
        image: "media/Kamisato_Ayato_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-8",
        rarity: 5
    },
    {
        name: "Baizhu",
        image: "media/Baizhu_Icon.png",
        traits: "Catalyst, Dendro",
        colorClass: "char-9",
        rarity: 5
    },
    {
        name: "Chasca",
        image: "media/Chasca_Icon.png",
        traits: "Bow, Anemo",
        colorClass: "char-10",
        rarity: 5
    },
    {
        name: "Childe",
        image: "media/Tartaglia_Icon.png",
        traits: "Bow, Hydro",
        colorClass: "char-11",
        rarity: 5
    },
    {
        name: "Chiori",
        image: "media/Chiori_Icon.png",
        traits: "Sword, Geo",
        colorClass: "char-12",
        rarity: 5
    },
    {
        name: "Citlali",
        image: "media/Citlali_Icon.png",
        traits: "Catalyst, Cryo",
        colorClass: "char-1",
        rarity: 5
    },
    {
        name: "Clorinde",
        image: "media/Clorinde_Icon.png",
        traits: "Sword, Electro",
        colorClass: "char-2",
        rarity: 5
    },
    {
        name: "Cyno",
        image: "media/Cyno_Icon.png",
        traits: "Polearm, Electro",
        colorClass: "char-3",
        rarity: 5
    },
    {
        name: "Dahlia",
        image: "media/Dahlia_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-4",
        rarity: 5
    },
    {
        name: "Dehya",
        image: "media/Dehya_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-5",
        rarity: 5
    },
    {
        name: "Diluc",
        image: "media/Diluc_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-6",
        rarity: 5
    },
    {
        name: "Emilie",
        image: "media/Emilie_Icon.png",
        traits: "Polearm, Dendro",
        colorClass: "char-7",
        rarity: 5
    },
    {
        name: "Escoffier",
        image: "media/Escoffier_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-8",
        rarity: 5
    },
    {
        name: "Eula",
        image: "media/Eula_Icon.png",
        traits: "Claymore, Cryo",
        colorClass: "char-9",
        rarity: 5
    },
    {
        name: "Furina",
        image: "media/Furina_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-10",
        rarity: 5
    },
    {
        name: "Ganyu",
        image: "media/Ganyu_Icon.png",
        traits: "Bow, Cryo",
        colorClass: "char-11",
        rarity: 5
    },
    {
        name: "Hu Tao",
        image: "media/Hu_Tao_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-12",
        rarity: 5
    },
    {
        name: "Itto",
        image: "media/Arataki_Itto_Icon.png",
        traits: "Claymore, Geo",
        colorClass: "char-1",
        rarity: 5
    },
    {
        name: "Jean",
        image: "media/Jean_Icon.png",
        traits: "Sword, Anemo",
        colorClass: "char-2",
        rarity: 5
    },
    {
        name: "Kazuha",
        image: "media/Kaedehara_Kazuha_Icon.png",
        traits: "Sword, Anemo",
        colorClass: "char-3",
        rarity: 5
    },
    {
        name: "Keqing",
        image: "media/Keqing_Icon.png",
        traits: "Sword, Electro",
        colorClass: "char-4",
        rarity: 5
    },
    {
        name: "Kinich",
        image: "media/Kinich_Icon.png",
        traits: "Claymore, Dendro",
        colorClass: "char-5",
        rarity: 5
    },
    {
        name: "Klee",
        image: "media/Klee_Icon.png",
        traits: "Catalyst, Pyro",
        colorClass: "char-6",
        rarity: 5
    },
    {
        name: "Kokomi",
        image: "media/Sangonomiya_Kokomi_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-7",
        rarity: 5
    },
    {
        name: "Lyney",
        image: "media/Lyney_Icon.png",
        traits: "Bow, Pyro",
        colorClass: "char-8",
        rarity: 5
    },
    {
        name: "Mavuika",
        image: "media/Mavuika_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-9",
        rarity: 5
    },
    {
        name: "Mona",
        image: "media/Mona_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-10",
        rarity: 5
    },
    {
        name: "Mualani",
        image: "media/Mualani_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-11",
        rarity: 5
    },
    {
        name: "Nahida",
        image: "media/Nahida_Icon.png",
        traits: "Catalyst, Dendro",
        colorClass: "char-12",
        rarity: 5
    },
    {
        name: "Navia",
        image: "media/Navia_Icon.png",
        traits: "Claymore, Geo",
        colorClass: "char-1",
        rarity: 5
    },
    {
        name: "Neuvillette",
        image: "media/Neuvillette_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-2",
        rarity: 5
    },
    {
        name: "Nilou",
        image: "media/Nilou_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-3",
        rarity: 5
    },
    {
        name: "Qiqi",
        image: "media/Qiqi_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-4",
        rarity: 5
    },
    {
        name: "Raiden",
        image: "media/Raiden_Shogun_Icon.png",
        traits: "Polearm, Electro",
        colorClass: "char-5",
        rarity: 5
    },
    {
        name: "Shenhe",
        image: "media/Shenhe_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-6",
        rarity: 5
    },
    {
        name: "Sigewinne",
        image: "media/Sigewinne_Icon.png",
        traits: "Bow, Hydro",
        colorClass: "char-7",
        rarity: 5
    },
    {
        name: "Skirk",
        image: "media/Skirk_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-8",
        rarity: 5
    },
    {
        name: "Tighnari",
        image: "media/Tighnari_Icon.png",
        traits: "Bow, Dendro",
        colorClass: "char-9",
        rarity: 5
    },
    {
        name: "Varesa",
        image: "media/Varesa_Icon.png",
        traits: "Catalyst, Electro",
        colorClass: "char-10",
        rarity: 5
    },
    {
        name: "Venti",
        image: "media/Venti_Icon.png",
        traits: "Bow, Anemo",
        colorClass: "char-11",
        rarity: 5
    },
    {
        name: "Wanderer",
        image: "media/Wanderer_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-12",
        rarity: 5
    },
    {
        name: "Wriothesley",
        image: "media/Wriothesley_Icon.png",
        traits: "Catalyst, Cryo",
        colorClass: "char-1",
        rarity: 5
    },
    {
        name: "Xianyun",
        image: "media/Xianyun_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-2",
        rarity: 5
    },
    {
        name: "Xiao",
        image: "media/Xiao_Icon.png",
        traits: "Polearm, Anemo",
        colorClass: "char-3",
        rarity: 5
    },
    {
        name: "Xilonen",
        image: "media/Xilonen_Icon.png",
        traits: "Sword, Geo",
        colorClass: "char-4",
        rarity: 5
    },
    {
        name: "Yae Miko",
        image: "media/Yae_Miko_Icon.png",
        traits: "Catalyst, Electro",
        colorClass: "char-5",
        rarity: 5
    },
    {
        name: "Yelan",
        image: "media/Yelan_Icon.png",
        traits: "Bow, Hydro",
        colorClass: "char-6",
        rarity: 5
    },
    {
        name: "Yoimiya",
        image: "media/Yoimiya_Icon.png",
        traits: "Bow, Pyro",
        colorClass: "char-7",
        rarity: 5
    },
    {
        name: "Yumemizuki Mizuki",
        image: "media/Yumemizuki_Mizuki_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-8",
        rarity: 5
    },
    {
        name: "Zhongli",
        image: "media/Zhongli_Icon.png",
        traits: "Polearm, Geo",
        colorClass: "char-9",
        rarity: 5
    },
    {
        name: "Amber",
        image: "media/Amber_Icon.png",
        traits: "Bow, Pyro",
        colorClass: "char-10",
        rarity: 4
    },
    {
        name: "Barbara",
        image: "media/Barbara_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-11",
        rarity: 4
    },
    {
        name: "Beidou",
        image: "media/Beidou_Icon.png",
        traits: "Claymore, Electro",
        colorClass: "char-12",
        rarity: 4
    },
    {
        name: "Bennett",
        image: "media/Bennett_Icon.png",
        traits: "Sword, Pyro",
        colorClass: "char-1",
        rarity: 4
    },
    {
        name: "Candace",
        image: "media/Candace_Icon.png",
        traits: "Polearm, Hydro",
        colorClass: "char-2",
        rarity: 4
    },
    {
        name: "Charlotte",
        image: "media/Charlotte_Icon.png",
        traits: "Catalyst, Cryo",
        colorClass: "char-3",
        rarity: 4
    },
    {
        name: "Chevreuse",
        image: "media/Chevreuse_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-4",
        rarity: 4
    },
    {
        name: "Chongyun",
        image: "media/Chongyun_Icon.png",
        traits: "Claymore, Cryo",
        colorClass: "char-5",
        rarity: 4
    },
    {
        name: "Collei",
        image: "media/Collei_Icon.png",
        traits: "Bow, Dendro",
        colorClass: "char-6",
        rarity: 4
    },
    {
        name: "Diona",
        image: "media/Diona_Icon.png",
        traits: "Bow, Cryo",
        colorClass: "char-7",
        rarity: 4
    },
    {
        name: "Dori",
        image: "media/Dori_Icon.png",
        traits: "Claymore, Electro",
        colorClass: "char-8",
        rarity: 4
    },
    {
        name: "Faruzan",
        image: "media/Faruzan_Icon.png",
        traits: "Bow, Anemo",
        colorClass: "char-9",
        rarity: 4
    },
    {
        name: "Fischl",
        image: "media/Fischl_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-10",
        rarity: 4
    },
    {
        name: "Freminet",
        image: "media/Freminet_Icon.png",
        traits: "Claymore, Cryo",
        colorClass: "char-11",
        rarity: 4
    },
    {
        name: "Gaming",
        image: "media/Gaming_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-12",
        rarity: 4
    },
    {
        name: "Gorou",
        image: "media/Gorou_Icon.png",
        traits: "Bow, Geo",
        colorClass: "char-1",
        rarity: 4
    },
    {
        name: "Heizou",
        image: "media/Shikanoin_Heizou_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-2",
        rarity: 4
    },
    {
        name: "Iansan",
        image: "media/Iansan_Icon.png",
        traits: "Polearm, Electro",
        colorClass: "char-3",
        rarity: 4
    },
    {
        name: "Ifa",
        image: "media/Ifa_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-4",
        rarity: 4
    },
    {
        name: "Kachina",
        image: "media/Kachina_Icon.png",
        traits: "Polearm, Geo",
        colorClass: "char-5",
        rarity: 4
    },
    {
        name: "Kaeya",
        image: "media/Kaeya_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-6",
        rarity: 4
    },
    {
        name: "Kaveh",
        image: "media/Kaveh_Icon.png",
        traits: "Claymore, Dendro",
        colorClass: "char-7",
        rarity: 4
    },
    {
        name: "Kirara",
        image: "media/Kirara_Icon.png",
        traits: "Sword, Dendro",
        colorClass: "char-8",
        rarity: 4
    },
    {
        name: "Kuki Shibobu",
        image: "media/Kuki_Shinobu_Icon.png",
        traits: "Sword, Electro",
        colorClass: "char-9",
        rarity: 4
    },
    {
        name: "Lanyan",
        image: "media/Lan_Yan_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-10",
        rarity: 4
    },
    {
        name: "Layla",
        image: "media/Layla_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-11",
        rarity: 4
    },
    {
        name: "Lisa",
        image: "media/Lisa_Icon.png",
        traits: "Catalyst, Electro",
        colorClass: "char-12",
        rarity: 4
    },
    {
        name: "Lynette",
        image: "media/Lynette_Icon.png",
        traits: "Sword, Anemo",
        colorClass: "char-1",
        rarity: 4
    },
    {
        name: "Mika",
        image: "media/Mika_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-2",
        rarity: 4
    },
    {
        name: "Ningguang",
        image: "media/Ningguang_Icon.png",
        traits: "Catalyst, Geo",
        colorClass: "char-3",
        rarity: 4
    },
    {
        name: "Noelle",
        image: "media/Noelle_Icon.png",
        traits: "Claymore, Geo",
        colorClass: "char-4",
        rarity: 4
    },
    {
        name: "Ororon",
        image: "media/Ororon_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-5",
        rarity: 4
    },
    {
        name: "Razor",
        image: "media/Razor_Icon.png",
        traits: "Claymore, Electro",
        colorClass: "char-6",
        rarity: 4
    },
    {
        name: "Rosaria",
        image: "media/Rosaria_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-7",
        rarity: 4
    },
    {
        name: "Sara",
        image: "media/Kujou_Sara_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-8",
        rarity: 4
    },
    {
        name: "Sayu",
        image: "media/Sayu_Icon.png",
        traits: "Claymore, Anemo",
        colorClass: "char-9",
        rarity: 4
    },
    {
        name: "Sethos",
        image: "media/Sethos_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-10",
        rarity: 4
    },
    {
        name: "Sucrose",
        image: "media/Sucrose_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-11",
        rarity: 4
    },
    {
        name: "Thoma",
        image: "media/Thoma_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-12",
        rarity: 4
    },
    {
        name: "Xiangling",
        image: "media/Xiangling_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-1",
        rarity: 4
    },
    {
        name: "Xingqiu",
        image: "media/Xingqiu_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-2",
        rarity: 4
    },
    {
        name: "Xinyan",
        image: "media/Xinyan_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-3",
        rarity: 4
    },
    {
        name: "Yanfei",
        image: "media/Yanfei_Icon.png",
        traits: "Catalyst, Pyro",
        colorClass: "char-4",
        rarity: 4
    },
    {
        name: "Yaoyao",
        image: "media/Yaoyao_Icon.png",
        traits: "Polearm, Dendro",
        colorClass: "char-5",
        rarity: 4
    },
    {
        name: "Yun Jin",
        image: "media/Yun_Jin_Icon.png",
        traits: "Polearm, Geo",
        colorClass: "char-6",
        rarity: 4
    }
];

characters.forEach((c, i) => c.originalIndex = i);

let crossedOutCount = 0;
let isMobile = window.innerWidth <= 768;
let isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
let hideCrossedOut = false;
let rarityFilter = 'all'; // 'all', '5star', '4star'

// Handle screen orientation and resize
function handleResize() {
    const previousIsMobile = isMobile;
    const previousIsTablet = isTablet;
    
    isMobile = window.innerWidth <= 768;
    isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    
    // Re-render if device type changed
    if (previousIsMobile !== isMobile || previousIsTablet !== isTablet) {
        updateStats();
    }
}

// Add touch-friendly interactions
function addTouchSupport(card) {
    let touchStartTime = 0;
    let touchMoved = false;
    
    card.addEventListener('touchstart', (e) => {
        touchStartTime = Date.now();
        touchMoved = false;
        card.style.transform = 'scale(0.95) translateY(-2px)';
    }, { passive: true });
    
    card.addEventListener('touchmove', () => {
        touchMoved = true;
        card.style.transform = '';
    }, { passive: true });
    
    card.addEventListener('touchend', (e) => {
        const touchDuration = Date.now() - touchStartTime;
        card.style.transform = '';
        
        // Only trigger if it was a quick tap and not a scroll
        if (!touchMoved && touchDuration < 500) {
            e.preventDefault();
            const index = parseInt(card.dataset.index);
            toggleCrossOut(card, index);
        }
    });
    
    // Add visual feedback for hover on non-touch devices
    if (!('ontouchstart' in window)) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('crossed-out')) {
                card.style.transform = '';
            }
        });
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

function initializeTheme() {
    // For future localStorage support
}

function initializeGame() {
    const gameGrid = document.getElementById('gameGrid');
    
    // Store current crossed-out state before clearing
    const currentCrossedOut = new Set();
    const existingCards = gameGrid.querySelectorAll('.character-card.crossed-out');
    existingCards.forEach(card => {
        const characterName = card.querySelector('.character-name').textContent;
        currentCrossedOut.add(characterName);
    });
    
    gameGrid.innerHTML = '';

    // Filter characters based on rarity filter
    let filteredCharacters = characters;
    if (rarityFilter === '5star') {
        filteredCharacters = characters.filter(char => char.rarity === 5);
    } else if (rarityFilter === '4star') {
        filteredCharacters = characters.filter(char => char.rarity === 4);
    }

    filteredCharacters.forEach((character, index) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.dataset.index = characters.indexOf(character); // Use original index
        card.dataset.rarity = character.rarity;

        card.innerHTML = `
            <div class="character-portrait ${character.colorClass}">
                <img src="${character.image}" alt="${character.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='👤';">
            </div>
            <div class="character-name">${character.name}</div>
            <div class="character-traits">${character.traits}</div>
        `;

        // Restore crossed-out state if it was previously crossed out
        if (currentCrossedOut.has(character.name)) {
            card.classList.add('crossed-out');
        }

        // Add click event for desktop
        card.addEventListener('click', () => toggleCrossOut(card, characters.indexOf(character)));
        
        // Add touch support for mobile
        addTouchSupport(card);
        
        gameGrid.appendChild(card);
    });

    // Apply hide/show state after rendering
    applyHideShowState();
    updateStats();
}

function toggleCrossOut(card, index) {
    if (card.classList.contains('crossed-out')) {
        card.classList.remove('crossed-out');
        crossedOutCount--;
    } else {
        card.classList.add('crossed-out');
        crossedOutCount++;
    }
    
    // Apply hide/show state after toggling
    applyHideShowState();
    updateStats();
}

function updateStats() {
    // Recalculate crossed out count from actual DOM state
    const crossedOutCards = document.querySelectorAll('.character-card.crossed-out');
    crossedOutCount = crossedOutCards.length;
    
    // Get total visible characters based on current filter
    let totalCharacters = characters.length;
    if (rarityFilter === '5star') {
        totalCharacters = characters.filter(char => char.rarity === 5).length;
    } else if (rarityFilter === '4star') {
        totalCharacters = characters.filter(char => char.rarity === 4).length;
    }
    
    const remaining = totalCharacters - crossedOutCards.length;
    document.getElementById('remainingCount').textContent = `${remaining} characters remaining`;
    document.getElementById('crossedCount').textContent = `${crossedOutCards.length} crossed out`;
}

function resetGame() {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach(card => {
        card.classList.remove('crossed-out');
        card.style.display = ''; // Show all cards
    });
    crossedOutCount = 0;
    hideCrossedOut = false;
    rarityFilter = 'all';
    
    // Update button states
    const hideBtn = document.getElementById('hideBtn');
    hideBtn.classList.remove('active');
    hideBtn.textContent = 'Hide Crossed Out';
    
    const rarityBtn = document.getElementById('rarityBtn');
    if (rarityBtn) {
        rarityBtn.classList.remove('active');
        rarityBtn.textContent = 'All Rarity';
    }
    
    // Reset sort buttons
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-sort="default"]').classList.add('active');
    
    // Re-render with all characters
    initializeGame();
}

function toggleHideCrossedOut() {
    hideCrossedOut = !hideCrossedOut;
    const hideBtn = document.getElementById('hideBtn');
    
    if (hideCrossedOut) {
        hideBtn.classList.add('active');
        hideBtn.textContent = 'Show Crossed Out';
    } else {
        hideBtn.classList.remove('active');
        hideBtn.textContent = 'Hide Crossed Out';
    }
    
    applyHideShowState();
}

function toggleRarityFilter() {
    const rarityBtn = document.getElementById('rarityBtn');
    
    // Cycle through: all -> 5star -> 4star -> all
    if (rarityFilter === 'all') {
        rarityFilter = '5star';
        rarityBtn.textContent = '5★ Only';
        rarityBtn.classList.add('active');
    } else if (rarityFilter === '5star') {
        rarityFilter = '4star';
        rarityBtn.textContent = '4★ Only';
        rarityBtn.classList.add('active');
    } else {
        rarityFilter = 'all';
        rarityBtn.textContent = 'All Rarity';
        rarityBtn.classList.remove('active');
    }
    
    initializeGame(); // Re-render with new filter
}

function applyHideShowState() {
    const cards = document.querySelectorAll('.character-card');
    
    cards.forEach(card => {
        if (hideCrossedOut && card.classList.contains('crossed-out')) {
            card.style.display = 'none';
        } else {
            card.style.display = '';
        }
    });
}

function getTraitPart(traits, type) {
    const [weapon, vision] = traits.split(', ').map(x => x.trim());
    if (type === 'vision') return vision;
    if (type === 'weapon') return weapon;
    return '';
}

function sortCharacters(sortValue) {
    if (sortValue === 'name') {
        characters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'vision') {
        characters.sort((a, b) => getTraitPart(a.traits, 'vision').localeCompare(getTraitPart(b.traits, 'vision')));
    } else if (sortValue === 'weapon') {
        characters.sort((a, b) => getTraitPart(a.traits, 'weapon').localeCompare(getTraitPart(b.traits, 'weapon')));
    } else {
        characters.sort((a, b) => a.originalIndex - b.originalIndex); // Default
    }

    initializeGame(); // Re-render with new order
}

function setupSortBar() {
    const buttons = document.querySelectorAll('.sort-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Sort characters by data-sort value
            const sortValue = btn.dataset.sort;
            sortCharacters(sortValue);
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeGame();
    setupSortBar();
    
    // Add resize listener for responsive behavior
    window.addEventListener('resize', handleResize);
    
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add viewport meta tag handling for better mobile experience
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
});