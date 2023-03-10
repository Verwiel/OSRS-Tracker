import Modal from 'react-modal';
import { useQuestCtx } from '../context/QuestProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
        contentLabel="Quest Modal"
        overlayClassName='modal-overlay'
        className='modal-content'
      >
        <header className='modal-header'>
          <span>
            <h2 style={{color: 'black', margin: '0'}}>{name}</h2>
          </span>

          <span className='modal-release'>
            <p>Released: {releaseDate}</p>
            {!series.includes('None') &&
              <p>Series: {series}</p>
            }
          </span>
        </header>
        <table>
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
        <button onClick={closeModal} className='modal-close'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </Modal>
    </div>
  );
}
