import { useEffect, useState } from 'react';
import { dummy } from '../../../assets';
import styles from './ImageUpload.module.scss';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [preview, setPreview] = useState(dummy);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event?.target?.files?.[0]);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);
  
  return (
    <div className={styles['wrap']}>
      <label>
        <input
          onChange={handleUpload}
          className="hidden"
          type="file"
          accept="image/png, image/jpeg"
        />
        <img className={styles['image']} alt="Image" src={preview} />
      </label>
    </div>
  );
};

export default ImageUpload;
