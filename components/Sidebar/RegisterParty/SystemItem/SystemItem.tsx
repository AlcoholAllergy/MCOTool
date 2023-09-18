import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSystem } from '@/redux/userSelection/userSelectionSlice';
import { RootState, AppDispatch } from '@/redux/store';

interface SystemItemProps {
  name: string;
}

const SystemItem = ({ name }: SystemItemProps) => {
  const currentSystem = useSelector(
    (state: RootState) => state.userSelect.selectedSystem,
  );

  const dispatch = useDispatch();
  // Dispatch your Redux action to update the selected item
  const onClickHandler = () => {
    dispatch(setCurrentSystem(name));
  };

  // for css
  const itemClass = `mt-8 mb-8 mx-8 truncate select-none h-20 flex justify-center items-center text-2xl text-gray-300 hover:text-white px-3 py-2 ${
    name === currentSystem
      ? 'bg-blue-800 shadow-md border-4 border-gray-500 scale-95 rounded-lg p-2'
      : 'bg-gray-900 hover:bg-gray-600 transition duration-200 transform hover:scale-90 rounded-lg'
  }`;
  return (
    <p className={`${itemClass}`} onClick={onClickHandler}>
      {name}
    </p>
  );
};

export default SystemItem;
