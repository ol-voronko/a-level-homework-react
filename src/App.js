import { useState, useEffect, useRef } from "react";
import "./App.css";
import { data, characters, episodes, characters2 } from "./data";

// lesson 1
// const NationCard = ({ card }) => {
//   const {
//     Nation,
//     Year,
//     Population,
//     ["Slug Nation"]: slugNation,
//     ["ID Nation"]: idNation,
//     ["ID Year"]: idYear,
//   } = card;
//   return (
//     <div className="episode">
//       <h2>{Nation}</h2>
//       <p>{idNation}</p>

//       <p>{idYear}</p>
//       <strong>{Year}</strong>
//       <br />
//       <span>{Population}</span>
//       <p>{slugNation}</p>
//     </div>
//   );
// };

//  const CharacterCard = ({ character }) => {
//   const {
//     name,
//     height,
//     mass,
//     hair_color,
//     skin_color,
//     eye_color,
//     birth_year,
//     gender,
//     films,
//   } = character;
//   return (
//     <div className="episode">
//       <h2>{name}</h2>
//       <span>Зріст :{height} </span>
//       <span> Вага :{mass} кг </span>
//       <br />
//       <span>Колір шкіри: {skin_color}. </span>
//       {hair_color !== "n/a" && hair_color !== "none" && (
//         <span>Колір волосся:{hair_color}.</span>
//       )}
//       <br />
//       <span style={{ color: eye_color }}>Колір очей </span>
//       <span>Рік народження: {birth_year}.</span>

//       {gender !== "n/a" && (
//         <span>{gender.slice(0, 1).toUpperCase() + gender.slice(1)}</span>
//       )}

//       <p>
//         {films.map((film, i) => (
//           <a href={films[i]}>Фільм{i + 1} </a>
//         ))}
//       </p>
//     </div>
//   );
// };

//  const Episode = ({ episode }) => {
//   const { name, air_date, characters } = episode;
//   return (
//     <div className="episode">
//       <h2>{name}</h2>
//       <strong>{air_date}</strong>
//       <ul>
//         {characters.map((character) => (
//           <li>{character.name} </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//  const Episodes = ({ episodes }) => (
//   <>
//     <h2>Episodes</h2>
//     <div className="episodes">
//       {episodes.map((episode) => (
//         <Episode episode={episode} />
//       ))}
//     </div>
//   </>
// );

//  const Character = ({ character }) => {
//   const { name, gender, image, episode } = character;
//   return (
//     <div className="episode">
//       <h2>{name}</h2>
//       <strong>{gender}</strong>
//       {image && <img src={image} alt="hero`s portrait " />}
//       {episode.map(({ name, air_date }) => (
//         <div>
//           <p>
//             {name}
//             <span>({air_date})</span>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Characters = ({ characters2 }) => (
//   <>
//     <h2>Characters</h2>
//     <div className="episodes">
//       {characters2.map((character) => (
//         <Character character={character} />
//       ))}
//     </div>
//   </>
// );

// Lesson 2

// const Spoiler = ({ header = "+", open, children }) => {
//   const [isOpen, setIsOpen] = useState(open);
//   return (
//     <div>
//       <div onClick={() => setIsOpen((open) => !open)}>{header}</div>
//       {isOpen && children}
//     </div>
//   );
// };

// const RangeInput = ({ min, max, ...originalProps }) => {
//   const [text, setText] = useState("");
//   return (
//     <>
//       <input
//         value={text}
//         style={
//           text.length && (text.length < min || text.length > max)
//             ? { backgroundColor: "red" }
//             : { backgroundColor: "transparent" }
//         }
//         onChange={(e) => setText(e.target.value)}
//       />
//     </>
//   );
// };

// const LoginForm = ({ min, max, onLogin }) => {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");

