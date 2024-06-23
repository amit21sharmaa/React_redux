import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,  selectReduxSlice }  from '../reduxSlice/reduxSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Counter() {
  const countValue = useSelector(selectReduxSlice);
  const dispatch = useDispatch();
  return (
    <div className="counter" style={{fontSize:"xx-large"}}>
      <br/><br/><br/><br/>
      <button type="button" onClick={() => dispatch(increment())}><AddIcon /></button>
      <span>{countValue}</span> 
      <button type="button" onClick={() => dispatch(decrement())}><RemoveIcon /></button>
    </div>
  );
}

export default Counter;
