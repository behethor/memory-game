import {
  setUserNameStore,
  getUserNameStore,
  setGamedataStore,
  getGamedataStore
}
  from '@/controler/game'

describe('game store functions', () => {
  test('setUserNameStore', () => {
    setUserNameStore('test')
    expect(getUserNameStore()).toEqual('test')
  })

  test('setGamedataStore', () => {
    setGamedataStore({ test: 'test' })
    expect(getGamedataStore()).toEqual({ test: 'test' })
  })

  test('getUserNameStore', () => {
    expect(getUserNameStore()).toEqual('test')
  })

  test('getGamedataStore', () => {
    expect(getGamedataStore()).toEqual({ test: 'test' })
  })
})
