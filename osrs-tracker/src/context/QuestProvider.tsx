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
  modalOpen: boolean;
  selectedQuest: QuestType;
  completedQuests: string[];
  filteredQuestList: QuestType[];
  clearQuests: () => void;
  openModal: (quest: QuestType) => void;
  closeModal: () => void;
  toggleQuestComplete: (questName: string) => void;
  filterOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


export const QuestProvider: React.FC<ProviderType> = ({ children }) => {
  let storedQuests = localStorage.getItem('osrs-quests')
  const [loadingQuests, setLoadingQuests] = useState(false)
  const [questsLoaded, setQuestsLoaded] = useState(false)
  const [questList, setQuestList] = useState(defaultQuestInfo)
  const [filteredQuestList, setFilteredQuestList] = useState(defaultQuestInfo)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedQuest, setSelectedQuest] = useState(defaultQuestInfo[0])
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
      let updatedData = data.map((el: QuestType) => el.name.includes('Recipe for Disaster/') ? {...el, number: + 100, isMembers: true} : el);
      setQuestList(updatedData)
      setFilteredQuestList(updatedData)
      setLoadingQuests(false)
      setQuestsLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleQuestComplete = (questName: string) => {
    if(completedQuests.includes(questName)){
      let filteredCompletedQuests = completedQuests.filter((quest: string) => quest !== questName)
      setCompletedQuests(filteredCompletedQuests)
      localStorage.setItem('osrs-quests', JSON.stringify(filteredCompletedQuests));
    } else {
      setCompletedQuests([ ...completedQuests, questName ])
      localStorage.setItem('osrs-quests', JSON.stringify(completedQuests));
    }
  }

  const filterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    switch(value) {
      case 'all':
        setFilteredQuestList(questList)
        break;
      case 'complete':
        let filteredCompleteQuests = questList.filter(quest => completedQuests.includes(quest.name))
        setFilteredQuestList(filteredCompleteQuests)
        break;
      case 'incomplete':
        let filteredIncompleteQuests = questList.filter(quest => !completedQuests.includes(quest.name))
        setFilteredQuestList(filteredIncompleteQuests)
        break;
      case 'members':
          let filteredMembersQuests = questList.filter(quest => quest.isMembers)
          setFilteredQuestList(filteredMembersQuests)
          break;
      case 'f2p':
        let filteredFreeQuests = questList.filter(quest => !quest.isMembers)
        setFilteredQuestList(filteredFreeQuests)
        break;
      default:
        setFilteredQuestList(questList)
        break;
    }
  }

  const clearQuests = () => {
    localStorage.removeItem('osrs-quests')
    setCompletedQuests([])
    setQuestsLoaded(false)
  }

  const openModal = (quest: QuestType) => {
    setSelectedQuest(quest)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedQuest(defaultQuestInfo[0])
  }

  return (
    <QuestContext.Provider value={{
      loadingQuests,
      questsLoaded,
      questList,
      modalOpen,
      selectedQuest,
      completedQuests,
      filteredQuestList,
      clearQuests,
      openModal,
      closeModal,
      toggleQuestComplete,
      filterOnChange,
    }}>
      {children}
    </QuestContext.Provider>
  )
}
