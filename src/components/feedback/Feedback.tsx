import FeedbackStyled from './FeedbackStyled';

interface FeedbackProps {
  msg: string;
}

function Feedback({ msg }: FeedbackProps) {
  return (
    <>
      <FeedbackStyled>
        <h3>{msg}</h3>
      </FeedbackStyled>
    </>
  );
}

export default Feedback;
