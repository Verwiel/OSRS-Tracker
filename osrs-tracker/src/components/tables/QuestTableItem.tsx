import React from 'react'
import { useQuestCtx } from '../../context/QuestProvider'
import { QuestType } from '../../models/quest'

interface QuestTableItemProps {
    quest: QuestType
}

export const QuestTableItem: React.FC<QuestTableItemProps> = ({ quest }) => {
    const { toggleQuestComplete, openModal, completedQuests } = useQuestCtx()

    return (
        <tr 
            className={completedQuests.includes(quest.name) ? 
                `quest-table-row-complete` : `quest-table-row`
            }>
            <td onClick={() => toggleQuestComplete(quest.name)}>{quest.number}</td>
            <td onClick={() => openModal(quest)}>
                {quest.name}
            </td>
            <td>
                <a href={quest.link} target="_blank" rel="noopener noreferrer">
                Wiki Guide
                </a>
            </td>
        </tr>
    )
}
