import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

import { useBrowser, useScrollLock } from "@hooks";

export interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, onClose, isVisible } = props;
  const { lockScroll, unlockScroll } = useScrollLock();
  const { isBrowser } = useBrowser();

  useEffect(() => {
    const handleKeyDown: (e: WindowEventMap["keydown"]) => void = (e) => {
      e.preventDefault();
      if (e.code !== "Escape") {
        return;
      }

      onClose();
      unlockScroll();
    };

    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isVisible, unlockScroll]);

  useEffect(() => {
    if (!isVisible) return;

    lockScroll();
  }, [isVisible, lockScroll]);

  const handleClose = () => {
    onClose();
    unlockScroll();
  };

  const handleBackdropClick: (e: MouseEvent) => void = (e) => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          className="modal__backdrop"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="modal">
            <motion.button
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="modal__close-btn"
              onClick={handleClose}
            >
              <span className="modal__close-icon">&times;</span>
            </motion.button>
            <motion.div
              className="modal__body"
              initial={{ x: "-50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.7 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document?.body
  );
};
