const Evidence = Object.freeze({
    SPIRIT_BOX: 'SPIRIT_BOX',
    FINGERPRINTS: 'FINGERPRINTS',
    GHOST_WRITING: 'GHOST_WRITING',
    FREEZING_TEMPERATURES: 'FREEZING_TEMPERATURES',
    EMF_LEVEL_5: 'EMF_LEVEL_5',
    GHOST_ORB: 'GHOST_ORB',
    DOTS_PROJECTOR: 'DOTS_PROJECTOR',
});

class Ghost {
    /**
     * @type {string}
     */
    name
    /**
     * @type {string}
     */
    description;
    /**
     * @type {string}
     */
    strength;
    /**
     * @type {string}
     */
    weakness;
    /**
     * @type {Evidence[]}
     */
    evidence;
}

const ghostIntroduction = `A Ghost is an evil spirit of a dead person that feeds off peoples' fear. 
They are created from violent, sudden deaths. If disturbed they can wreck havoc across neighbourhoods 
and they have also been known to be up to 1000 years old. This guide will help you understand what you need to survive. 
Evidence of the supernatural is high in demand which means it can sell. Hunting ghosts however is an extremely dangerous 
task. It will be your job to enter locations and gather as much evidence of the supernatural as possible, just remember, 
don't outstay your welcome. In order to discover what type of ghost you are dealing with, you will have to learn each 
ghost's strengths and weaknesses.`;

const huntersSanity = `In your investigation into the supernatural, you will need to make sure your sanity is kept high. 
All types of ghosts prey on our sanity making them stronger the more insane we become. To keep your sanity high around 
the paranormal, make sure you stay in lit areas. The digital clock in the truck shows you how long you have before the 
ghost will get angry and lower your sanity faster, use this time to find the ghost and setup equipment. If your sanity 
becomes too low, the recommended action is to leave.`;

const smudging = `This has always been one of the main ways to weaken the more common ghosts. To do this you will need 
to grab some smudge sticks and burn it near the ghost.`;

const ghostWriting = `Paranormal investigators started using pen and paper as an alternative form of communication to 
the spirit box. It was later discovered that only certain types of ghosts will write.`;

const ouijaBoard = `The most common way of accidentally summoning a ghost is with a ouija board, so you may come across 
these during your investigations. Be careful if you choose to use it as they have been known to lower your sanity. To 
use one, activate it and then ask a question with your voice.`;

const emfLevel5 = `Some ghosts will leave emf traces near them that will show up on an EMF reader as level 5.`;

const spiritBox = `Only certain ghosts will talk through a spirit box when asked a question with your voice. 
Make sure the lights are off.`;

const freezingTemperaturs = `All ghosts make areas cold, however some ghosts have been known to drop temperatures 
even further.`;

const fingerprints = `Some ghosts have been known to leave fingerprints on doors, windows, and light switches. This 
will show up with a UV light.`;

const ghostOrb = `The classic paranormal evidence, however not all ghosts have one. This will be visible on camera.`;

const ghostWritingBook = `Some ghosts are able to write inside this book if placed nearby.`;

/**
 * @type {Ghost}
 */
const spirit = {
    name: `Spirit`,
    description: `A spirit is the most common ghost you will come across, however it is still very powerful and 
    dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.`,
    strength: `Nothing.`,
    weakness: `Using smudge sticks on a spirit will stop it attacking for a long period of time.`,
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.SPIRIT_BOX,
      Evidence.GHOST_WRITING
    ]
};

/**
 * @type {Ghost}
 */
const wraith = {
    name: `Wraith`,
    description: `A wraith is one of the most dangerous ghosts you will find. It is also the only known ghost 
    that has the ability of flight and has sometimes been known to travel through walls.`,
    strength: `Wraiths almost never touch the ground, meaning it can't be tracked by footsteps.`,
    weakness: `Wraiths have a toxic reaction to salt.`,
    evidence: [
      Evidence.EMF_LEVEL_5,
      Evidence.SPIRIT_BOX,
      Evidence.DOTS_PROJECTOR,
    ]
};

/**
 * @type {Ghost}
 */
const phantom = {
    name: `Phantom`,
    description: `A phantom is a ghost that can possess the living, most commonly summoned by a ouija board. 
    It also induces fear into those around it.`,
    strength: `Looking at a phantom will considerably drop your sanity.`,
    weakness: `Taking a photo of the phantom will make it temporarily disappear.`,
    evidence: [
      Evidence.SPIRIT_BOX,
      Evidence.FINGERPRINTS,
      Evidence.DOTS_PROJECTOR,
    ]
};

/**
 * @type {Ghost}
 */
