'use client'
import { useEffect, useState } from 'react'
import Cards from '@/components/Cards'
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import WelcomePanel from '@/components/WelcomePanel'
import GameOver from '@/components/GameOver'
import randomizeCards from '@/utils/randomizeCards'
import {
  getUserNameStore,
  setUserNameStore,
  getGamedataStore,
  setGamedataStore
} from '@/controler/game'

export default function BoardGame({ cardImages }) {
  const [userName, setUserName] = useState('')
  const [gameCards, setGameCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [solvedPairs, setSolvedPairs] = useState([])
  const [wrongMoves, setWrongMoves] = useState(0)
  const [score, setScore] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [playAgainModal, setPlayAgainModal] = useState(false)

  /**
   * Sets the user name and closes the modal.
   *
   * @param {string} name - The name to set as the user name.
   */
  const onSetUserName = (name) => {
    setOpenModal(false)
    setUserNameStore(name)
    setUserName(name)
  }

  const onCloseModal = () => {
    setOpenModal(false)
  }

  const saveGameData = (gameData) => {
    setGamedataStore({ ...gameData, gameCards })
  }

  /**
   * Resets the game state and starts a new game.
   */
  const onPlayAgain = () => {
    getGamedataStore()
    setGameCards(randomizeCards(cardImages))
    setFlippedCards([])
    setSolvedPairs([])
    setWrongMoves(0)
    setScore(0)
    setPlayAgainModal(false)
  }

  /**
   * Handles the click event for a card in the game board.
   * @param {number} index - The index of the clicked card.
   */
  const handleClick = (index) => {
    if (!flippedCards.includes(index) && flippedCards.length < 2) {
      setFlippedCards([...flippedCards, index])
    }
  }

  // useEffect to initialize game data from storage
  useEffect(() => {
    const gameDataStored = getGamedataStore()
    const userNameStored = getUserNameStore()
    setUserName(userNameStored)
    setOpenModal(userNameStored.length === 0)
    setGameCards(gameDataStored?.gameCards || randomizeCards(cardImages))
    setSolvedPairs(gameDataStored?.solvedPairs || [])
    setWrongMoves(gameDataStored?.wrongMoves || 0)
    setScore(gameDataStored?.score || 0)
  }, [])

  useEffect(() => {
    const checkGameOver = () => {
      if (solvedPairs.length === 16) {
        setPlayAgainModal(true)
      }
    }

    /**
     * Checks if the flipped cards match and updates the game state accordingly.
     */
    const checkMatchPairs = () => {
      const [first, second] = flippedCards
      if (flippedCards.length < 2) return
      if (gameCards[first].uuid === gameCards[second].uuid) {
        saveGameData({ solvedPairs: [...solvedPairs, ...flippedCards], score: score + 1 })
        setSolvedPairs([...solvedPairs, ...flippedCards])
        setScore((prev) => prev + 1)
        checkGameOver()
      } else {
        saveGameData({ wrongMoves: wrongMoves + 1 })
        setWrongMoves((prev) => prev + 1)
      }
      setFlippedCards([])
    }

    // setTimeout to allow the second card to flip before checking for a match
    if (flippedCards.length === 2) {
      setTimeout(() => {
        checkMatchPairs()
      }, 1000)
    }
  }, [flippedCards, gameCards, solvedPairs])

  return (
    <>
      <Modal open={playAgainModal}>
        <GameOver userName={userName} handlePlayAgain={onPlayAgain} />
      </Modal>
      <Modal open={openModal}>
        <WelcomePanel userName={userName} handleUserName={onSetUserName} />
      </Modal>
      <section className={`bg-white-bone flex flex-col justify-center pt-10 pb-20 rounded-2xl ${openModal && 'backdrop-blur-3xl'} lg:max-w-[1560px] lg:min-h-[920px]`}>
        <Header score={score} wrongMoves={wrongMoves} userName={userName} />
        <Cards
          gameCards={gameCards}
          handleClick={handleClick}
          flippedCards={flippedCards}
          solvedPairs={solvedPairs}
        />
      </section>
    </>

  )
}
