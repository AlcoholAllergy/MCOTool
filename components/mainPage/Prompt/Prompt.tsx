import React from 'react';
import { RootState, AppDispatch } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Prompt = () => {
  const { promptsList } = useAppSelector(
    (state: RootState) => state.userSelect,
  );
  return promptsList.length != 0 && <div>prompts compo to be finished</div>;
};

export default Prompt;
