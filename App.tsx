import './App.css';
import React from 'react';
import { Planet } from 'react-kawaii';
import { useDispatch, useSelector } from 'react-redux';
import { updateMood, MOODS } from './mood';

export default function App() {
  const dispatch = useDispatch();
  const currentMood = useSelector((state) => state.mood);

  const onClicked = () => console.log('clicked');

  return (
    <div className="App">
      <Planet size={320} mood={currentMood} />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button
            data-type={mood}
            key={mood}
            className={`${currentMood === mood ? 'selected' : ''}`}
            onClick={(evt) =>
              dispatch(
                updateMood((evt.target as HTMLButtonElement).dataset.type)
              )
            }
          >
            {mood}
          </button>
        ))}
      </section>
    </div>
  );
}
