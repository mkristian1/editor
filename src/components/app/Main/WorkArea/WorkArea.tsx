import { useState } from 'react';
import { useDrop } from 'react-dnd/dist/hooks';
import { v4 as uuidv4 } from 'uuid';
import { IElements, itemTypes, ToolsType } from '../../../../types';
import ImageUpload from '../../../common/ImageUpload';
import styles from './WorkArea.module.scss';

const WorkArea = () => {
  const [elements, setElements] = useState<IElements[]>([]);

  const handleDrop = (type: { type: string }) => {
    setElements((prev) => [...prev, { id: uuidv4(), ...type }]);
  };

  const [, drop] = useDrop<{ type: string }>(() => ({
    accept: itemTypes.card,
    drop: (item) => handleDrop(item),
  }));

  return (
    <div ref={drop} className={styles['work-area']}>
      {elements.length === 0 && (
        <div className={styles['work-area__drop-text']}>Drop elements here</div>
      )}
      {elements.map((item) => {
        return (
          <div className={styles['work-area__item']} key={item.id}>
            {item.type === ToolsType.image && <ImageUpload key={item.id} />}
            {item.type === ToolsType.input && (
              <textarea rows={6} key={item.id}></textarea>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkArea;
