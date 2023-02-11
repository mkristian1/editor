import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { itemTypes } from '../../../types';
import styles from './Card.module.scss';

interface ICard {
  children: string | JSX.Element;
  type: string;
}

const Card: FC<ICard> = ({ children, type }) => {
  const [, drag] = useDrag<{ type: string }, void>({
    type: itemTypes.card,
    item: { type },
  });

  return (
    <div ref={drag} className={styles['card']}>
      {children}
    </div>
  );
};

export default Card;
