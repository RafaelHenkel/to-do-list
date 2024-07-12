import InputDefault from '../components/InputDefault';
import PageDefault from '../components/PageDefault';
import ButtonDefault from '../components/ButtonDefault';
import Feedback from '../components/feedback/Feedback';
import { useState } from 'react';

function Home() {
  const [task, setTask] = useState<string>('');
  const [finished] = useState<boolean>(false);
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);
  const [list, setList] = useState<TaskType[]>([]);

  function handleClick() {
    if (task) {
      setList([...list, { task, finished }]);
      console.log(list);

      openFeedBack();
    }
  }

  function openFeedBack() {
    setShowFeedBack(!showFeedBack);
    setTimeout(() => {
      setShowFeedBack(false);
    }, 4000);
  }

  function finishTask(task: TaskType) {
    task.finished = true;
  }

  function deleteTask(task: TaskType) {
    const filterTask = list.filter(item => item.task !== task.task);
    if (filterTask) {
      setList(filterTask);
      console.log(list);
    }
  }

  return (
    <>
      <PageDefault>
        <h1>Adicionar tarefa</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <InputDefault action={setTask} name="task" label="Task" value={task} />
          <ButtonDefault label="Adicionar" action={handleClick} />
          {list.map(task => (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p>{task.task}</p>
              <p>{task.finished ? 'Finalizada' : 'Não finalizada'}</p>
              <div>
                <button onClick={() => finishTask(task)}>Finalizar</button>
                <button onClick={() => deleteTask(task)}>Deletar</button>
              </div>
            </div>
          ))}
        </div>
        {showFeedBack && <Feedback msg="Tarefa cadastrada com sucesso!" />}
      </PageDefault>
    </>
  );
}

export default Home;
