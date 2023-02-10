import { useQuestCtx } from '../../context/QuestProvider'
import { QuestTableItem } from './QuestTableItem'

export const QuestTable = () => {
    const { filteredQuestList } = useQuestCtx()

    const questMap = filteredQuestList.sort((a,b) => a.number - b.number).map((quest, i) => {
        return (
            <QuestTableItem key={i} quest={quest} />
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
