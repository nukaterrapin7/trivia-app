import { useState } from 'react'
import './App.css'
import Trivia from './Trivia'

const questions = [
{question:"What year did the bombs drop?", optionOne:"2075", optionTwo:"2080", optionThree:"2077", optionFour:"2100"},
"What is arguably the most iconic quote from Fallout?",  
"What is the New common Currency used in fallout?",  
"What is the G.O.A.T.?",
"What is the major source of power in Fallout?",
"Who are the Enclave?",
"In fallout 1, Why Was The Vault Dweller Sent Out Into The Wasteland?",
"When was Nuka-Cola Invented?",
"What was the Secret ingredient in Nuka Cola Quantum?",
"How was the War between The U.S and China started?",
"How long do ghouls live for?",
"What was on The Platinum Chip?",
"Which Country Was Annexed By The US?",
"What Animal Did The Deathclaw Evolve From?",
"What Creature Is The Result Of Mixing Rattlesnake And Coyote DNA?",
"In New Vegas, Which Group Is Best Known For Chem Trading?",
"Where was The Battle Of Anchorage Fought at?",
"How old is Rex?",
"When MacCready was younger, which Town was he the Mayor of?",
"What does V.A.T.S. stand for?",
"How many Vaults were designed to work properly as control Vaults?",
"What was the Experiment on Vault 101?",
"Who is the sheriff and mayor of Megaton?",
"How Long did The Great War last?",
"What is the G.E.C.K.'s Purpose ?",
"Where does Fallout 1 take place?",
"What company manufactures the Mr. Handy and Protectron Robots?",
"What beverage was more popular in the west than Nuka-Cola?"
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
      <div className='trivia-field'>
        <button>Last Question</button>
        <div className='card-container'>
          {/* Card Front
          <div>"What year did the bombs drop?"</div>
          <button className='answer-button'>2075</button>
          <button className='answer-button'>2080</button>
          <button className='answer-button'>2077</button>
          <button className='answer-button'>2100</button> */}
          {/* Card Back
          <div>"2077"</div> */}
        </div>
        <button>Next Question</button>
      </div>
    </>
  )
}

export default App
