import { useContext, useEffect, useMemo } from 'react';
import PageDefault from '../components/PageDefault';
import { TaskContext } from '../contexts/TaskContexts';

function List() {
  const taskContexts = useContext(TaskContext);

  function finishTask(task: TaskType) {
    task.finished = true;
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
              <button onClick={() => finishTask(task)}>Finalizar</button>
              <button onClick={() => deleteTask(task)}>Deletar</button>
            </div>
          </div>
        ))}
      </PageDefault>
    </>
  );
}

export default List;
