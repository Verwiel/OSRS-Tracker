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

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{color: 'black'}}>{selectedQuest.name}</h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
