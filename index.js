const libOne = document.getElementById('lib-1'); //lib 1 button
const libTwo = document.getElementById('lib-2'); //lib 2 button
const libThree = document.getElementById('lib-3'); //lib 3 button
const beatName = document.getElementById('beat-name'); //display name
const padContainer = document.getElementById('pad-container'); //pad container div


//press key event handler
let selectedLib;
const pressKeyHandler = (e) => {
    switch (e.keyCode){
        case 65:
            classClick('A');
            const filterA = selectedLib.filter((pad) => pad.key === 'A');
            playSound(filterA[0].sound, filterA[0].name);
            break;
        case 83:
            classClick('S');
            const filterS = selectedLib.filter((pad) => pad.key === 'S');
            playSound(filterS[0].sound, filterS[0].name);
            break;
        case 68:
            classClick('D');
            const filterD = selectedLib.filter((pad) => pad.key === 'D');
            playSound(filterD[0].sound, filterD[0].name);
            break;
        case 70:
            classClick('F');
            const filterF = selectedLib.filter((pad) => pad.key === 'F');
            playSound(filterF[0].sound, filterF[0].name);
            break;
        case 71:
            classClick('G');
            const filterG = selectedLib.filter((pad) => pad.key === 'G');
            playSound(filterG[0].sound, filterG[0].name);
            break;
        case 72:
            classClick('H');
            const filterH = selectedLib.filter((pad) => pad.key === 'H');
            playSound(filterH[0].sound, filterH[0].name);
            break;
        case 74:
            classClick('J');
            const filterJ = selectedLib.filter((pad) => pad.key === 'J');
            playSound(filterJ[0].sound, filterJ[0].name);
            break;
        case 75:
            classClick('K');
            const filterK = selectedLib.filter((pad) => pad.key === 'K');
            playSound(filterK[0].sound, filterK[0].name);
            break;
        case 76:
            classClick('L');
            const filterL = selectedLib.filter((pad) => pad.key === 'L');
            playSound(filterL[0].sound, filterL[0].name);
            break;
        case 49:
            selectedLib = libraryOne;
            createPads(libraryOne);
            break;
        case 50:
            selectedLib = libraryTwo;
            createPads(libraryTwo);
            break;
        case 51:
            selectedLib = libraryThree;
            createPads(libraryThree);
            break;
        default:
            console.log(`${e.keyCode} does not have a function in this drum machine`);
            break;
         }
    };


//keys event listeners
document.addEventListener('keydown', pressKeyHandler);

//audio element generator
function sound(src){
    this.sound = document.createElement('audio'); //create audio html element
    this.sound.src = src; //set the src attribute to the link passed
    this.sound.setAttribute('preload', 'auto'); //preload sounds
    this.sound.setAttribute('controls', 'none'); // hide controls
    this.sound.classList.add('clip'); //each audio element
    this.sound.style.display = 'none'; //hide audio element
    document.body.appendChild(this.sound); //render created audio element into the DOM
    this.play = function() {
        this.sound.play(); //play the sound
    };
    this.stop = function() {
        this.sound.pause(); //pause the sound    
    };
}

//each library is an array of objects (sound fn, name string, key string)

//library one
oneA = new sound('./sounds/library1/jc_ma_cassette_piano_one_shot_blushplus_Bbmin.wav');
oneS = new sound('./sounds/library1/jc_ma_cassette_piano_one_shot_muted_plus_Fmin.wav');
oneD = new sound('./sounds/library1/jc_ma_kick_one_shot_synthetic_tape_airgun.wav');
oneF = new sound('./sounds/library1/jc_ma_snare_one_shot_live_tape_sp16.wav');
oneG = new sound('./sounds/library1/jc_ma_hat_closed_one_shot_tape_cut.wav');
oneH = new sound('./sounds/library1/jc_ma_hat_open_one_shot_tape_blend.wav');
oneJ = new sound('./sounds/library1/jc_ma_hat_closed_one_shot_tape_tardyflam.wav');
oneK = new sound('./sounds/library1/jc_wtr_perc_hand.wav');
oneL = new sound('./sounds/library1/jc_wtr_perc_rattle_hi.wav');


libraryOne = [
    {
        sound: oneA,
        name: 'Bb minor chord',
        key: 'A'
    },

    {
        sound: oneS,
        name: 'F minor chord',
        key: 'S'
    },

    {
        sound: oneD,
        name: 'BOOOM',
        key: 'D'
    },

    {
        sound: oneF,
        name: 'KAAAAH',
        key: 'F'
    },

    {
        sound: oneG,
        name: 'TICKK',
        key: 'G'
    },

    {
        sound: oneH,
        name: 'TAAAH',
        key: 'H'
    },

    {
        sound: oneJ,
        name: 'TICKTAAAH',
        key: 'J'
    },

    {
        sound: oneK,
        name: 'CLAP',
        key: 'K'
    },
    
    {
        sound: oneL,
        name: 'CLAAAANG',
        key: 'L'
    }

]


//library two
twoA = new sound('./sounds/library2/jc_wtr_synth__Dmaj9.wav');
twoS = new sound('./sounds/library2/jc_wtr_synth__Emin7.wav');
twoD = new sound('./sounds/library2/jc_wtr_fx_crystals.wav');
twoF = new sound('./sounds/library2/jc_wtr_kick_synth.wav');
twoG = new sound('./sounds/library2/jc_wtr_snare_808ish.wav');
twoH = new sound('./sounds/library2/jc_wtr_snare_win.wav');
twoJ = new sound('./sounds/library2/jc_wtr_hihat_clack.wav');
twoK = new sound('./sounds/library2/jc_wtr_synth__Cmaj.wav');
twoL = new sound('./sounds/library2/jc_wtr_synth__Eaug.wav');

