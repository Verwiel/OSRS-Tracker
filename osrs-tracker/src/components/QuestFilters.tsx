import { useQuestCtx } from "../context/QuestProvider"

export const QuestFilters = () => {
    const { filterOnChange } = useQuestCtx()

    return (
        <aside>
            <label htmlFor="">
                Showing:
                <select name="" id="" onChange={(e) => filterOnChange(e)}>
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="members">Members</option>
                    <option value="f2p">Free</option>
                </select>
            </label>
        </aside>
    )
}
