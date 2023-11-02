import React, { useState, ChangeEvent } from 'react';
import { BiSolidCopy } from 'react-icons/bi';

const BusinessNote = () => {
  const [text, setText] = useState<string>('');

  const onchangeHadler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const onclickHandler = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text text-cyan-200">Business Note</span>
      </label>
      <div className="relative w-full">
        <textarea
          className="textarea  text-cyan-800 h-30 w-full" // Full width for responsiveness
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

export default BusinessNote;
