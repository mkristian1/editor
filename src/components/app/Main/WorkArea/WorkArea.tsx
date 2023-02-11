import { useState } from 'react';
import { useDrop } from 'react-dnd/dist/hooks';
import { itemTypes, ToolsType } from '../../../../types';
import styles from './WorkArea.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ImageUpload from '../../../common/ImageUpload';

const WorkArea = () => {
  const [elements, setElements] = useState([
    { id: uuidv4(), type: ToolsType.image },
  ]);

  const handleDrop = (type: { type: string }) => {
    setElements((prev) => [...prev, { id: uuidv4(), ...type }]);
  };

  const [, drop] = useDrop<{ type: string }>(() => ({
    accept: itemTypes.card,
    drop: (item) => handleDrop(item),
  }));

  return (
    <div ref={drop} className={styles['work-area']}>
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
