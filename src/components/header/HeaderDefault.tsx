import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';
import HeaderDefaultStyled from './HeaderDefaultStyled';

function HeaderDefault() {
  return (
    <>
      <HeaderDefaultStyled>
        {navigation.map(item => (
          <div key={item.key}>
            <Link to={item.url}>{item.label}</Link>
          </div>
        ))}
      </HeaderDefaultStyled>
    </>
  );
}

export default HeaderDefault;
