import { useDroppable } from '@dnd-kit/core';
import styles from '../styles/Canvas.module.css';

export default function Canvas({ children }) {
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  return (
    <div ref={setNodeRef} className={styles.canvas}>
       <h1 className={styles.heading}>CANVAS AREA</h1> 
      {children}
    </div>
  );
}
