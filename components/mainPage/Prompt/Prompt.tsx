import React, { useState } from 'react';
import { HiBell } from 'react-icons/hi';
import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';

const Prompt: React.FC = () => {
  const { promptsList } = useAppSelector(
    (state: RootState) => state.userSelect,
  );
  const [clickedItems, setClickedItems] = useState<Set<number>>(new Set());

  const onclickHandler = (index: number) => {
    setClickedItems((prevClickedItems) => {
      const newClickedItems = new Set(prevClickedItems);
      if (newClickedItems.has(index)) {
        newClickedItems.delete(index);
      } else {
        newClickedItems.add(index);
      }
      return newClickedItems;
    });
  };

  return (
    <div className="dropdown dropdown-hover ml-6">
      <label tabIndex={0} className="btn m-1">
        <HiBell size="1.5rem" color="orange" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-orange-400"
        style={{ width: '350px' }}
      >
        {promptsList.map((prompt, index) => (
          <li
            key={index}
            onClick={() => onclickHandler(index)}
            className={`py-2 text-md break-words w-full text-gray-700 hover:bg-orange-300 rounded ${
              clickedItems.has(index) ? 'line-through' : ''
            }`}
          >
            {prompt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prompt;
