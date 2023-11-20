import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SERVICE } from "../actions/actionTypes";
const initialState=[];
export default function serviceListReducer(state = initialState, action){
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price, ident} = action.payload;
      debugger
      if([...state].find(o=> o.id === ident)){
        return [...state].map(el=>{
          if(el.id===ident){
           el.name = name
           el.price = price
          }
          return el;
        })
      }
      return [...state, {id: nanoid(), name, price:Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    default:
      return state;
  }
}