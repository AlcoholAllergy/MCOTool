import { useEffect } from 'react';

import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setFileStatus,
  setNotes,
} from '@/redux/userSelection/userSelectionSlice';

type FileStatustype = {
  id: number;
  name: 'In Order' | 'OOO Review Complete' | 'OOO Review Incomplete';
};

const fileStatysTypeList: FileStatustype[] = [
  { id: 1, name: 'In Order' },
  { id: 2, name: 'OOO Review Complete' },
  { id: 3, name: 'OOO Review Incomplete' },
];

const FileStatus = () => {
  const dispatch = useDispatch();

  const { fileStatus, notes } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (state: any) => {
    return (e: MouseEvent) => {
      dispatch(setFileStatus(state.name));
      dispatch(setNotes(!notes.dummyState));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {fileStatysTypeList.map((state) => {
        const selected = state.name === fileStatus;
        return (
          <a
            className={`tab tab-lifted tab-md font-semibold text-gray-300 hover:scale-105 ${
              selected ? 'tab-active bg-secondary text-gray-600' : null
            }`}
            key={state.id}
            onClick={onClickHandler(state)}
          >
            {state.name}
          </a>
        );
      })}
    </div>
  );
};

export default FileStatus;