const poltergeist = {
    name: `Poltergeist`,
    description: `One of the most famous ghosts, a poltergeist, also known as a noisy ghost, can manipulate 
    objects around it to spread fear into its victims.`,
    strength: `A poltergeist can throw huge amounts of objects at once.`,
    weakness: `A poltergeist is almost innefective in an empty room.`,
    evidence: [
        Evidence.SPIRIT_BOX,
        Evidence.FINGERPRINTS,
        Evidence.GHOST_WRITING,
    ]
};

/**
 * @type {Ghost}
 */
const banshee = {
    name: `Banshee`,
    description: `A banshee is a natural hunter and will attack anything. It has been known to stalk its prey 
    one at a time until making its kill.`,
    strength: `A banshee will only target one person at a time.`,
    weakness: `Banshees fear the cricifix and will be less aggressive when near one.`,
    evidence: [
      Evidence.FINGERPRINTS,
      Evidence.GHOST_ORB,
      Evidence.DOTS_PROJECTOR,
    ]
};

/**
 * @type {Ghost}
 */
const jinn = {
    name: `Jinn`,
    description: `A jinn is a territorial ghost that will attack when threatened. It has also been known to be 
    able to travel at significant speed.`,
    strength: `A jinn will travel at a faster speed if its victim is far away.`,
    weakness: `Turning off the location's power source will prvent the jinn from using its ability.`,
    evidence: [
        Evidence.EMF_LEVEL_5,
        Evidence.FINGERPRINTS,
        Evidence.FREEZING_TEMPERATURES,
    ]
};

/**
 * @type {Ghost}
 */
const mare = {
    name: `Mare`,
    description: `A mare is the source of all nightmares, making it most powerful in the dark.`,
    strength: `A mare will have an increased chance to attack in the dark.`,
    weakness: `Turning the lights on around the mare will lower its chance to attack.`,
    evidence: [
        Evidence.SPIRIT_BOX,
        Evidence.GHOST_ORB,
        Evidence.GHOST_WRITING,
    ]
};

/**
 * @type {Ghost}
 */
const revenant = {
    name: `Revenant`,
    description: `A revenant is a slow but violent ghost that will attack indiscriminately. It has been rumored 
    to travel at a significantly high speed when hunting.`,
    strength: `A revenant will travel at a significantly faster speed when hunting a victim.`,
    weakness: `Hiding from the revenant will cause it to move very slowly.`,
    evidence: [
        Evidence.GHOST_ORB,
        Evidence.GHOST_WRITING,
        Evidence.FREEZING_TEMPERATURES,
    ]
};

/**
 * @type {Ghost}
 */
const shade = {
    name: `Shade`,
    description: `A shade is known to be a shy ghost. There is evidence that a shade will stop all paranormal 
    activity if there are multiple people nearby.`,
    strength: `Being shy means the ghost will be harder to find.`,
    weakness: `The ghost will not enter hunting mode if there is multiple people nearby`,
    evidence: [
        Evidence.EMF_LEVEL_5,
        Evidence.GHOST_WRITING,
        Evidence.FREEZING_TEMPERATURES,
    ]
};

/**
 * @type {Ghost}
 */
const demon = {
    name: `Demon`,
    description: `A demon is one of the worst ghosts you can encounter. It has been known to attack without reason.`,
    strength: `Demons will attack more often than any other ghost.`,
    weakness: `Asking a demon successful questions on the ouija board won't lower the user's sanity.`,
    evidence: [
        Evidence.FINGERPRINTS,
        Evidence.GHOST_WRITING,
        Evidence.FREEZING_TEMPERATURES,
    ]
};

/**
 * @type {Ghost}
 */
const yurei = {
    name: `Yurei`,
    description: `A yurei is a ghost that has returned to the physical world, usually for the purpose of revenge 
    or hatred.`,
    strength: `Yureis have been known to have a stronger effect on peoples' sanity.`,
    weakness: `Smudging the yurei's room will cause it to not wander around the location for a long time.`,
    evidence: [
        Evidence.GHOST_ORB,
        Evidence.FREEZING_TEMPERATURES,
        Evidence.DOTS_PROJECTOR,
    ]
};

/**
 * @type {Ghost}
 */
const oni = {
    name: `Oni`,
    description: `Onis are a cousin to the demon and possess extreme strength. There have been rumors that they 
    become more active around their prey.`,
    strength: `Onis are more active when people are nearby and have been seen moving objects at great speed.`,
    weakness: `Being more active will make the oni easier to find and identify.`,
    evidence: [
        Evidence.EMF_LEVEL_5,
        Evidence.FREEZING_TEMPERATURES,
        Evidence.DOTS_PROJECTOR,
    ]
};

/**
 * @type {Ghost}
 */
const hantu = {
    name: `Hantu`,
    description: `A Hantu is a rare ghost that can be found in hot climates. They are known to attack often during 
    cold weather.`,
    strength: `Lower temperatures can cause the Hantu to move at faster speeds.`,
    weakness: `A Hantu will move slower in warmer areas.`,
    evidence: [
        Evidence.FINGERPRINTS,
        Evidence.GHOST_ORB,
        Evidence.FREEZING_TEMPERATURES
    ]
}

