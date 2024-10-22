import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  //useImperetive handle is for using a function outside of the componenet! now I want to show the modal in the if condiftion which the inputs of the new project should not be empty ! use imeretive handle need the ref of the forward ref
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
