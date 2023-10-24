import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setFileOption,
  setFinalType,
  setBorrowerChangeList,
  setIsPort,
  setPortTypesList,
} from '@/redux/userSelection/userSelectionSlice';

const FileOption = () => {
  const dispach = useDispatch();

  const { fileOption, fileOptionList } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      const name = option.name;
      dispach(setFileOption(name));
      if (option.hasOwnProperty('transactionType')) {
        dispach(setIsPort(false));
        dispach(setFinalType(name));
        dispach(setBorrowerChangeList([]));

        return;
      } else if (option.hasOwnProperty('portTypes')) {
        dispach(setIsPort(true));
        dispach(setPortTypesList(option.portTypes));
        dispach(setLayerCount(3));
        dispach(setBorrowerChangeList([]));
      } else {
        dispach(setBorrowerChangeList(option.borrowerOptions));
        dispach(setIsPort(false));
        dispach(setLayerCount(3));
      }
      dispach(setFinalType(''));
    };
  };

  return (
    <div className="flex justify-start items-center mt-[-50px]">
      {fileOptionList.map((option) => {
        const selected = option.name === fileOption;
        return (
          <p
            className={`truncate select-none m-0 py-2 px-4  text-white bg-gray-900 cursor-pointer duration-300 text-xl ${
              selected
                ? 'bg-gray-400  scale-95'
                : 'bg-gray-900 hover:bg-yellow-400 hover:scale-90'
            }`}
            key={option.id}
            onClick={onClickHandler(option)}
          >
            {option.name}
          </p>
          //   to add orderStatus component if have a finalType value
        );
      })}
    </div>
  );
};

export default FileOption;
