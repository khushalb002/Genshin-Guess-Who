const characters = [
    {
        name: "Lumine",
        image: "media/Lumine_Icon.png",
        traits: "Sword, Visionless",
        colorClass: "char-1"
    },
    {
        name: "Aether",
        image: "media/Aether_Icon.png",
        traits: "Sword, Visionless",
        colorClass: "char-2"
    },
    {
        name: "Albedo",
        image: "media/Albedo_Icon.png",
        traits: "Sword, Geo",
        colorClass: "char-3"
    },
    {
        name: "Alhaitham",
        image: "media/Alhaitham_Icon.png",
        traits: "Sword, Dendro",
        colorClass: "char-4"
    },
    {
        name: "Aloy",
        image: "media/Aloy_Icon.png",
        traits: "Bow, Cryo",
        colorClass: "char-5"
    },
    {
        name: "Arlecchino",
        image: "media/Arlecchino_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-6"
    },
    {
        name: "Ayaka",
        image: "media/Kamisato_Ayaka_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-7"
    },
    {
        name: "Ayato",
        image: "media/Kamisato_Ayato_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-8"
    },
    {
        name: "Baizhu",
        image: "media/Baizhu_Icon.png",
        traits: "Catalyst, Dendro",
        colorClass: "char-9"
    },
    {
        name: "Chasca",
        image: "media/Chasca_Icon.png",
        traits: "Bow, Anemo",
        colorClass: "char-10"
    },
    {
        name: "Childe",
        image: "media/Tartaglia_Icon.png",
        traits: "Bow, Hydro",
        colorClass: "char-11"
    },
    {
        name: "Chiori",
        image: "media/Chiori_Icon.png",
        traits: "Sword, Geo",
        colorClass: "char-12"
    },
    {
        name: "Citlali",
        image: "media/Citlali_Icon.png",
        traits: "Catalyst, Cryo",
        colorClass: "char-1"
    },
    {
        name: "Clorinde",
        image: "media/Clorinde_Icon.png",
        traits: "Sword, Electro",
        colorClass: "char-2"
    },
    {
        name: "Cyno",
        image: "media/Cyno_Icon.png",
        traits: "Polearm, Electro",
        colorClass: "char-3"
    },
    {
        name: "Dahlia",
        image: "media/Dahlia_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-4"
    },
    {
        name: "Dehya",
        image: "media/Dehya_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-5"
    },
    {
        name: "Diluc",
        image: "media/Diluc_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-6"
    },
    {
        name: "Emilie",
        image: "media/Emilie_Icon.png",
        traits: "Polearm, Dendro",
        colorClass: "char-7"
    },
    {
        name: "Escoffier",
        image: "media/Escoffier_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-8"
    },
    {
        name: "Eula",
        image: "media/Eula_Icon.png",
        traits: "Claymore, Cryo",
        colorClass: "char-9"
    },
    {
        name: "Furina",
        image: "media/Furina_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-10"
    },
    {
        name: "Ganyu",
        image: "media/Ganyu_Icon.png",
        traits: "Bow, Cryo",
        colorClass: "char-11"
    },
    {
        name: "Hu Tao",
        image: "media/Hu_Tao_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-12"
    },
    {
        name: "Itto",
        image: "media/Arataki_Itto_Icon.png",
        traits: "Claymore, Geo",
        colorClass: "char-1"
    },
    {
        name: "Jean",
        image: "media/Jean_Icon.png",
        traits: "Sword, Anemo",
        colorClass: "char-2"
    },
    {
        name: "Kazuha",
        image: "media/Kaedehara_Kazuha_Icon.png",
        traits: "Sword, Anemo",
        colorClass: "char-3"
    },
    {
        name: "Keqing",
        image: "media/Keqing_Icon.png",
        traits: "Sword, Electro",
        colorClass: "char-4"
    },
    {
        name: "Kinich",
        image: "media/Kinich_Icon.png",
        traits: "Claymore, Dendro",
        colorClass: "char-5"
    },
    {
        name: "Klee",
        image: "media/Klee_Icon.png",
        traits: "Catalyst, Pyro",
        colorClass: "char-6"
    },
    {
        name: "Kokomi",
        image: "media/Sangonomiya_Kokomi_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-7"
    },
    {
        name: "Lyney",
        image: "media/Lyney_Icon.png",
        traits: "Bow, Pyro",
        colorClass: "char-8"
    },
    {
        name: "Mavuika",
        image: "media/Mavuika_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-9"
    },
    {
        name: "Mona",
        image: "media/Mona_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-10"
    },
    {
        name: "Mualani",
        image: "media/Mualani_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-11"
    },
    {
        name: "Nahida",
        image: "media/Nahida_Icon.png",
        traits: "Catalyst, Dendro",
        colorClass: "char-12"
    },
    {
        name: "Navia",
        image: "media/Navia_Icon.png",
        traits: "Claymore, Geo",
        colorClass: "char-1"
    },
    {
        name: "Neuvillette",
        image: "media/Neuvillette_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-2"
    },
    {
        name: "Nilou",
        image: "media/Nilou_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-3"
    },
    {
        name: "Qiqi",
        image: "media/Qiqi_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-4"
    },
    {
        name: "Raiden",
        image: "media/Raiden_Shogun_Icon.png",
        traits: "Polearm, Electro",
        colorClass: "char-5"
    },
    {
        name: "Shenhe",
        image: "media/Shenhe_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-6"
    },
    {
        name: "Sigewinne",
        image: "media/Sigewinne_Icon.png",
        traits: "Bow, Hydro",
        colorClass: "char-7"
    },
    {
        name: "Skirk",
        image: "media/Skirk_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-8"
    },
    {
        name: "Tighnari",
        image: "media/Tighnari_Icon.png",
        traits: "Bow, Dendro",
        colorClass: "char-9"
    },
    {
        name: "Varesa",
        image: "media/Varesa_Icon.png",
        traits: "Catalyst, Electro",
        colorClass: "char-10"
    },
    {
        name: "Venti",
        image: "media/Venti_Icon.png",
        traits: "Bow, Anemo",
        colorClass: "char-11"
    },
    {
        name: "Wanderer",
        image: "media/Wanderer_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-12"
    },
    {
        name: "Wriothesley",
        image: "media/Wriothesley_Icon.png",
        traits: "Catalyst, Cryo",
        colorClass: "char-1"
    },
    {
        name: "Xianyun",
        image: "media/Xianyun_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-2"
    },
    {
        name: "Xiao",
        image: "media/Xiao_Icon.png",
        traits: "Polearm, Anemo",
        colorClass: "char-3"
    },
    {
        name: "Xilonen",
        image: "media/Xilonen_Icon.png",
        traits: "Sword, Geo",
        colorClass: "char-4"
    },
    {
        name: "Yae Miko",
        image: "media/Yae_Miko_Icon.png",
        traits: "Catalyst, Electro",
        colorClass: "char-5"
    },
    {
        name: "Yelan",
        image: "media/Yelan_Icon.png",
        traits: "Bow, Hydro",
        colorClass: "char-6"
    },
    {
        name: "Yoimiya",
        image: "media/Yoimiya_Icon.png",
        traits: "Bow, Pyro",
        colorClass: "char-7"
    },
    {
        name: "Yumemizuki Mizuki",
        image: "media/Yumemizuki_Mizuki_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-8"
    },
    {
        name: "Zhongli",
        image: "media/Zhongli_Icon.png",
        traits: "Polearm, Geo",
        colorClass: "char-9"
    },
    {
        name: "Amber",
        image: "media/Amber_Icon.png",
        traits: "Bow, Pyro",
        colorClass: "char-10"
    },
    {
        name: "Barbara",
        image: "media/Barbara_Icon.png",
        traits: "Catalyst, Hydro",
        colorClass: "char-11"
    },
    {
        name: "Beidou",
        image: "media/Beidou_Icon.png",
        traits: "Claymore, Electro",
        colorClass: "char-12"
    },
    {
        name: "Bennett",
        image: "media/Bennett_Icon.png",
        traits: "Sword, Pyro",
        colorClass: "char-1"
    },
    {
        name: "Candace",
        image: "media/Candace_Icon.png",
        traits: "Polearm, Hydro",
        colorClass: "char-2"
    },
    {
        name: "Charlotte",
        image: "media/Charlotte_Icon.png",
        traits: "Catalyst, Cryo",
        colorClass: "char-3"
    },
    {
        name: "Chevreuse",
        image: "media/Chevreuse_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-4"
    },
    {
        name: "Chongyun",
        image: "media/Chongyun_Icon.png",
        traits: "Claymore, Cryo",
        colorClass: "char-5"
    },
    {
        name: "Collei",
        image: "media/Collei_Icon.png",
        traits: "Bow, Dendro",
        colorClass: "char-6"
    },
    {
        name: "Diona",
        image: "media/Diona_Icon.png",
        traits: "Bow, Cryo",
        colorClass: "char-7"
    },
    {
        name: "Dori",
        image: "media/Dori_Icon.png",
        traits: "Claymore, Electro",
        colorClass: "char-8"
    },
    {
        name: "Faruzan",
        image: "media/Faruzan_Icon.png",
        traits: "Bow, Anemo",
        colorClass: "char-9"
    },
    {
        name: "Fischl",
        image: "media/Fischl_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-10"
    },
    {
        name: "Freminet",
        image: "media/Freminet_Icon.png",
        traits: "Claymore, Cryo",
        colorClass: "char-11"
    },
    {
        name: "Gaming",
        image: "media/Gaming_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-12"
    },
    {
        name: "Gorou",
        image: "media/Gorou_Icon.png",
        traits: "Bow, Geo",
        colorClass: "char-1"
    },
    {
        name: "Heizou",
        image: "media/Shikanoin_Heizou_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-2"
    },
    {
        name: "Iansan",
        image: "media/Iansan_Icon.png",
        traits: "Polearm, Electro",
        colorClass: "char-3"
    },
    {
        name: "Ifa",
        image: "media/Ifa_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-4"
    },
    {
        name: "Kachina",
        image: "media/Kachina_Icon.png",
        traits: "Polearm, Geo",
        colorClass: "char-5"
    },
    {
        name: "Kaeya",
        image: "media/Kaeya_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-6"
    },
    {
        name: "Kaveh",
        image: "media/Kaveh_Icon.png",
        traits: "Claymore, Dendro",
        colorClass: "char-7"
    },
    {
        name: "Kirara",
        image: "media/Kirara_Icon.png",
        traits: "Sword, Dendro",
        colorClass: "char-8"
    },
    {
        name: "Kuki Shibobu",
        image: "media/Kuki_Shinobu_Icon.png",
        traits: "Sword, Electro",
        colorClass: "char-9"
    },
    {
        name: "Lanyan",
        image: "media/Lan_Yan_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-10"
    },
    {
        name: "Layla",
        image: "media/Layla_Icon.png",
        traits: "Sword, Cryo",
        colorClass: "char-11"
    },
    {
        name: "Lisa",
        image: "media/Lisa_Icon.png",
        traits: "Catalyst, Electro",
        colorClass: "char-12"
    },
    {
        name: "Lynette",
        image: "media/Lynette_Icon.png",
        traits: "Sword, Anemo",
        colorClass: "char-1"
    },
    {
        name: "Mika",
        image: "media/Mika_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-2"
    },
    {
        name: "Ningguang",
        image: "media/Ningguang_Icon.png",
        traits: "Catalyst, Geo",
        colorClass: "char-3"
    },
    {
        name: "Noelle",
        image: "media/Noelle_Icon.png",
        traits: "Claymore, Geo",
        colorClass: "char-4"
    },
    {
        name: "Ororon",
        image: "media/Ororon_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-5"
    },
    {
        name: "Razor",
        image: "media/Razor_Icon.png",
        traits: "Claymore, Electro",
        colorClass: "char-6"
    },
    {
        name: "Rosaria",
        image: "media/Rosaria_Icon.png",
        traits: "Polearm, Cryo",
        colorClass: "char-7"
    },
    {
        name: "Sara",
        image: "media/Kujou_Sara_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-8"
    },
    {
        name: "Sayu",
        image: "media/Sayu_Icon.png",
        traits: "Claymore, Anemo",
        colorClass: "char-9"
    },
    {
        name: "Sethos",
        image: "media/Sethos_Icon.png",
        traits: "Bow, Electro",
        colorClass: "char-10"
    },
    {
        name: "Sucrose",
        image: "media/Sucrose_Icon.png",
        traits: "Catalyst, Anemo",
        colorClass: "char-11"
    },
    {
        name: "Thoma",
        image: "media/Thoma_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-12"
    },
    {
        name: "Xiangling",
        image: "media/Xiangling_Icon.png",
        traits: "Polearm, Pyro",
        colorClass: "char-1"
    },
    {
        name: "Xingqiu",
        image: "media/Xingqiu_Icon.png",
        traits: "Sword, Hydro",
        colorClass: "char-2"
    },
    {
        name: "Xinyan",
        image: "media/Xinyan_Icon.png",
        traits: "Claymore, Pyro",
        colorClass: "char-3"
    },
    {
        name: "Yanfei",
        image: "media/Yanfei_Icon.png",
        traits: "Catalyst, Pyro",
        colorClass: "char-4"
    },
    {
        name: "Yaoyao",
        image: "media/Yaoyao_Icon.png",
        traits: "Polearm, Dendro",
        colorClass: "char-5"
    },
    {
        name: "Yun Jin",
        image: "media/Yun_Jin_Icon.png",
        traits: "Polearm, Geo",
        colorClass: "char-6"
    }
];

characters.forEach((c, i) => c.originalIndex = i);

let crossedOutCount = 0;

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

function initializeTheme() {
    // For future localStorage support
}

function initializeGame() {
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = '';

    characters.forEach((character, index) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.dataset.index = index;

        card.innerHTML = `
            <div class="character-portrait ${character.colorClass}">
                <img src="${character.image}" alt="${character.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='👤';">
            </div>
            <div class="character-name">${character.name}</div>
            <div class="character-traits">${character.traits}</div>
        `;

        card.addEventListener('click', () => toggleCrossOut(card, index));
        gameGrid.appendChild(card);
    });

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
    updateStats();
}

function updateStats() {
    const remaining = characters.length - crossedOutCount;
    document.getElementById('remainingCount').textContent = `${remaining} characters remaining`;
    document.getElementById('crossedCount').textContent = `${crossedOutCount} crossed out`;
}

function resetGame() {
    const cards = document.querySelectorAll('.character-card');
    cards.forEach(card => {
        card.classList.remove('crossed-out');
    });
    crossedOutCount = 0;
    updateStats();
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
});