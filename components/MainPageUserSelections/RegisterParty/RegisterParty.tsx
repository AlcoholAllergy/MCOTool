import { useEffect } from 'react';

import getCSS from '../tabsCSS';
import ToggleTool from '../toggleTool/toggleTool';

import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setCurrentRegisterParty,
  setFileOptionList,
  setFinalType,
  setFileOption,
  setFileStatus,
  setPurchaseTypeList,
  setPurchaseType,
  setPromptsList,
  setHowExistingMtgMoveList,
  setHowExistingMtgMove,
  setNotePadNotes,
} from '@/redux/userSelection/userSelectionSlice';

const RegisterParty = () => {
  const dispatch = useDispatch();

  const {
    selectedRegisterParty,
    registerPartiesList,
    homelineOrResidential,

    port: { isPort },
    notes: { notePadNotes },
  } = useSelector((state: RootState) => state.userSelect);

  useEffect(() => {
    if (selectedRegisterParty) {
      const fileOptionsList = registerPartiesList.filter(
        (item) => item.name === selectedRegisterParty,
      )[0].fileOptions;
      if (fileOptionsList) {
        dispatch(setFileOptionList(fileOptionsList));
      }
    }

    return () => {};
  }, [selectedRegisterParty, registerPartiesList, dispatch]);

  //handle all the envents once user click the bottom
  const onClickHandler = (party: any) => {
    return (e: MouseEvent) => {
      if (party.name === 'Internal') {
        dispatch(setHowExistingMtgMoveList(party['howExistingMtgMove']));
        dispatch(setHowExistingMtgMove(''));
        dispatch(setCurrentRegisterParty(party.name));
        dispatch(setLayerCount(2));
        dispatch(setFinalType(''));
        dispatch(setFileOption(''));
        dispatch(setFileStatus(''));
        dispatch(setPurchaseTypeList([]));
        dispatch(setPurchaseType(''));
        dispatch(setPromptsList([]));
        dispatch(setFileOptionList([]));
        return;
      }
      dispatch(setCurrentRegisterParty(party.name));
      dispatch(setLayerCount(2));
      dispatch(setFinalType(''));
      dispatch(setFileOption(''));
      dispatch(setFileStatus(''));
      dispatch(setPurchaseTypeList([]));
      dispatch(setPurchaseType(''));
      dispatch(setPromptsList([]));
      dispatch(setHowExistingMtgMoveList([]));
      dispatch(setHowExistingMtgMove(''));
      if (party.name === 'FCT') {
        if (notePadNotes.startsWith('CED: ___\n')) {
          return;
        }
        dispatch(setNotePadNotes('CED: ___\n' + notePadNotes));
      }
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {registerPartiesList.map((party) => {
        const selected = party.name === selectedRegisterParty;
        return (
          <a
            className={getCSS(selected)}
            key={party.id}
            onClick={onClickHandler(party)}
          >
            {party.name}
          </a>
        );
      })}
      {!isPort && homelineOrResidential === 'Homeline' && (
        <ToggleTool label="RCL only" />
      )}
      {<ToggleTool label="holding company" />}
    </div>
  );
};

export default RegisterParty;