//   const hasError = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(
//     password
//   );
//   return (
//     <div>
//       <input value={login} onChange={(e) => setLogin(e.target.value)} />
//       <input
//         value={password}
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {!hasError && (
//         <p style={{ color: "red", fontSize: "10px" }}>
//           пароль має містити літери маленького та великого регістру та цифри
//         </p>
//       )}
//       <button
//         disabled={
//           !login ||
//           login.length < min ||
//           login.length > max ||
//           !password ||
//           password.length < min ||
//           password.length > max ||
//           !hasError
//         }
//         onClick={() => onLogin({ login, password })}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// const PasswordConfirm = ({ min }) => {
//   const [password, setPassword] = useState("");
//   const [passConfirm, setPassConfirm] = useState("");

//   return (
//     <div>
//       <input
//         type="password"
//         value={password}
//         style={
//           password.length &&
//           (password !== passConfirm ||
//             password.length < min ||
//             /[^0-9A-Za-z]/.test(password))
//             ? { backgroundColor: "red" }
//             : { backgroundColor: "transparent" }
//         }
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         value={passConfirm}
//         style={
//           passConfirm.length &&
//           (passConfirm !== password ||
//             passConfirm.length < min ||
//             /[^0-9A-Za-z]/.test(passConfirm))
//             ? { backgroundColor: "red" }
//             : { backgroundColor: "transparent" }
//         }
//         onChange={(e) => setPassConfirm(e.target.value)}
//       />
//     </div>
//   );
// };

// const Carousel = ({ images }) => {
//   const [current, setCurrent] = useState(0);

//   return (
//     <div>
//       <img
//         src={images[current]}
//         style={{ width: "75vw", aspectRatio: "2", position: "relative" }}
//         alt="beauty of nature"
//         onClick={(e) => {
//           const { layerX } = e.nativeEvent;
//           const { clientWidth } = e.target;

//           layerX < clientWidth / 3
//             ? setCurrent((current) =>
//                 current === 0 ? (current = images.length - 1) : +current - 1
//               )
//             : setCurrent((current) =>
//                 current === images.length - 1 ? (current = 0) : +current + 1
//               );
//         }}
//       />
//       <Thumbnails
//         images={images}
//         current={current}
//         onChange={(index) => setCurrent(index)}
//       />
//     </div>
//   );
// };

// const Thumbnails = ({ images, current, onChange }) => {
//   return (
//     <div className="thumbnails">
//       {images.map((image, index) => (
//         <img
//           src={image}
//           alt="beauty of nature"
//           width={100}
//           onClick={() => onChange(index)}
//           style={
//             index === current
//               ? {
//                   border: " 5px, solid ,black",
//                   padding: "2px",
//                 }
//               : {
//                   border: " none",
//                   width: "100px",
//                   boxSizing: "border-box",
//                 }
//           }
//         />
//       ))}
//     </div>
//   );
// };

// const Content = ({ page }) => (
//   <div style={{ fontSize: "5em" }}>Сторінка №{page}</div>
// );

// const Color = ({ page }) => (
//   <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
//     {page}
//   </div>
// );

// const Pagination = ({ render, max }) => {
//   const [page, setPage] = useState(1);
//   const Render = render;
//   const numButtons = [];
//   for (let i = 1; i <= max; i++) {
//     numButtons.push(i);
//   }
//   return (
//     <div>
//       <Render page={page} />
//       <button disabled={page === 1} onClick={() => setPage(1)}>
//         &lt; &lt;
//       </button>
//       <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//         &lt;
//       </button>
//       {numButtons.map((numButton, index) => (
//         <button
//           disabled={index === page - 1}
//           onClick={() => setPage(numButton)}
//         >
//           {numButton}
//         </button>
//       ))}
//       <button disabled={page === max} onClick={() => setPage(page + 1)}>
//         &gt;
//       </button>
//       <button disabled={page === max} onClick={() => setPage(max)}>
//         &gt; &gt;
//       </button>
//     </div>
//   );
// };

const Timer = ({ ms = 1000 }) => {
  const [count, setCount] = useState(ms);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((count) => count - 1000),
      1000
    );

    console.log("Іниціюємо таймер", intervalRef.current);

    return () => {
      console.log("Очищення");
      clearInterval(intervalRef.current);
    };
  }, []);

  // console.log("Оновлення", count);
  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current =
        intervalRef.current ||
        setInterval(() => setCount((count) => count - 1000), 1000); //передаємо цей час в setInterval
    }
  }, [paused]);

  useEffect(() => {
    if (count === 0) {
      clearInterval(intervalRef.current);
    }
  }, [count]);

  let time = (count - (count % 1000)) / 1000; //весь час в секундах
  let sec = time % 60; //вільні секунди
  time = (time - sec) / 60; //час в хвилинах
  let min = time % 60;
  time = (time - min) / 60;
  return (
    <div>
      {[
        time.toString().padStart(2, "0"),
        min.toString().padStart(2, "0"),
        sec.toString().padStart(2, "0"),
      ].join(":")}
      <button onClick={() => setPaused(!paused)}>pause</button>
    </div>
  );
};

