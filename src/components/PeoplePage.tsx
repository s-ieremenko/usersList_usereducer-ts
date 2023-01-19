import React, { ChangeEvent, FC, FormEvent, useReducer, useState } from 'react';
import { IPerson } from "../types/types";
import { reducer } from '../reducer'
import { v4 as uuidv4 } from 'uuid'
import Modal from "./Modal";
import Form from "./Form";
import Person from "./Person";


const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}

const PeoplePage: FC = () => {
    const [person, setPerson] = useState<IPerson>({id: '', firstName: '', lastName: ''})

    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]: value})
        dispatch({type: 'CLOSE_MODAL'})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (person.firstName && person.lastName) {
            const newPerson = {...person, id: uuidv4()}
            dispatch({type: 'ADD_PERSON', payload: newPerson})
            setPerson({id: '', firstName: '', lastName: ''})
        } else {
            dispatch({type: 'NO_VALUE'})
        }
    }
    const handlePersonRemove = (id: string, firstName: string, lastName: string) => {
        dispatch({type: 'REMOVE_PERSON', payload: {id, firstName, lastName}})

    }

    const handleAllPeopleRemove = () => {
        dispatch({type: 'CLEAR_ALL'})
    }

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'})
    }
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
            <Form person={person} onChange={handleChange} onSubmit={handleSubmit}/>
            <ul style={{listStyle: 'none'}}>
                {state.people.map((person) => {
                    return <Person key={person.id} person={person} onPersonRemove={handlePersonRemove}/>
                })
                }

            </ul>
            <button onClick={handleAllPeopleRemove}>clear all</button>

        </>
    );
};


export default PeoplePage;