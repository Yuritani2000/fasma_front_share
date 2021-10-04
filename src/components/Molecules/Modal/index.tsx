import React from 'react';
import { ModalBase } from './styledComponent';


export type Props = {
  children?: React.ReactNode;
}

const Modal: React.FC = (props: Props) => {
  return (
    <ModalBase>
      { props.children }
    </ModalBase>
  );
}
export default Modal