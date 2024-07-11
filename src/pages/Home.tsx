import { useEffect, useState } from 'react';
import InputDefault from '../components/InputDefault';
import PageDefault from '../components/PageDefault';

function Home() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <>
      <PageDefault>
        <h1>Adicionar tarefa</h1>
        <InputDefault action={setName} key="name" label="Nome" value={name} />
        <InputDefault action={setDescription} key="description" label="Descrição" value={description} />
      </PageDefault>
    </>
  );
}

export default Home;
