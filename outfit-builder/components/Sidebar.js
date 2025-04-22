import ClothingItem from './ClothingItem';

const items = [
  { id: 'tshirt', src: '/icons/tshirt.png' },
  { id: 'pants', src: '/icons/pants.png' },
  { id: 'jacket', src: '/icons/jacket.png' },
  { id: 'dress', src: '/icons/dress.png' },
  { id: 'hat', src: '/icons/hat.png' },
  { id: 'shoes', src: '/icons/shoes.png' },
];

export default function Sidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '2px solid #aaa', borderRadius: '6px', padding:'20px', marginRight: '-10px' }}>
      {items.map(item => (
        <ClothingItem key={item.id} id={item.id} src={item.src} />
      ))}
    </div>
  );
}
