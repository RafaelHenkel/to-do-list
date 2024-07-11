import { useContext, useState } from 'react';
import PageDefault from '../components/PageDefault';
import { TaskContext } from '../contexts/TaskContext';
import Modal from '../components/modal/Modal';

function List() {
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const [stats, setStatus] = useState<string>('progress');

  const taskContext = useContext(TaskContext);

  function showModal() {
    setTaskModal(!taskModal);
  }

  return (
    <>
      <PageDefault>
        <h1>Lista de tarefas</h1>
        {taskContext?.data.map(item => (
          <ul key={item.name}>
            <li onClick={showModal}>Nome: {item.name}</li>
            <li>Descrição: {item.description}</li>
            <li>Status: {item.stats}</li>
            {taskModal && <Modal item={item} stats={setStatus} actionConfirm={showModal} />}
          </ul>
        ))}
      </PageDefault>
    </>
  );
}

export default List;
