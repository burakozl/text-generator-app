import {useState, useEffect, useMemo} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { fetchPragraphs } from '../redux/pragraphsSlice';
import Error from './Error';


function Form() {
    const dispatch = useDispatch();

    const [number, setNumber] = useState(4);
    const [html, setHtml] = useState("text");

    const status = useSelector((state) => state.pragraphs.status);
    const error = useSelector((state) => state.pragraphs.error);

    

    const type = useMemo(() => {
        return { n: number, h: html };
      }, [number, html]);

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchPragraphs(type));
        }
    },[dispatch, type]);

    if(status === 'failed'){
        return <Error message={error}/>
    }

  return (
    <div>
      <form className='form-inline'>
        <div className="form-group">
            <label>Paragraphs</label>
            <div className="number">
                <input type="number" value={number}  onChange={(e) => setNumber(e.target.value)} />
            </div>
        </div>
        <div className="form-group">
            <label>Include HTML</label>
            <div className="select">
                <select className="form-control" value={html} onChange={(e) => setHtml(e.target.value)}>
                    <option value="text">No</option>
                    <option value="html">Yes</option>
                    </select>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Form
