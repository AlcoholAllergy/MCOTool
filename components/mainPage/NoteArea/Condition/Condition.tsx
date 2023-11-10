import React, { useState, ChangeEvent, useEffect } from 'react';
import { getConditions } from '@/utils/findNotesTool';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import { BiSolidCopy } from 'react-icons/bi';

const Condition = () => {
  const [text, setText] = useState<string>('');
  const { finalType, homelineOrResidential, notes } = useSelector(
    (state: RootState) => state.userSelect,
  );

  const onchangeHadler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const onclickHandler = () => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const condition = getConditions(homelineOrResidential, finalType);
    setText(condition);
  }, [finalType, homelineOrResidential]);

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-cyan-200">Condition</span>
      </label>
      <div className="relative w-full">
        <textarea
          className="textarea  text-cyan-800 h-32 w-full" // Full width for responsiveness
          value={text}
          onChange={onchangeHadler}
        ></textarea>
        {/* Placeholder for the button you plan to add later */}
        <div className="absolute inset-y-0 -right-14 flex items-center">
          <BiSolidCopy
            color="yellow"
            onClick={onclickHandler}
            className="text-yellow-500 active:scale-90 hover:scale-105 hover:bg-blue-800 hover:shadow-md p-2 rounded"
            size="3rem"
          />
        </div>
      </div>
    </div>
  );
};

export default Condition;