libraryTwo = [
    {
        sound: twoA,
        name: 'Dmaj9 Chord',
        key: 'A'
    },

    {
        sound: twoS,
        name: 'Emin7 Chord',
        key: 'S'
    },

    {
        sound: twoD,
        name: 'PEWPEW',
        key: 'D'
    },

    {
        sound: twoF,
        name: 'BOOOOM',
        key: 'F'
    },

    {
        sound: twoG,
        name: 'KAAAAH',
        key: 'G'
    },

    {
        sound: twoH,
        name: 'BLUP',
        key: 'H'
    },

    {
        sound: twoJ,
        name: 'CLAAAACK',
        key: 'J'
    },

    {
        sound: twoK,
        name: 'Cmaj Chord',
        key: 'K'
    },

    {
        sound: twoL,
        name: 'Eaug Chord',
        key: 'L'
    }


]


//library three
threeA = new sound('./sounds/library3/MUNA_synth_lead_loop_synth_chug_8th_notes_bay_120_Fmaj.wav');
threeS = new sound('./sounds/library3/MUNA_synth_lead_loop_hollow_droplets_ash_120_Amaj.wav');
threeD = new sound('./sounds/library3/MUNA_percussion_loop_outerspace_raygun_120.wav');
threeF = new sound('./sounds/library3/MUNA_synth_lead_loop_arpeggio_hollow_detuned_raindrops_aloe_120_Emaj.wav');
threeG = new sound('./sounds/library3/MUNA_drum_one_shot_fat_pop_kick_performers.wav');
threeH = new sound('./sounds/library3/MUNA_drum_one_shot_big_gated_snare_thrill.wav');
threeJ = new sound('./sounds/library3/MUNA_drum_one_shot_live_hihat_open_parodies.wav');
threeK = new sound('./sounds/library3/MUNA_song_starter_loop_ebow_120_Amaj.wav');
threeL = new sound('./sounds/library3/MUNA_vocal_vocoder_aah_riff_verb_fans_flat_Emaj.wav');

libraryThree = [
    {
        sound: threeA,
        name: 'Fmaj Synth',
        key: 'A'
    },

    {
        sound: threeS,
        name: 'Amaj Synth',
        key: 'S'
    },

    {
        sound: threeD,
        name: 'Outerspace Raygun',
        key: 'D'
    },

    {
        sound: threeF,
        name: 'Emaj Synth',
        key: 'F'
    },

    {
        sound: threeG,
        name: 'BOOOOM',
        key: 'G'
    },

    {
        sound: threeH,
        name: 'KAAAAAH',
        key: 'H'
    },

    {
        sound: threeJ,
        name: 'SPLAAAASH',
        key: 'J'
    },

    {
        sound: threeK,
        name: 'Amaj7 ebow',
        key: 'K'
    },

    {
        sound: threeL,
        name: 'Emaj7 vocoder',
        key: 'L'
    }

]

//pad element generator
function newPad(pad) {
    const { sound, name, key } = pad; //destructing provided pad object
    this.newPad = document.createElement('div'); //create div
    this.newPad.classList.add('drum-pad'); //add the drum-pad class to it
    this.newPad.setAttribute('id', key); //sets the id of the element to the pad object key
    this.newPad.setAttribute('type', 'button'); //sets the div type to button
    this.newPad.innerText = key; //render the key
    this.newPad.onclick = () => {
        playSound(sound, name);
        classClick(key);
    };
    this.newPad.onmouseover = () => classHover(key);
    this.newPad.onmouseleave = () => {
        this.newPad.classList.remove('drum-pad-hover'); //removes class when mouse hovers out
    };
    padContainer.appendChild(this.newPad); // add this new pad created to the pad-container div
}

//create pad function
const createPads = (library) => {
    while (padContainer.firstChild){
        padContainer.removeChild(padContainer.lastChild);
    }
    library.map((pad) => {
        new newPad(pad);
    });
};


//play sound function
const playSound = (sound, name) => {
    sound.play(); //plays the sound 
    beatName.innerHTML = name; //displays sound name
};

//edit class when hover
const classHover = (key) => {
    const pad = document.getElementById(key); //get current pad in
    pad.classList.add('drum-pad-hover'); //add a class when mouse hovers in
};

//edit class when clicking
const classClick = (key) => {
    const pad = document.getElementById(key); //get current pad id
    pad.classList.add('drum-pad-clicked'); //add class when pad is clicked
    setTimeout(() => {
        pad.classList.remove('drum-pad-clicked'); //removes that class after hald a second
    }, 500);
};

//render library on first load
window.onload = () => {
    selectedLib = libraryOne;
    createPads(libraryOne);
}

//render libraries on click
libOne.onclick = () => {
    selectedLib = libraryOne;
    createPads(libraryOne);
};
libTwo.onclick = () => {
    selectedLib = libraryTwo;
    createPads(libraryTwo);
};
libThree.onclick = () => {
    selectedLib = libraryThree;
    createPads(libraryThree);
}; 


