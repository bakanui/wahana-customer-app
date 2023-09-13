'use client'
import { Children, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 0,
      borderRadius: 10
    },
    overlay: {
        zIndex: 9999,
        backdropFilter: 'blur(5px)',
        backgroundColor:'rgba(0,0,0,0.1)'
    },
};
  
Modal.setAppElement('#root');
  
interface IProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}
export const CustomModal = ({
    modalIsOpen,
    closeModal,
    children
}: IProps) => {
    const afterModalOpened = () => {
        document.body.style.overflow = 'hidden';
    }
    const afterModalClosed = () => {
        document.body.style.overflow = 'unset';
    }

    useEffect(()=> {
        if(modalIsOpen) {
            afterModalOpened();
        }
        if (!modalIsOpen) {
            afterModalClosed();
        }
    }, [modalIsOpen]);

    return(
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            overlayClassName="Overlay"
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc
            closeTimeoutMS={500}
        >
            {children}
        </Modal>
    );
}