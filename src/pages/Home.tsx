import { useContext, useState } from 'react';
import InputDefault from '../components/InputDefault';
import PageDefault from '../components/PageDefault';
import ButtonDefault from '../components/ButtonDefault';
import { TaskContext } from '../contexts/TaskContext';
import Feedback from '../components/feedback/Feedback';

function Home() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [stats, setStatus] = useState<string>('progress');
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);
  const taskContext = useContext(TaskContext);

  function handleClick() {
    if (name && description) {
      taskContext?.setData([...taskContext.data, { name, description, stats }]);
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
        <InputDefault action={setName} name="name" label="Nome" value={name} />
        <InputDefault action={setDescription} name="description" label="Descrição" value={description} />
        <div>
          <div>
            <label htmlFor="stats">Progresso</label>
            <input
              type="radio"
              name="stats"
              id="progress"
              value="progress"
              onChange={ev => setStatus(ev.target.value)}
              checked
            />
          </div>
          <label htmlFor="stats">Finished</label>
          <input type="radio" name="stats" id="finished" value="finished" onChange={ev => setStatus(ev.target.value)} />
        </div>
        <ButtonDefault label="Adicionar" action={handleClick} />
        {showFeedBack && <Feedback msg="Tarefa cadastrada com sucesso!" />}
      </PageDefault>
    </>
  );
}

export default Home;
