import React, { FC } from 'react';
import { IPerson } from "../types/types";

type PersonProps = {
    person: IPerson,
    onPersonRemove: (id: string, firstName: string, lastName: string) => void,

}

const Person: FC<PersonProps> = ({person, onPersonRemove}) => {
    const {id, lastName, firstName} = person

    return (
        <li>
            <p style={{marginRight: 10, display: "inline-block"}}>{firstName} {lastName}</p>
            <button onClick={() => onPersonRemove(id, firstName, lastName)}>remove person</button>
        </li>

    )

}
export default Person;
