import { useState } from 'react'
import './App.css'
import Trivia from './Components/Trivia'

const questions = [
{question:"What year did the bombs drop?", optionA:"2075", optionB:"2080", optionC:"2077", optionD:"2100"},
{question:"What is arguably the most iconic quote from Fallout?",optionA:"Death Is A Preferable Alternative To Communism.", optionB:"I Don't Enjoy Killing But When Done Righteously, It's Just Another Chore", optionC:"War Never Changes", optionD:"It's The End Of The World, All Over Again"},
{question:"What is the New common Currency used in fallout?",optionA:"Ammo", optionB:"NCR dollars", optionC:"Nuka Cola", optionD:"Caps"},  
{question:"What is the G.O.A.T.?",optionA:"An experimental weapon", optionB:"A Vault-Tec test to determine a residents job", optionC:"A Vault-Tec test to determine a residents income", optionD:"A Vault-Tec test to determine a residents morals"},
{question:"What is the major source of power in Fallout?",optionA:"Wind Energy", optionB:"Geothermal Energy", optionC:"Nuclear Energy", optionD:"Solar Energy"},
{question:"Who are the Enclave?",optionA:"A self-proclaimed continuation of the pre-War United States", optionB:"THE BAD GUYS!!!!", optionC:"A Direct continuation of the pre-War United States", optionD:"A Direct continuation of the pre-War Communist China"},
{question:"In fallout 1, Why Was The Vault Dweller Sent Out Into The Wasteland?",optionA:"To trade with locals", optionB:"To locate a water chip", optionC:"To locate resources", optionD:"To stop 'The Master'"},
{question:"When was Nuka-Cola Invented?",optionA:"2075", optionB:"1998", optionC:"2044", optionD:"2025"},
{question:"What was the Secret ingredient in Nuka Cola Quantum?",optionA:"Micro-plastics", optionB:"Cocaine", optionC:"200% more sugar", optionD:"Radioactive Isotopes"},
{question:"How was the War between The U.S and China started?",optionA:"A Crisis over energy", optionB:"An assassination", optionC:"America invaded China", optionD:"China invaded America"},
{question:"How long do ghouls live for?",optionA:"Only a few years", optionB:"Average Human lifespan", optionC:"Centuries", optionD:"A few Decades"},
{question:"What was on The Platinum Chip?",optionA:"Operating System Upgrade For Mr. House's Computers And Defense Systems", optionB:"The location of the Enclave H.Q.", optionC:"Blueprints for new Robots", optionD:"Blueprints for a nuclear reactor"},
{question:"Which Country Was Annexed By The US?",optionA:"Mexico", optionB:"Brazil", optionC:"Canada", optionD:"Thailand"},
{question:"What Animal Did The Deathclaw Evolve From?",optionA:"Bearded Dragon", optionB:"Kamado Dragon", optionC:"Iguana", optionD:"Chameleon"},
{question:"What Creature Is The Result Of Mixing Rattlesnake And Coyote DNA?",optionA:"Bloat fly", optionB:"Nightstalker", optionC:"Shaky Snake", optionD:"Cazadore"},
{question:"In New Vegas, Which Group Is Best Known For Chem Trading?",optionA:"The Boomers", optionB:"The Khans", optionC:"The Powder Gangers", optionD:"The Vipers"},
{question:"Where was The Battle Of Anchorage Fought at?",optionA:"Antarctica", optionB:"Russia", optionC:"Alaska", optionD:"Greenland"},
{question:"How old is Rex?",optionA:"8", optionB:"22", optionC:"209", optionD:"109"},
{question:"When MacCready was younger, which Town was he the Mayor of?",optionA:"Rivet City", optionB:"Goodneighbor", optionC:"Megaton", optionD:"Little Lamplight"},
{question:"What does V.A.T.S. stand for?",optionA:"Vault-Tec Automatic Targeting System", optionB:"Vault-Tec Accurate Targeting System", optionC:"Vault-Tec Assisted Targeting System", optionD:"Very Accurate Targeting System"},
{question:"How many Vaults were designed to work properly as control Vaults?",optionA:"10", optionB:"12", optionC:"17", optionD:"20"},
{question:"What was the Experiment on Vault 101?",optionA:"Pumping psychoactive drugs into the circulation system", optionB:"The vault door would not seal properly, allowing radiation to seep in", optionC:"To test the role of the Overseer in a community that remains indefinitely isolated from the outside world", optionD:"None, it was one of the seventeen control Vaults"},
{question:"Who is the sheriff and mayor of Megaton?",optionA:"Colin Moriarty", optionB:"Deputy Weld", optionC:"Moira Brown", optionD:"Lucas Simms"},
{question:"How Long did The Great War last?",optionA:"2 Years", optionB:"2 Days", optionC:"2 Hours", optionD:"1 Hour"},
{question:"What is the G.E.C.K.'s Purpose?",optionA:"Creating and sustaining life in a post-War environment", optionB:"Locating Fresh water in a post-War environment", optionC:"Sends out an S.O.S. Message", optionD:"Contains Nuclear Launch Codes"},
{question:"Where does Fallout 1 take place?",optionA:"Nevada", optionB:"Northern California", optionC:"New Mexico", optionD:"Southern California"},
{question:"What company manufactures the Mr. Handy and Protectron Robots?",optionA:"Med-Tech", optionB:"RobCo Industries", optionC:"Wattz Electronics", optionD:"ArcJet Systems"},
{question:"What beverage was more popular in the west than Nuka-Cola?",optionA:"Vim", optionB:"Sunset Sarsaparilla", optionC:"Atomic Cocktail", optionD:"Slocum's Joe"}
]

const correctAnswers = [
  "2077",
  "War Never Changes",
  "Caps",
  "A Vault-Tec test to determine a resident's job",
  "Nuclear Energy",
  "A self-proclaimed continuation of the pre-War United States",
  "To locate a water chip",
  "2044",
  "Radioactive Isotopes",
  "A Crisis over energy",
  "Centuries",
  "Operating System Upgrade For Mr. House's Computers And Defense Systems",
  "Canada",
  "Chameleon",
  "Nightstalker",
  "The Khans",
  "Alaska",
  "209",
  "Little Lamplight",
  "Vault-Tec Assisted Targeting System",
  "17",
  "To test the role of the Overseer in a community that remains indefinitely isolated from the outside world",
  "Lucas Simms",
  "2 Hours",
  "Creating and sustaining life in a post-War environment",
  "Southern California",
  "RobCo Industries",
  "Sunset Sarsaparilla"
]


function App() {

  return (
    <>
      <div className='main'>
        {/* <img src='../public/Fallout Logo.png'></img> */}
        <h1>Fallout Trivia</h1>
        <p>Do you know what makes you S.P.E.C.I.A.L.?</p>
      </div>
      {questions.map((question) => {
        return (
          <Trivia key={question} question={questions.question} optionA="2075" optionB="2080" optionC="2077" optionD="2100"/>
        )
      })}
      <div className='scrollButtons'>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  )
}

export default App