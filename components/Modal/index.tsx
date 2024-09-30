'use client'

import React, { useEffect, useRef } from 'react';
import { TypeModalProps } from './type';
import "./style.css"

const EModal: React.FC<TypeModalProps> = ({ open, children, header, footer = undefined, className, style, width = 420, center, onClose, onOk, onCancel, okText, cancelText, closeIcon }): JSX.Element => {
  const modalRef: any = useRef(null)

  useEffect(() => {

    if (modalRef.current) {

      if (open) {
        modalRef.current.focus()
      }
    }

  }, [open]);

  useEffect(() => {

    if (modalRef.current && onClose) {
      modalRef.current.onblur = () => {
        onClose()
      }
    }

    return () => {

      if (modalRef.current && onClose) {
        modalRef.current.onblur = null
      }
    }

  }, []);


  return (
    <div className={`e-modal-wrapper ${open ? "e-modal-wrapper-open" : "e-modal-wrapper-close"}`} ref={modalRef} >
      <div className={`e-modal-bg ${open ? "e-modal-bg-open" : "e-modal-bg-close"}`}></div>
      <div ref={modalRef} className={`e-modal shadow-xl overflow-auto max-h-screen ${open ? "e-modal-open" : "e-modal-close"} ${center ? "e-modal-center" : ""} ${className}`} style={{ ...style, width }}>
        {header ? <div className="e-modal-header">
          {header}
          {closeIcon === null ? null : <button className="e-text-btn e-modal-close-btn" onClick={onClose} ><i className="fas fa-times"></i></button>}
        </div> : null}
        <div className="e-modal-content">
          {children}
        </div>
        {footer === null ? null : <div className="e-modal-footer">
          {footer ??
            <div className='default-footer'>
              <button className="e-btn px-2 mr-2" onClick={onCancel ?? onClose} >{cancelText ?? "Cancel"}</button>
              <button className="e-btn px-2" onClick={onOk ?? onClose} >{okText ?? "Ok"}</button>
            </div>
          }
        </div>}
      </div>
    </div>
  );
  return <></>;
};

export default EModal;