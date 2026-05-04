import React from 'react';
import clsx from 'clsx';

interface FilterTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ tabs, active, onChange }) => (
  <div className="flex gap-2">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={clsx(
          'px-4 py-2 rounded-lg font-medium text-sm transition-all',
          active === tab
            ? 'bg-primary text-white shadow'
            : 'bg-surface-2 text-text-secondary hover:bg-surface-3'
        )}
        onClick={() => onChange(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default FilterTabs;
