import { DndContext } from '@dnd-kit/core';
import Sidebar from '../components/Sidebar';
import Canvas from '../components/Canvas';
import ClientOnly from '../components/ClientOnly'
import styles from '../styles/Home.module.css';
import { BsCartFill } from "react-icons/bs";
import { useState } from 'react';

type ClothingItemType = {
  id: string;
  src: string;
};

export default function Home() {
  const [outfit, setOutfit] = useState<ClothingItemType[]>([]);

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOutfit([]);
  };
  
  
  const handleSave = () => {
    localStorage.setItem('savedOutfit', JSON.stringify(outfit));
    alert('Outfit saved!');
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over?.id === 'canvas') {
      setOutfit(prev => [...prev, active.id]);
    }
  };

  const handleAddToCart = () => {
    alert(`Added outfit to cart: ${outfit.join(', ')}`);
  };

  return (
    <div className={styles.appContainer}>
    <ClientOnly>
      <DndContext onDragEnd={handleDragEnd}>
        <h1 className={styles.title}>Outfit Builder</h1>
        <div className={styles.container}>
          <Sidebar />
          <Canvas>
            {outfit.map((id, index) => (
              <img key={index} src={`/icons/${id}.png`} className={styles.canvasItem} alt="" />
            ))}
          </Canvas>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleReset} className={styles.btn}>Reset</button>
          <button onClick={handleSave} className={styles.btn}>Save Outfit</button>
          <button onClick={handleAddToCart} className={styles.btn}>Add to Cart <BsCartFill /></button>
        </div>
      </DndContext>
    </ClientOnly>
    </div>
  );
}
