import { useQuestCtx } from "../context/QuestProvider"

export const QuestFilters = () => {
    const { filterOnChange, questList, completedQuests } = useQuestCtx()

    return (
        <aside className='quest-filter'>
            <label htmlFor="">
                Showing: {"  "}
                <select name="" id="" onChange={(e) => filterOnChange(e)}>
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="members">Members</option>
                    <option value="f2p">Free</option>
                </select>
            </label>

            <span>{completedQuests.length} / {questList.length}</span>
        </aside>
    )
}
