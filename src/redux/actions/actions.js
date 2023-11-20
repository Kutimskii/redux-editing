import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD,FILL_SERVICE_FIELD } from './actionTypes';
export function addService(name, price, ident) {
  return {type: ADD_SERVICE, payload: {name, price, ident}};
}
export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}
export function changeServiceField(name, value,ident) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value,ident}};
}
export function fillServiceField(nameOfService, priceOfService,id) {
  return {type: FILL_SERVICE_FIELD, payload: {nameOfService, priceOfService,id}};
}