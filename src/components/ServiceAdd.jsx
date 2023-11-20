import {useSelector, useDispatch} from 'react-redux';
import { changeServiceField,addService,fillServiceField } from '../redux/actions/actions';
export default function ServiceAdd() {
const item = useSelector(state => state.serviceAdd);
debugger
const dispatch = useDispatch();
const handleChange = evt => {
  const {name, value} = evt.target;
  dispatch(changeServiceField(name, value, item.id));}
const handleSubmit = evt => {
  evt.preventDefault();
  if(item.name === ''){
    return
  }
  dispatch(addService(item.name, item.price, item.id));
}
const handleCancel = ()=>{
  dispatch( fillServiceField ('', '', '') )
}
return (
<form onSubmit={handleSubmit}>
  <input name='name' onChange={handleChange} value={item.name}/>
  <input name='price' onChange={handleChange} value={item.price}/>
  <button type='submit'>Save</button>
  <button onClick={handleCancel}>Cancel</button>
</form>
);
}