import React, { useState } from 'react';


interface FilterSectionProps {
  title: string;
  options: string[];
  selected: string[];
  onChange: (category: string, selected: string[]) => void;
  category: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selected, onChange, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (option: string) => {
    const updated = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    onChange(category, updated);
  };

  const handleSelectAll = () => onChange(category, [...options]);
  const handleUnselectAll = () => onChange(category, []);

  const noneSelected = selected.length === 0;
  const allSelected = selected.length === options.length;

  const renderSelectedSummary = () => {
    if (noneSelected || allSelected) return 'All';
    return selected.join(', ');
  };

  return (
    <div style={{ borderBottom: '1px solid #ddd', padding: '15px 10px 15px 0px' }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</h4>
          <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            {renderSelectedSummary()}
          </div>
        </div>
        <span style={{ fontSize: '14px' }}>{isOpen ? <img src="/arrow-left.png" width={12} height={12}/> : <img src="/arrowdown.png" width={12} height={12}/>}</span>
      </div>

      {isOpen && (
        <div style={{ marginTop: '10px' }}>
          <div
            style={{
              fontSize: '12px',
              color: '#007bff',
              marginBottom: '8px',
              cursor: 'pointer',
            }}
          >
            {noneSelected ? (
              <span onClick={handleSelectAll}>Select all</span>
            ) : (
              <span onClick={handleUnselectAll}>Unselect all</span>
            )}
          </div>
          {options.map(option => (
            <label key={option} style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleToggle(option)}
                style={{ marginRight: '6px' }}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;

