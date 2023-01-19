import { IPerson } from "./types/types";


type State = {
    people: IPerson[],
    isModalOpen: boolean,
    modalContent: string
}

type PEOPLE_LIST_UPDATE = { type: 'ADD_PERSON' | 'REMOVE_PERSON', payload: IPerson }
type CLOSE_MODAL = { type: 'CLOSE_MODAL' }
type EMPTY_INPUT = { type: 'NO_VALUE' }
type CLEAR_ALL = { type: 'CLEAR_ALL' }

type Action = PEOPLE_LIST_UPDATE | CLOSE_MODAL | EMPTY_INPUT | CLEAR_ALL

export const reducer = (state: State, action: Action): State => {
    if (action.type === 'ADD_PERSON') {
        const newPeople: IPerson[] = [...state.people, action.payload]
        return {...state, people: newPeople, modalContent: 'added', isModalOpen: true}
    }

    if (action.type === 'REMOVE_PERSON') {
        const newList = state.people.filter(person => person.id !== action?.payload?.id)
        return {
            ...state,
            people: newList,
            modalContent: `Person ${action?.payload?.firstName} ${action?.payload?.lastName} is removed`,
            isModalOpen: true
        }
    }
    if (action.type === 'NO_VALUE') {
        return {...state, isModalOpen: true, modalContent: 'Please fill out the form'}
    }

    if (action.type === 'CLOSE_MODAL') {
        return {...state, isModalOpen: false}
    }
    if (action.type === 'CLEAR_ALL') {
        return {...state, people: [], isModalOpen: false}
    }
    return state

}
