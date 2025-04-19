import React, { useState } from 'react';
import FilterSection from '../../Components/FilterSection';

const filterConfig = [
  { title: 'Ideal For', category: 'idealFor', options: ['Men', 'Women', 'Baby & Kids'] },
  { title: 'Occasion', category: 'occasion', options: ['Casual', 'Formal', 'Party'] },
  { title: 'Work', category: 'work', options: ['Embroidered', 'Printed', 'Solid'] },
  { title: 'Fabric', category: 'fabric', options: ['Cotton', 'Silk', 'Linen'] },
  { title: 'Pattern', category: 'pattern', options: ['Checked', 'Striped', 'Plain'] },
];

type SelectedFilters = {
  [key: string]: string[];
};

const Filter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const handleChange = (category: string, selected: string[]) => {
    setSelectedFilters(prev => ({ ...prev, [category]: selected }));
  };

  return (
    <div className="sidebar">
      {filterConfig.map(config => (
        <FilterSection
          key={config.category}
          title={config.title}
          options={config.options}
          selected={selectedFilters[config.category] || []}
          onChange={handleChange}
          category={config.category}
        />
      ))}
    </div>
  );
};

export default Filter;
