'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import type { ElementRef, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const modalRoot = document.querySelector<HTMLDivElement>('#modal-root');

  if (!modalRoot)
    throw new Error(
      'please render <div id="modal-root"/> after children of root layout'
    );

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 h-screen w-screen bg-zinc-900/50"
      onClose={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss} className="close-button" /> */}
    </dialog>,
    modalRoot
  );
};
