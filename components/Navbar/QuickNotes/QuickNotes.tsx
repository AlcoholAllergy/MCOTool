import React, { useState } from 'react';
import { GrNotes } from 'react-icons/gr';
import { GrAddCircle } from 'react-icons/gr';

import QUICKNOTES from '@/static/quickNotes';

const QuickNotes: React.FC = () => {
  const onClickHandler = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const [newNote, setNewNote] = useState('');
  const [quickNotesList, setQuickNotesList] = useState(QUICKNOTES);
  const [timerId, setTimerId] = useState<number | null>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value);
  };

  const buttonHandler = () => {
    if (newNote) {
      setQuickNotesList([
        ...quickNotesList,
        { id: quickNotesList.length + 1, value: newNote },
      ]);
      setNewNote('');
    }
  };

  const startHold = (id: number) => {
    const newTimerId = window.setTimeout(() => {
      setQuickNotesList((prevNotes) =>
        prevNotes.filter((note) => note.id !== id),
      );
      setTimerId(null);
    }, 1800); // 2000 ms = 2 seconds
    setTimerId(newTimerId);
  };

  const clearHold = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      setTimerId(null);
    }
  };

  return (
    <div className="dropdown dropdown-hover ml-10">
      <label tabIndex={0} className="btn m-1 bg-yellow-300 hover:bg-yellow-300">
        <GrNotes size="1.5rem" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-50 menu p-2 shadow bg-yellow-500 rounded-box "
        style={{ width: '650px' }}
      >
        {quickNotesList.map((note, index) => (
          <li
            key={note.id}
            onClick={() => onClickHandler(note.value)}
            onMouseDown={() => startHold(note.id)}
            onMouseUp={clearHold}
            onMouseLeave={clearHold}
            onTouchStart={() => startHold(note.id)}
            onTouchEnd={clearHold}
            className={`w-full ${
              index < quickNotesList.length - 1 ? 'border-b' : ''
            } border-gray-200`} // Add a border to all but the last item
          >
            <p className="py-2 text-md break-words w-full">{note.value}</p>
          </li>
        ))}
        <li className="flex items-start p-2 align-middle relative">
          <input
            type="text"
            value={newNote}
            onChange={(e) => onChangeHandler(e)}
            className=" mr-2 p-1 border rounded  w-96 bg-white"
          />
          <button
            onClick={buttonHandler}
            className="absolute inset-y-2 right-48 bg-slate-600 flex justify-center items-center"
          >
            +
          </button>
        </li>
      </ul>
    </div>
  );
};

export default QuickNotes;
