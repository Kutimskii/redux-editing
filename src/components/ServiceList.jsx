import {useSelector, useDispatch} from 'react-redux';
import { removeService,fillServiceField } from '../redux/actions/actions';
export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const handleChange = (name,value,id) => {
    dispatch(fillServiceField(name,value,id))};
  const handleRemove = id => {dispatch(removeService(id))};
  return (
    <ul>
    {items.map(o => (
      <li key={o.id}>
        {o.name} {o.price}
        <button onClick={() =>handleChange(o.name,o.price,o.id)}>&#9998;</button>
        <button onClick={() =>handleRemove(o.id)}>✕</button>
      </li>))}
    </ul>
    )
}