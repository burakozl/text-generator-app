import { useSelector } from 'react-redux';
import Loading from './Loading';

function Pragraphs() {
    const pragraphs = useSelector((state) => state.pragraphs.items);
    const status = useSelector((state) => state.pragraphs.status);

  return (
    <div className="output jumbotron mt-4">
      {status === 'loading' && <Loading />}  
      {pragraphs && <p>{pragraphs}</p>}
    </div>
  )
}

export default Pragraphs
