import React from 'react';
import { HiBell } from 'react-icons/hi';

import { RootState, AppDispatch } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Prompt: React.FC = () => {
  const { promptsList } = useAppSelector(
    (state: RootState) => state.userSelect,
  );

  const onclickHandler = () => {};

  return (
    <div className="dropdown dropdown-hover ml-6">
      <label tabIndex={0} className="btn m-1">
        <HiBell size="1.5rem" color="orange" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-orange-400"
        style={{ width: '550px' }}
      >
        {promptsList.map((prompt, index) => {
          return (
            <li key={index}>
              <p className="py-2 text-md break-words w-full text-black">
                {prompt}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Prompt;
