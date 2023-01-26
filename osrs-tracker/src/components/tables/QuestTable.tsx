import { useQuestCtx } from '../../context/QuestProvider'

export const QuestTable = () => {
    const { questList, openModal } = useQuestCtx()

    const questMap = questList.sort((a,b) => a.number - b.number).map((quest, i) => {
        return (
            <tr key={i}>
                <td>{quest.number}</td>
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
    })

    return (
        <table className='scroll'>
            <thead>
            <tr>
                <th>#</th>
                <th>Quest</th>
                <th>Guide</th>
            </tr>
            </thead>
            <tbody>
            {questMap}
            </tbody>
        </table>
    )
}
