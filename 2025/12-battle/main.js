const grid = document.getElementById('grid');
const note = document.getElementById('note');
const noteContent = document.getElementById('noteContent');

const rows = 10;
const cols = 10;

// Define targets with notes (multi-cell targets allowed)
const targets = {
  "1-2": `
    <span style='font-size: 1rem;'>#12AG34</span>
    <p>Report: Expeditionary Engagement</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: Unknown Entity</p>
    <hr/>
    <p>Description: We came across a strange entity that upon approach we deemed a threat.
    One of our XM-44 streamline naval "trident" missiles were launched at the target. Our trackers indicated a direct hit. No remains of target were found afterwards. Although a strong smelled lingered in the area.
    </p>
    `,
  "1-3": `
    <span style='font-size: 1rem;'>#44GH36L</span>
    <p>Report: Expeditionary Engagement</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: Large Creature</p>
    <hr/>
    <p>Description: A large creature of unknown origin and considerable size attached to our vessel. Our cannons manage to ward it off for now but we took some damage.
    The creature may yet return. It can be described as having multiple arms with misshapen hand-like appendages at their ends.
    </p>
    `,
  "1-4": `
    <span style='font-size: 1rem;'>#55OOASF</span>
    <p>Report: Expeditionary Engagement</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: Large Creatures</p>
    <hr/>
    <p>Description: Crew keep reporting sightings in the area, especially at night. Stories persist of mermaid like beings following the ship. Their tails are claimed to glow.
    Some even report hearing them sing songs in a weird alien tone and rhythm. The melodies are natural in a soothing way. Crew has been ordered not to engage with the supposed creatures.
    Our expedition in the uncharted waters continue.
    </p>
    `,
  "3-5": `
    <span style='font-size: 1rem;'>#JDIF88A</span>
    <p>Report: Scouting Assignment</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: Ruopou Islands</p>
    <hr/>
    <p>Description: We've been re-routed briefly to provide support for an oncoming fleet. Our assignment involves scouting the area that should reportedly contain the Ruopou Islands.
    The island chain has long been shrouded by dense weather and unforgiving waves. Our vessel should be enough to perform some scouting of the area in preparation of an assault.
    Rumours swirl the island is cursed and its inhabitants are savage cannibals. Such old and discriminatory sea tales were ordered to not be tolerated.
    </p>
    `,
  "6-7": `
    <span style='font-size: 1rem;'>#035JFKDA</span>
    <p>Report: Naval Engagement</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: SS Phaeton(?)</p>
    <hr/>
    <p>Description: We encountered another enemy vessel flying JPNDI colours. This time it was a destroyer capable of matching our own vessel in firepower.
    Once again we took rapid action and swiftly deployed another IBSTAC missile alongside 4 tridents to its position. All seemed to hit target dead on.
    Target vanished without realizing it had been in our proximity. There was less celebration amongst the crew this time, as rumors spread of it being another ghost ship.
    </p>
    `,
  "6-8": `
    <span style='font-size: 1rem;'>#144FADAA5</span>
    <p>Report: Naval Engagement</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: SS Phaeton(?)</p>
    <hr/>
    <p>Description: We encountered an enemy vessel belonging to the JPNDI 5th armada. It appeared to be a scouting vessel and we were quick in our approach to destroy it.
    We determined its position and attacked it with several inter-ballistic sea-to-air conductor missiles. The vessel was summarily destroyed with no known survivors.
    Strangely, we found that the ship had no tried to escape nor had it tried to communicate its position to its allies.
    </p>
    `,
  "6-9": `
    <span style='font-size: 1rem;'>#115J335</span>
    <p>Report: Naval Engagement</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: SS Phaeton(?)</p>
    <hr/>
    <p>Description: This was our third encounter with an enemy JPNDI ship, and our third that we had managed to approach within striking range without detection. 
    There was an air of uncertainty at this point. Some of the crew insisted we had already sunk this ship before and felt weary of wasting more of our diminishing arsenal.
    This time, we sent shock volleys their way in an attempt to draw their attention towards a trap. The ship never responded. We decided it may be a trap and disengaged.
    </p>
    `,
  "9-0": `
    <span style='font-size: 1rem;'>#AAJGKL2</span>
    <p>Report: Dredging Wreck</p>
    <p>Combatant: SS Nerosia-Fin</p>
    <p>Target: SS Rutyk</p>
    <hr/>
    <p>Description: Higher-ups gave us the location of a fallen allied vessel in this area. We spent several hours dredging the site for the wreck. Orders included to obtain the ship's secrets.
    They never told us what, just that their black box would be enough. We never managed to find the wreck. But some of the crew reported seeing some of the survivors floating away into the horizon. Too far for help.
    </p>
    `,
};

let hits = 0;
const totalTargets = Object.keys(targets).length;

// Create grid cells
for(let r=0; r<rows; r++){
  for(let c=0; c<cols; c++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = r;
    cell.dataset.col = c;
    cell.setAttribute('tabIndex', 0)
    cell.addEventListener('click', () => cellClicked(r, c, cell));
    cell.addEventListener('keydown', function(event) {
      if (event.key === "Enter") {
        cellClicked(r, c, cell);
      }
    })
    grid.appendChild(cell);
  }
}

function cellClicked(r, c, cell){
  const key = `${r}-${c}`;
  if(cell.classList.contains('hit') || cell.classList.contains('miss')) return;

  if(targets[key]){
    hits++;
    cell.textContent = 'O';
    cell.classList.add('hit');
    showNote(targets[key]);
    if(hits === totalTargets){
      console.log("All targets found!");
    }
  } else {
    cell.textContent = 'X';
    cell.classList.add('miss');
  }
}

function showNote(content){
  noteContent.innerHTML = content;
  note.style.display = 'block';
  note.style.textAlign = 'left';
}

function closeNote(){
  note.style.display = 'none';
}