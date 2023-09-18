import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

const MainPageUserSelections = () => {
  const currentSystem = useSelector(
    (state: RootState) => state.userSelect.selectedSystem,
  );
  let mainPageContent;

  switch (currentSystem) {
    case 'Linx':
      mainPageContent = <div>Linx</div>;
      break;

    default:
      break;
  }
  return mainPageContent;
};

export default MainPageUserSelections;
