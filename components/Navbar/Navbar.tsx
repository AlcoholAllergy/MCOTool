import Holidays from 'date-holidays';
import moment from 'moment';
import InputComponent from '../InputComponent/InputComponent';
import QuickNotes from './QuickNotes/QuickNotes';

const getNextHoliday = () => {
  const hd = new Holidays('CA', 'ON');
  let date = moment();
  let holidayFound = false;
  let res = '';
  while (!holidayFound) {
    date = date.add(1, 'days');
    const holidays = hd.isHoliday(date.toDate());
    if (holidays && holidays.length > 0 && holidays[0].type === 'public') {
      let observedDate = moment(date);
      // Check if the holiday falls on a weekend
      if (observedDate.day() === 6) {
        // Saturday
        observedDate = observedDate.add(2, 'days'); // Observed on Monday
      } else if (observedDate.day() === 0) {
        // Sunday
        observedDate = observedDate.add(1, 'days'); // Observed on Monday
      }
      res += `${holidays[0].name}: ${observedDate.format('MMMM DD, YYYY')}`;
      holidayFound = true;
    }
  }
  return res;
};

const Navbar = () => {
  const nextHoliday = getNextHoliday();

  return (
    <div className="flex justify-between items-center col-start-2 col-end-13 h-24 bg-blue-600 text-black ">
      <QuickNotes />
      <span className="ml-10 hidden sm:inline bg-blue-500 text-white p-2 rounded">
        {`${nextHoliday}`}
      </span>
      {/* TODO: add a input box for user employee ID */}
      <InputComponent
        as="input"
        className="mr-8 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        placeholder=" employee ID"
      />
    </div>
  );
};

export default Navbar;
