import { CHANGE_SERVICE_FIELD, FILL_SERVICE_FIELD} from "../actions/actionTypes";
const initialState = { name: '', price: '', };
export default function serviceAddReducer(state = initialState, action){
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value,ident} = action.payload;
      return {...state, [name]: value,id:ident};
    case FILL_SERVICE_FIELD:
      const {nameOfService, priceOfService,id} = action.payload;
      return {id:id,name:nameOfService, price: priceOfService};
    default:
      return state;
  }
}