const TimerControll = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let time = hour * 3.6e6 + min * 6e4 + sec * 1e3;
  return (
    <div>
      <label>
        hours:
        <input
          type="number"
          value={hour}
          min={0}
          onChange={(e) => setHour(e.target.value)}
        />
      </label>
      <label>
        minutes:
        <input
          type="number"
          value={min}
          min={0}
          max={59}
          onChange={(e) => setMin(e.target.value)}
        />
      </label>
      <label>
        seconds:
        <input
          type="number"
          value={sec}
          min={0}
          max={59}
          onChange={(e) => setSec(e.target.value)}
        />
      </label>
      <button onClick={() => setIsOpen((open) => !open)}>Start</button>
      {isOpen && <Timer ms={time} />}
    </div>
  );
};

const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>;

const TimerContainer = ({ seconds, refresh, render }) => {
  const Render = render;
  const [count, setCount] = useState(seconds);

  let t = performance.now();
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((seconds - (performance.now() - t) / 1000).toFixed()),
      refresh
    );

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(intervalRef.current);
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <Render seconds={count} />
    </div>
  );
};

const LCD = ({ seconds }) => {
  let sec = (seconds % 60).toFixed(); //вільні секунди
  let time = ((seconds - sec) / 60).toFixed(); //час в хвилинах
  let min = (time % 60).toFixed();
  time = (time - min) / 60;
  return (
    <div>
      {[
        time.toString().padStart(2, "0"),
        min.toString().padStart(2, "0"),
        sec.toString().padStart(2, "0"),
      ].join(":")}
    </div>
  );
};

const Watch = ({ seconds }) => {
  let sec = (seconds % 60).toFixed(); //вільні секунди
  let time = ((seconds - sec) / 60).toFixed(); //час в хвилинах
  let min = (time % 60).toFixed();
  time = (time - min) / 60;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div
      style={{
        marginTop: "20vh",
        marginLeft: "10vw",
        width: "200px",
        position: "absolute",
      }}
    >
      {numbers.map((number, index) => (
        <div
          style={{
            position: "absolute",
            left: "100px",
            top: "0px",
            height: "200px",
            // width: "200px",
            transform: `rotate(${(index + 1) * 30 - 4}deg)`,
            fontWeight: "700",
            color: "red",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "12px",
              transform: `rotate(-${(index + 1) * 30 - 4}deg)`,
            }}
          >
            {number}
          </span>
        </div>
      ))}
      <img
        src="../images/ClockFace.png"
        alt="ClockFace"
        height={200}
        className="watch"
      />
      <img
        src="../images/ClockFace_H.png"
        alt="ClockFace hour's arrow"
        height={200}
        style={{
          position: " absolute",
          zIndex: "3",
          left: " 0px",
          transform: `rotate(${time * 30}deg)`,
        }}
      />

      <img
        src="../images/ClockFace_M.png"
        alt="ClockFace minute's arrow"
        height={200}
        style={{
          position: " absolute",
          zIndex: "4",
          left: " 0px",
          transform: `rotate(${min * 6}deg)`,
        }}
      />
      <img
        src="../images/ClockFace_S.png"
        alt="ClockFace second`s arrow"
        height={200}
        // className="seconds-arrow"
        style={{
          position: " absolute",
          zIndex: "5",
          left: " 0px",
          transform: `rotate(${sec * 6}deg)`,
        }}
      />
    </div>
  );
};

