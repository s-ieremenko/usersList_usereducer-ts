import React, { ChangeEvent, FC, FormEvent } from 'react';
import { IPerson } from "../types/types";

type FormProps = {
    person: IPerson,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form: FC<FormProps> = ({person, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <div style={{marginBottom: 10}}>
                <input type="text" value={person.firstName} name='firstName' onChange={onChange}/>
            </div>
            <div style={{marginBottom: 10}}>
                <input type="text" value={person.lastName} name='lastName' onChange={onChange}/>
            </div>
            <button type='submit'>Add person</button>
        </form>
    );
};

export default Form;