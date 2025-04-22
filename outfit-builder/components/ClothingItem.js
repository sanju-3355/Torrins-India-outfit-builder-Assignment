import { useDraggable } from '@dnd-kit/core';
import styles from '../styles/ClothingItem.module.css';

export default function ClothingItem({ id, src }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={src}
      className={styles.icon}
      style={style}
      alt=""
    />
  );
}
