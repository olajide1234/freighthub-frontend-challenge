export interface IModalProps {
  modalShow: boolean;
  isNameInputEmpty: boolean;
  handleSave: () => void,
  closeModal: () => void,
  children: React.ReactElement[];
  oldName: string;
}
