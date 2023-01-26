import Modal from 'react-modal';
import { useQuestCtx } from '../context/QuestProvider';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#quest-list');

export const QuestModal = () => {
  const { modalOpen, closeModal, selectedQuest } = useQuestCtx()
  const { link, name, length, series, startPoint, releaseDate, difficulty, description, requirements, itemsRequired, recommended, enemies } = selectedQuest

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <header style={{color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span>
            <h2 style={{color: 'black', margin: '0'}}>{name}</h2>
          </span>
          {!series.includes('None') &&
            <p>Series: {series}</p>
          }
          <p>Released: {releaseDate}</p>
        </header>
        <table style={{color: 'black'}}>
          <tbody>
            <tr>
              <th>Start Point</th>
              <td>{startPoint}</td>
            </tr>
            <tr>
              <th>Difficulty</th>
              <td>{difficulty}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{description}</td>
            </tr>
            <tr>
              <th>Length</th>
              <td>{length}</td>
            </tr>
            <tr>
              <th>Requirements</th>
              <td>
                  {requirements.length > 0 ? 
                    <ul>
                      {requirements.map(requirement => (
                        <li key={requirement}>{requirement}</li>
                      ))}
                    </ul>
                    :
                    "None"
                  }
              </td>
            </tr>
            <tr>
              <th>Items required</th>
              <td>
                <ul>
                  {itemsRequired.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Recommended</th>
              <td>
                <ul>
                  {recommended.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Enemies to defeat</th>
              <td>{enemies}</td>
            </tr>
          </tbody>
        </table>
        <a  style={{color: 'black'}} href={link} rel="noopener noreferrer" target="_blank" >View the guide on the OSRS wiki</a>
        <br />
        <button onClick={closeModal} className='button--close'>close</button>
      </Modal>
    </div>
  );
}
