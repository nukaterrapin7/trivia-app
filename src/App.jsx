import { useState } from 'react'
import './App.css'
import Trivia from './Components/Trivia'

const questions = [
{question:"What year did the bombs drop?", 
  optionA:"2075", 
  optionB:"2080", 
  optionC:"2077", 
  optionD:"2100",
  correctAnswer:"2077"},
{question:"What is arguably the most iconic quote from Fallout?", 
  optionA:"Death is a preferable alternative to communism.", 
  optionB:"I don't want to set the world on fire.", 
  optionC:"War never changes", 
  optionD:"It's the end of the world, all over again", 
  correctAnswer: "War never changes"},
{question:"What is the New common Currency used in fallout?", 
  optionA:"Ammo", 
  optionB:"NCR dollars", 
  optionC:"Nuka Cola", 
  optionD:"Caps", 
  correctAnswer: "Caps"},
{question:"What is the G.O.A.T.?", 
  optionA:"An experimental weapon", 
  optionB:"A Vault-Tec test to determine a residents job", 
  optionC:"A Vault-Tec test to determine a residents income", 
  optionD:"A Vault-Tec test to determine a residents morals",
  correctAnswer:"A Vault-Tec test to determine a residents job"},
{question:"What is the major source of power in Fallout?", 
  optionA:"Wind Energy", 
  optionB:"Geothermal Energy", 
  optionC:"Nuclear Energy", 
  optionD:"Solar Energy",
  correctAnswer:"Nuclear Energy"},
{question:"Who are the Enclave?", 
  optionA:"A self-proclaimed continuation of the pre-War United States", 
  optionB:"THE BAD GUYS!!!!", 
  optionC:"A Direct continuation of the pre-War United States", 
  optionD:"A Direct continuation of the pre-War Communist China",
  correctAnswer:"A self-proclaimed continuation of the pre-War United States"},
{question:"In fallout 1, Why Was The Vault Dweller Sent Out Into The Wasteland?", 
  optionA:"To trade with locals", 
  optionB:"To locate a water chip", 
  optionC:"To locate resources", 
  optionD:"To stop 'The Master'",
  correctAnswer:"To locate a water chip"},
{question:"When was Nuka-Cola Invented?", 
  optionA:"2075", 
  optionB:"1998", 
  optionC:"2044", 
  optionD:"2025",
  correctAnswer:"2044"},
{question:"What was the Secret ingredient in Nuka Cola Quantum?", 
  optionA:"Micro-plastics", 
  optionB:"Cocaine", 
  optionC:"200% more sugar", 
  optionD:"Radioactive Isotopes",
  correctAnswer:"Radioactive Isotopes"},
{question:"How was the War between The U.S and China started?", 
  optionA:"A Crisis over energy", 
  optionB:"An assassination", 
  optionC:"America invaded China", 
  optionD:"China invaded America",
  correctAnswer:"A Crisis over energy"},
{question:"How long do ghouls live for?", 
  optionA:"Only a few years", 
  optionB:"Average Human lifespan", 
  optionC:"Centuries", 
  optionD:"A few Decades",
  correctAnswer:"Centuries"},
{question:"What was on The Platinum Chip?", 
  optionA:"Operating System Upgrade For Mr. House's Computers And Defense Systems", 
  optionB:"The location of the Enclave H.Q.", 
  optionC:"Blueprints for new Robots", 
  optionD:"Blueprints for a nuclear reactor",
  correctAnswer:"Operating System Upgrade For Mr. House's Computers And Defense Systems"},
{question:"Which Country Was Annexed By The US?", 
  optionA:"Mexico", 
  optionB:"Brazil", 
  optionC:"Canada", 
  optionD:"Thailand",
  correctAnswer:"Canada"},
{question:"What Animal Did The Deathclaw Evolve From?", 
  optionA:"Bearded Dragon", 
  optionB:"Kamado Dragon", 
  optionC:"Iguana", 
  optionD:"Chameleon",
  correctAnswer:"Chameleon"},
{question:"What Creature Is The Result Of Mixing Rattlesnake And Coyote DNA?", 
  optionA:"Bloat fly", 
  optionB:"Nightstalker", 
  optionC:"Shaky Snake", 
  optionD:"Cazadore",
  correctAnswer:"Nightstalker"},
{question:"In New Vegas, Which Group Is Best Known For Chem Trading?", 
  optionA:"The Boomers", 
  optionB:"The Khans", 
  optionC:"The Powder Gangers", 
  optionD:"The Vipers",
  correctAnswer:"The Khans"},
{question:"Where was The Battle Of Anchorage Fought at?", 
  optionA:"Antarctica", 
  optionB:"Russia", 
  optionC:"Alaska", 
  optionD:"Greenland",
  correctAnswer:"Alaska"},
{question:"How old is Rex?", 
  optionA:"8", 
  optionB:"22", 
  optionC:"209", 
  optionD:"109",
  correctAnswer:"209"},
{question:"When MacCready was younger, which Town was he the Mayor of?",
  optionA:"Rivet City", 
  optionB:"Goodneighbor", 
  optionC:"Megaton", 
  optionD:"Little Lamplight",
  correctAnswer:"Little Lamplight"},
{question:"What does V.A.T.S. stand for?", 
  optionA:"Vault-Tec Automatic Targeting System", 
  optionB:"Vault-Tec Accurate Targeting System", 
  optionC:"Vault-Tec Assisted Targeting System", 
  optionD:"Very Accurate Targeting System",
  correctAnswer:"Vault-Tec Assisted Targeting System"},
{question:"How many Vaults were designed to work properly as control Vaults?",
  optionA:"10", 
  optionB:"12", 
  optionC:"17", 
  optionD:"20",
  correctAnswer:"17"},
{question:"What was the Experiment on Vault 101?", 
  optionA:"Pumping psychoactive drugs into the circulation system", 
  optionB:"The vault door would not seal properly, allowing radiation to seep in", 
  optionC:"To test the role of the Overseer in a community that remains indefinitely isolated from the outside world", 
  optionD:"None, it was one of the seventeen control Vaults",
  correctAnswer:"To test the role of the Overseer in a community that remains indefinitely isolated from the outside world"},
{question:"Who is the sheriff and mayor of Megaton?", 
  optionA:"Colin Moriarty", 
  optionB:"Deputy Weld", 
  optionC:"Moira Brown", 
  optionD:"Lucas Simms",
  correctAnswer:"Lucas Simms"},
{question:"How Long did The Great War last?", 
  optionA:"2 Years", 
  optionB:"2 Days", 
  optionC:"2 Hours", 
  optionD:"2 Minutes",
  correctAnswer:"2 Hours"},
{question:"What is the G.E.C.K.'s Purpose?", 
  optionA:"Creating and sustaining life in a post-War environment", 
  optionB:"Locating Fresh water in a post-War environment", 
  optionC:"Sends out an S.O.S. Message", 
  optionD:"Contains Nuclear Launch Codes",
  correctAnswer:"Creating and sustaining life in a post-War environment"},
{question:"Where does Fallout 1 take place?", 
  optionA:"Nevada", 
  optionB:"Northern California", 
  optionC:"New Mexico", 
  optionD:"Southern California",
  correctAnswer:"Southern California"},
{question:"What company manufactures the Mr. Handy and Protectron Robots?", 
  optionA:"Med-Tech", 
  optionB:"RobCo Industries", 
  optionC:"Wattz Electronics", 
  optionD:"ArcJet Systems",
  correctAnswer:"RobCo Industries"},
{question:"What beverage was more popular in the west than Nuka-Cola?", 
  optionA:"Vim", 
  optionB:"Sunset Sarsaparilla", 
  optionC:"Atomic Cocktail", 
  optionD:"Slocum's Joe",
  correctAnswer:"Sunset Sarsaparilla"}
]



function App() {

  return (
    <>
      <div className='main'>
        {/* <img src='../public/Fallout Logo.png'></img> */}
        <h1>Fallout Trivia</h1>
        <p>Do you know what makes you S.P.E.C.I.A.L.?</p>
      </div>
      <Trivia questions={questions} />
    </>
  )
}

export default App




// Having trouble with the following:
// Cannot get the correct answer to show a color to show if the answer was right or not.