import React, { useEffect } from 'react';
import css from './Modal.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ active, setActive, children }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [active, setActive]);

  return (
    <div
      className={active ? `${css['modal']} ${css['active']}` : css['modal']}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${css['modal__content']} ${css['active']}` : css['modal__content']}
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose onClick={() => setActive(false)} className={css['close__icon']} />
        {children}
      </div>
    </div>
  );
}
