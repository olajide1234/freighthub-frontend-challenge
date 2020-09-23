import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IModalProps } from '../interfaces/index';

import '../styles/modal.scss';

export default function ({
  modalShow,
  isNameInputEmpty,
  handleSave,
  closeModal,
  children,
  oldName,
}: IModalProps) {
  return (
    <Modal show={modalShow} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Old shipment name:
          {oldName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={!isNameInputEmpty}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
