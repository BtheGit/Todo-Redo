import { generateRandomId } from '../utilities/';

export const TODO_ADD     = 'TODO_ADD';
export const TODO_TOGGLE  = 'TODO_TOGGLE';
export const TODO_DELETE  = 'TODO_DELETE';


export function todoAdd(text) {
  return {
    type: TODO_ADD,
    payload: {
      id: generateRandomId(),
      isDone: false,
      text
    }
  }
}

export function todoToggle(id) {
  return {
    type: TODO_TOGGLE,
    payload: {
      id
    }
  }
}

export function todoDelete(id) {
  return {
    type: TODO_DELETE,
    payload: {
      id
    }
  }
}