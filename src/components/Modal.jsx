import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Buttons from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
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
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md "
    >
      {children}
      <form method="dialog"  className="mt-4 text-right ">
        <Buttons>{buttonCaption}</Buttons>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
