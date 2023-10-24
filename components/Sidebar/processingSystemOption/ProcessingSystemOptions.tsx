import React from 'react';

import SystemItem from './SystemItem/SystemItem';
import SystemList from './data/SystemList';
import layerTree from '@/static/layerTreeConfig';

const ProcessingSystemOptions = () => {
  return (
    <div className="flex-col">
      {layerTree.map((item, id) => (
        <SystemItem
          key={id}
          // name={item.name}
          // homelineOrResidential={item.homelineOrResidential}
          {...item}
        />
      ))}
    </div>
  );
};

export default ProcessingSystemOptions;
