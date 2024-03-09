/**
 * Sets data in the local storage.
 * @param {string} key - The key to set the data under.
 * @param {any} value - The value to be stored.
 */
const setData = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Retrieves data from local storage based on the provided key.
 * @param {string} key - The key used to retrieve the data from local storage.
 * @returns {any} The data retrieved from local storage.
 */
const getData = (key) => {
  const data = JSON.parse(window.localStorage.getItem(key))
  return (data)
}

/**
 * Sets the user name in the data store.
 *
 * @param {string} userName - The user name to be set.
 */
const setUserNameStore = (userName) => {
  setData('userName', userName)
}

/**
 * Retrieves the user name from the data store.
 * @returns {string} The user name, or an empty string if not found.
 */
const getUserNameStore = () => {
  const userData = getData('userName')
  return userData || ''
}

/**
 * Sets the game data in the data store.
 *
 * @param {Object} gameData - The game data to be stored.
 */
const setGamedataStore = (gameData) => {
  const key = 'game'
  const prevData = getData(key)
  const updatedData = { ...prevData, ...gameData }
  setData(key, updatedData)
}

/**
 * Retrieves the game data from the data store.
 * If the game data does not exist, an empty object is returned.
 *
 * @returns {Object} The game data from the data store.
 */
const getGamedataStore = () => {
  const key = 'game'
  const gameData = getData(key)
  return gameData || {}
}

export {
  setUserNameStore,
  getUserNameStore,
  setGamedataStore,
  getGamedataStore
}
