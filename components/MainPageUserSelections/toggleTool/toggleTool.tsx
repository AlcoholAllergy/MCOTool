import React, { useState } from 'react';

import { RootState, AppDispatch } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import {
  setRclOnly,
  setHoldingCompany,
} from '@/redux/userSelection/userSelectionSlice';

interface ToggleToolProps {
  label: string;
}

const ToggleTool: React.FC<ToggleToolProps> = ({ label }) => {
  const { rclOnly, holdingCompany } = useAppSelector(
    (state: RootState) => state.userSelect,
  );
  const dispatch = useAppDispatch();

  const onChangeHandler = (label: string) => {
    if (label === 'RCL only') {
      dispatch(setRclOnly(!rclOnly));
    } else if (label === 'holding company') {
      dispatch(setHoldingCompany(!holdingCompany));
    }
  };

  return (
    <div className="form-control ml-40">
      <label className="label cursor-pointer">
        <span className="label-text text-yellow-400">{label}</span>
        <input
          type="checkbox"
          checked={label === 'RCL only' ? rclOnly : holdingCompany}
          className="toggle ml-3 "
          onChange={() => onChangeHandler(label)}
        />
      </label>
    </div>
  );
};

export default ToggleTool;
