import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { backendURL } from '../config/Config'
import { ProviderType } from '../models/provider'
import { QuestType } from '../models/quest'
import defaultQuestInfo from '../data/quest-info.json'


const QuestContext = createContext<questContextType | null>(null);

export const useQuestCtx = () => {
  const questContext = useContext(QuestContext);

  if (!questContext) {
    throw new Error("useQuestCtx has to be used within <QuestContext.Provider>");
  }

  return questContext;
};

interface questContextType {
  loadingQuests: boolean;
  questsLoaded: boolean;
  questList: QuestType[];
  clearQuests: () => void;
}


export const QuestProvider: React.FC<ProviderType> = ({ children }) => {
  let storedQuests = localStorage.getItem('osrs-quests')
  const [loadingQuests, setLoadingQuests] = useState(false)
  const [questsLoaded, setQuestsLoaded] = useState(false)
  const [questList, setQuestList] = useState(defaultQuestInfo)
  const [completedQuests, setCompletedQuests] = useState(
    storedQuests ? JSON.parse(storedQuests) : []
  )

  useEffect(() => {
    if(questList.length <= 1) loadQuests()
  }, [questList])

  const loadQuests = async () => {
    setLoadingQuests(true)
    try {
      let { data } = await axios.get(`${backendURL}/quests/list`)
      let updatedData = data.map((el: QuestType) => el.name.includes('Recipe for Disaster/') ? {...el, number: + 100} : el);
      setQuestList(updatedData)
      setLoadingQuests(false)
      setQuestsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  const clearQuests = () => {
    localStorage.removeItem('osrs-quests')
    setCompletedQuests([])
    setQuestsLoaded(false)
  }

  return (
    <QuestContext.Provider value={{
      loadingQuests,
      questsLoaded,
      questList,
      clearQuests
    }}>
      {children}
    </QuestContext.Provider>
  )
}
