import React, { FC } from 'react';

type ModalProps = {
    modalContent: string,
    closeModal: () => void
}
const Modal: FC<ModalProps> = ({modalContent, closeModal}) => {
    return (
        <div style={{width: 150, background: "lightgray", padding: 5, position: 'relative', marginBottom: 10}}>
            <p>{modalContent}</p>
            <button style={{position: 'absolute', top: 0, right: 0, color: 'red'}} onClick={closeModal}>X</button>
        </div>
    );
};

export default Modal;