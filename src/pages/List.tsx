import { useCallback, useContext, useState } from 'react';
import PageDefault from '../components/PageDefault';
import { TaskContext } from '../contexts/TaskContexts';
import Feedback from '../components/feedback/Feedback';

function List() {
  const taskContexts = useContext(TaskContext);
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);

  const use = useCallback(
    (task: TaskType) => {
      task.finished = true;
      openFeedBack();
    },
    [showFeedBack],
  );

  function openFeedBack() {
    setShowFeedBack(!showFeedBack);
    setTimeout(() => {
      setShowFeedBack(false);
    }, 4000);
  }

  function deleteTask(task: TaskType) {
    const filterTask = taskContexts?.data.filter(item => item.task !== task.task);
    if (filterTask) {
      taskContexts?.setData(filterTask);
    }
  }
  return (
    <>
      <PageDefault>
        {taskContexts?.data.map(task => (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <p>{task.task}</p>
            <p>{task.finished ? 'Finalizada' : 'Não finalizada'}</p>
            <div>
              <button onClick={() => use(task)}>Finalizar</button>
              <button onClick={() => deleteTask(task)}>Deletar</button>
            </div>
          </div>
        ))}
        {showFeedBack && <Feedback msg="Tarefa finalizada com sucesso!" />}
      </PageDefault>
    </>
  );
}

export default List;
