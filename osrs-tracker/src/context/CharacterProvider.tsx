import React, { createContext, useState, useContext } from 'react'
import axios from 'axios'
import { backendURL } from '../config/Config'
import { ProviderType } from '../models/provider'
import { CharacterType } from '../models/character-info'
import defaultChearacterInfo from '../data/character-info.json'

const CharacterContext = createContext<characterContextType | null>(null);

export const useCharacterCtx = () => {
  const characterContext = useContext(CharacterContext);

  if (!characterContext) {
    throw new Error("useCharacterCtx has to be used within <CharacterContext.Provider>");
  }
    
  return characterContext;
};
  
interface characterContextType {
  username: string;
  characterInfo: CharacterType,
  usernameOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lookupCharacter: (e: React.FormEvent<HTMLElement>) => void;
  getCharacterInfo: () => void;
}

export const CharacterProvider: React.FC<ProviderType> = ({ children }) => {
  let storedUsername = localStorage.getItem('osrs-username')
  const [username, setUsername] = useState(storedUsername ? storedUsername : '')
  const [characterInfo, setCharacterInfo] = useState(defaultChearacterInfo)

  const lookupCharacter = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(username)
    localStorage.setItem('osrs-username', username);
    if(username.length > 0 ){
      getCharacterInfo()
    }
  }

  const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const getCharacterInfo = async () => {
    try {
      // need to add to backend for cors errors
      let { data } = await axios.get(`${backendURL}/character/${username}`)
      console.log(data)
      if(data.atk) {
        setCharacterInfo(data)
      }
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <CharacterContext.Provider value={{
      username, characterInfo, usernameOnChange, lookupCharacter, getCharacterInfo
    }}>
      {children}
    </CharacterContext.Provider>
  )
}
