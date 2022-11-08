import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
export default function ModalContacto() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Contacto
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Contacto !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <AiOutlineWhatsApp /> 4271172096                       
                    </div>
                    <div >
                        <AiOutlineWhatsApp /> 4271417939                       
                    </div>
                    <div>
                        <AiOutlineMail  /> firemanf58@gmail.com
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    )
}