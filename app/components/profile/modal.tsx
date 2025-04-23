import { type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50  flex justify-center items-center z-50"
      onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

interface ModalTriggerProps {
  children: ReactNode;
  onClick: () => void;
}

export const ModalTrigger = ({ children, onClick }: ModalTriggerProps) => {
  return <div onClick={onClick}>{children}</div>;
};
