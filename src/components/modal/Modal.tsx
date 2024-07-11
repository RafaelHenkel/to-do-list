import ButtonDefault from '../ButtonDefault';
import ModalStyled from './ModalStyled';

interface ModalProps {
  item: TaskType;
  stats: (stats: string) => void;
  actionConfirm: () => void;
}

function Modal({ item, actionConfirm, stats }: ModalProps) {
  return (
    <>
      <ModalStyled>
        <div
          style={{
            height: '300px',
            width: '400px',
            backgroundColor: '#000000',
            color: '#fff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <p>Nome: {item.name}</p>
          <p>Descrição: {item.description}</p>
          <div>
            <div>
              <label htmlFor="stats">Progresso</label>
              <input
                type="radio"
                name="stats"
                id="progress"
                value="progress"
                onChange={ev => stats(ev.target.value)}
                checked
              />
            </div>
            <label htmlFor="stats">Finished</label>
            <input type="radio" name="stats" id="finished" value="finished" onChange={ev => stats(ev.target.value)} />
          </div>
          <ButtonDefault label="Confirmar" action={actionConfirm} />
        </div>
      </ModalStyled>
    </>
  );
}

export default Modal;
