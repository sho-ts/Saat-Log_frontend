import { useState } from 'react';

const useModal = (defaultOpen = false): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return [isOpen, handleModalOpen, handleModalClose];
};

export default useModal;