/**
 * @type {Ghost}
 */
const yokai = {
    name: `Yokai`,
    description: `A Yokai is a common type of ghost that is attracted to human voices. They can usually be found 
    haunting family homes.`,
    strength: `Talking near a Yokai will anger it and increase its chance of attacking.`,
    weakness: `When hunting, a Yokai can only hear voices close to it.`,
    evidence: [
        Evidence.SPIRIT_BOX,
        Evidence.GHOST_ORB,
        Evidence.DOTS_PROJECTOR,
    ]
}

/**
 * @type {Ghost}
 */
const goryo = {
  name: `Goryo`,
  description: `When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.`,
  strength: `A Goryo will usually only show itself on camera if there are no people nearby.`,
  weakness: `They are rarely seen far from their place of death.`,
  evidence: [
    Evidence.EMF_LEVEL_5,
    Evidence.FINGERPRINTS,
    Evidence.DOTS_PROJECTOR,
  ]
}

/**
 * @type {Ghost}
 */
const myling = {
  name: `Myling`,
  description: `A Myling is a very vocal and active ghost. They are rumored to be quiet when hunting their prey.`,
  strength: `A Myling is known to be quieter when hunting.`,
  weakness: `Mylings more frequently make paranormal sounds`,
  evidence: [
    Evidence.EMF_LEVEL_5,
    Evidence.FINGERPRINTS,
    Evidence.GHOST_WRITING,
  ]
}

const ghosts = [
    spirit,
    wraith,
    phantom,
    poltergeist,
    banshee,
    jinn,
    mare,
    revenant,
    shade,
    demon,
    yurei,
    oni,
    hantu,
    yokai,
    goryo,
    myling
];

const ghostComponent = Vue.component('app-ghost', {
    template: `
        <div>
            <br/>
            <hr>
            <h3>
                {{ ghost.name }}
                <button class="float-right" @click="expanded = !expanded">
                    {{ expanded ?  'Collapse' : 'Expand' }}
                </button>
            </h3>

            <template v-if="expanded">
                <h4>Description:</h4>
                {{ ghost.description }}
                <h4>Strength:</h4>
                {{ ghost.strength }}
                <h4>Weakness:</h4>
                {{ ghost.weakness }}
                <h4>Evidence:</h4>
                {{ evidence }}
            </template>
        </div>
    `,
    props: ['ghost', 'expanded'],
    computed: {
        evidence() {
            let evidenceString = '';
            let evidences = [];
            for(let clue of this.ghost.evidence) {
                evidences.push(clue.split('_'));
            }

            for(let evidence of evidences) {
                let wordString = '';
                for(let word of evidence) {
                    let transformedWord = word.toLowerCase();
                    let wordArray = transformedWord.split('');
                    wordArray[0] = wordArray[0].toUpperCase();
                    transformedWord = wordArray.join('');

                    wordString += transformedWord;
                    wordString += ' ';
                }
                wordString = wordString.slice(0, wordString.length - 1);
                evidenceString += wordString;
                evidenceString += ', ';
            }
            evidenceString = evidenceString.slice(0, evidenceString.length - 2);
            return evidenceString;
        }
    }
});

new Vue({
    el: '#app',
    data: {
        clues: [],
        exclude: [],
        expanded: false,
        ghosts,
        ghostIntroduction,
        huntersSanity,
        smudging,
        ghostWriting,
        ouijaBoard,
        emfLevel5,
        spiritBox,
        freezingTemperaturs,
        fingerprints,
        ghostOrb,
        ghostWritingBook
    },
    computed: {
        filteredGhosts() {
            if(this.clues.length === 0 && this.exclude.length === 0) {
                return this.ghosts;
            }

            var filteredGhosts = this.ghosts;
            if(this.clues.length > 0) {
                filteredGhosts = filteredGhosts.filter(ghost => {
                    let containsAll = true;
                    for(let clue of this.clues) {
                        if(ghost.evidence.indexOf(clue) === -1) {
                            containsAll = false;
                            break;
                        }
                    }

                    return containsAll;
                });
            }

            if(this.exclude.length > 0) {
                filteredGhosts = filteredGhosts.filter(ghost => {
                    let containsAny = true;
                    for(let clue of ghost.evidence) {
                        if(this.exclude.indexOf(clue) !== -1) {
                            containsAny = false;
                            break;
                        }
                    }

                    return containsAny;
                });
            }

            return filteredGhosts;
        },
        availableClues() {
            return this.filteredGhosts
                .map(ghost => ghost.evidence)
                .reduce((previous, current) => {
                    for(let clue of current) {
                        if(previous.indexOf(clue) === -1) {
                            previous.push(clue);
                        }
                    }
                    return previous;
                }, [])
        }
    },
    components: {
        ghostComponent
    }
});