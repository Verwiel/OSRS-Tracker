import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { backendURL } from '../config/Config'
import { ProviderType } from '../models/provider'
import { CharacterType } from '../models/character-info'
import defaultChearacterInfo from '../data/character-info.json'
// import defaultQuestInfo from '../data/quest-info.json'

const CharacterContext = createContext<characterContextType | null>(null);

export const useCharacterCtx = () => {
  const characterContext = useContext(CharacterContext);

  if (!characterContext) {
    throw new Error("useCharacterCtx has to be used within <CharacterContext.Provider>");
  }
    
  return characterContext;
};
  
interface characterContextType {
  storedUsername: string | null;
  storedGamemode: string | null;
  loadingCharacter: boolean;
  characterLoaded: boolean;
  characterInfo: CharacterType;
  userInput: UserInputType;
  gamemodeDisplay: string;
  clearCharacter: () => void;
  usernameOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  gamemodeOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  lookupCharacter: (e: React.FormEvent<HTMLElement>) => void;
  getCharacterInfo: () => void;
}

interface UserInputType {
  username: string
  gamemode: string
}


export const CharacterProvider: React.FC<ProviderType> = ({ children }) => {
  let storedUsername = localStorage.getItem('osrs-username')
  let storedGamemode = localStorage.getItem('osrs-gamemode')
  let storedCharacterInfo = localStorage.getItem('osrs-character-info')
  // let storedQuests = localStorage.getItem('osrs-quests')
  let defaultUserInput = {
    username: storedUsername ? storedUsername : '',
    gamemode: storedGamemode ? storedGamemode : 'regular'
  }

  const [userInput, setUserInput] = useState<UserInputType>(defaultUserInput)
  const [characterInfo, setCharacterInfo] = useState(
    storedCharacterInfo ? JSON.parse(storedCharacterInfo) : defaultChearacterInfo
  )
  const [loadingCharacter, setLoadingCharacter] = useState(false)
  const [characterLoaded, setCharacterLoaded] = useState(false)

  let gamemodeDisplay = ''
  switch(userInput.gamemode){
    case 'regular':
      gamemodeDisplay = 'Regular'
      break;
    case 'ironman':
      gamemodeDisplay = 'Ironman'
      break;
    case 'hcim':
      gamemodeDisplay = 'Hardcore Ironman'
      break;
    case 'uim':
      gamemodeDisplay = 'Ultimate Ironman'
      break;
    default:
      gamemodeDisplay = 'Regular'
      break;
  }

  useEffect(() => {
    if(storedUsername && storedGamemode){
      getCharacterInfo()
    }
  }, [storedUsername, storedGamemode])

  const lookupCharacter = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    localStorage.removeItem('osrs-username')
    try {
      setLoadingCharacter(true)
      let { data } = await axios.get(`${backendURL}/highscores/check/account?username=${userInput.username}&gamemode=${userInput.gamemode}`)
      if(data.status === 200){
        localStorage.setItem('osrs-username', userInput.username);
        localStorage.setItem('osrs-gamemode', userInput.gamemode);
        setLoadingCharacter(false)
        setCharacterLoaded(true)
      } else {
        alert(`No player "${userInput.username}" found in "${gamemodeDisplay}" game mode`)
        clearCharacter()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUserInput({...userInput, username: value})
  }

  const gamemodeOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setUserInput({...userInput, gamemode: value})
  }

  const clearCharacter = () => {
    localStorage.removeItem('osrs-username')
    localStorage.removeItem('osrs-character-info')
    localStorage.removeItem('osrs-gamemode')
    setLoadingCharacter(false)
    setCharacterLoaded(false)
    setUserInput(defaultUserInput)
    setCharacterInfo(defaultChearacterInfo)
  }

  const getCharacterInfo = async () => {
    try {
      // need to add to backend for cors errors
      let { data } = await axios.get(`${backendURL}/highscores?username=${storedUsername}&gamemode=${storedGamemode}`)
      setCharacterInfo(data)
      localStorage.setItem('osrs-character-info', JSON.stringify(data))
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <CharacterContext.Provider value={{
      userInput, 
      storedUsername, 
      storedGamemode,
      characterInfo,
      gamemodeDisplay, 
      loadingCharacter,
      characterLoaded,
      usernameOnChange, 
      gamemodeOnChange,
      lookupCharacter,       
      clearCharacter,
      getCharacterInfo
    }}>
      {children}
    </CharacterContext.Provider>
  )
}
