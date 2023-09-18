import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import SystemItem from './SystemItem/SystemItem';
import SystemList from './data/SystemList';

const SystemParty = () => {
  const currentSystem = useSelector(
    (state: RootState) => state.userSelect.selectedSystem,
  );

  return (
    <div className="flex-col">
      {SystemList.map((item, id) => (
        <SystemItem key={id} {...item} />
      ))}
    </div>
  );
};

export default SystemParty;
