import { icons } from '@/components/common/icons/icons';

export const IconShowcasePage = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
        gap: 24,
        padding: 32,
      }}
    >
      {icons.map(({ Comp, name }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Comp size={48} title={name} />
          <span style={{ marginTop: 8, fontSize: 12, color: '#444' }}>{name}</span>
        </div>
      ))}
    </div>
  );
};
