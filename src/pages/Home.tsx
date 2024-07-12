import InputDefault from '../components/InputDefault';
import PageDefault from '../components/PageDefault';
import ButtonDefault from '../components/ButtonDefault';
import Feedback from '../components/feedback/Feedback';
import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContexts';

function Home() {
  const [task, setTask] = useState<string>('');
  const [finished] = useState<boolean>(false);
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);
  // const [list, setList] = useState<TaskType[]>([]);
  const taskContext = useContext(TaskContext);

  function handleClick() {
    if (task) {
      // setList([...list, { task, finished }]);
      taskContext?.setData([...taskContext.data, { task, finished }]);

      openFeedBack();
    }
  }

  function openFeedBack() {
    setShowFeedBack(!showFeedBack);
    setTimeout(() => {
      setShowFeedBack(false);
    }, 4000);
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
        </div>
        {showFeedBack && <Feedback msg="Tarefa cadastrada com sucesso!" />}
      </PageDefault>
    </>
  );
}

export default Home;