const TimerControllContainer = ({ render, refresh }) => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let seconds = hour * 60 * 60 + min * 60 + +sec;
  return (
    <div>
      <label>
        hours:
        <input
          type="number"
          value={hour}
          min={0}
          onChange={(e) => setHour(e.target.value)}
        />
      </label>
      <label>
        minutes:
        <input
          type="number"
          value={min}
          min={0}
          max={59}
          onChange={(e) => setMin(e.target.value)}
        />
      </label>
      <label>
        seconds:
        <input
          type="number"
          value={sec}
          min={0}
          max={59}
          onChange={(e) => setSec(e.target.value)}
        />
      </label>
      <button onClick={() => setIsOpen((open) => !open)}>Start</button>
      {isOpen && (
        <TimerContainer seconds={seconds} refresh={refresh} render={render} />
      )}
    </div>
  );
};

// InputsType = {key:Math.random(), value:""}
//setInputs((inputs)=>[...inputs, {key:Math.random(), value:""}])
/*
 *inputs.map(({key,value},index)=>
  <div key={key}>
      <input value={value} onChange={(e)=>{
        setInputs((inputs)=>{
          const newInputs=[...inputs];
          newInputs[index].value=e.target.value;
          return newInputs
        }
        )
        }}/>
    </div) 
 * 
 */

const Phonebook = () => {
  const [inputs, setInputs] = useState([]);

  console.log(inputs);
  return (
    <div>
      {inputs.map(({ key, value }, index) => (
        <div key={key}>
          <input
            type="tel"
            value={value}
            onChange={(e) => {
              setInputs((inputs) => {
                const newInputs = [...inputs];
                newInputs[index].value = e.target.value;
                return newInputs;
              });
            }}
          />

          <button
            disabled={index === 0}
            onClick={() =>
              setInputs((inputs) => {
                const newInputs = [...inputs];
                const tmp = newInputs[index];
                newInputs[index] = newInputs[index - 1];
                newInputs[index - 1] = tmp;
                return newInputs;
              })
            }
          >
            &uarr;
          </button>
          <button
            onClick={() =>
              setInputs((inputs) => {
                const newInputs = [...inputs];
                const tmp = newInputs[index];
                newInputs[index] = newInputs[index + 1];
                newInputs[index + 1] = tmp;
                return newInputs;
              })
            }
            disabled={index === inputs.length - 1}
          >
            &darr;
          </button>
          <button
            onClick={() => {
              setInputs(inputs.filter((el) => inputs.indexOf(el) !== index));
            }}
          >
            &#x2716;
          </button>
          {index}
        </div>
      ))}
      <button
        onClick={() =>
          setInputs([...inputs, { key: Math.random(), value: "" }])
        }
      >
        Add
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <h2>Nation</h2>
      <div className="episodes">
        {data.map((card) => (
          <NationCard card={card} />
        ))}
      </div>
      <h2>StarWars</h2>
      <div className="episodes">
        {characters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
      <Episodes episodes={episodes} />
      <Characters characters2={characters2} />
      <Spoiler header={<h1>Заголовок</h1>} open>
        Контент 1<p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <Spoiler>
        <h2>Контент 2</h2>
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <RangeInput min={2} max={10} />

      <LoginForm min={5} max={16} onLogin={(obj) => console.log(obj)} />

      <PasswordConfirm min={5} />

      <Carousel
        images={[
          "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
          "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
          "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
          "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
          "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg",
        ]}
        onChange
      />
      <Pagination max={10} render={Content} />
      <Pagination max={15} render={Color} /> */}
      {/* <Timer ms={5000} /> */}
      {/* <TimerControll />

      <TimerContainer seconds={30} refresh={1000} render={SecondsTimer} />
      <TimerContainer seconds={30} refresh={1000} render={LCD} />

      <TimerContainer seconds={30} refresh={1000} render={Watch} /> */}
      <TimerControllContainer refresh={10000} render={Watch} />
      <Phonebook />
    </div>
  );
}

export default App;
