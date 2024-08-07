import { useState } from "react";
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

// const CharacterCard = ({ character }) => {
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

// const Episode = ({ episode }) => {
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

// const Episodes = ({ episodes }) => (
//   <>
//     <h2>Episodes</h2>
//     <div className="episodes">
//       {episodes.map((episode) => (
//         <Episode episode={episode} />
//       ))}
//     </div>
//   </>
// );

// const Character = ({ character }) => {
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

const Spoiler = ({ header = "+", open, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div>
      <div onClick={() => setIsOpen((open) => !open)}>{header}</div>
      {isOpen && children}
    </div>
  );
};

const RangeInput = ({ min, max, ...originalProps }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        value={text}
        style={
          text.length && (text.length < min || text.length > max)
            ? { backgroundColor: "red" }
            : { backgroundColor: "transparent" }
        }
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

const LoginForm = ({ min, max, onLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input value={login} onChange={(e) => setLogin(e.target.value)} />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        disabled={
          !login ||
          login.length < min ||
          login.length > max ||
          !password ||
          password.length < min ||
          password.length > max ||
          /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/.test(password)
        }
        onClick={() => onLogin({ login, password })}
      >
        Login
      </button>
    </div>
  );
};

const PasswordConfirm = ({ min }) => {
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  return (
    <div>
      <input
        type="password"
        value={password}
        style={
          password.length &&
          (password !== passConfirm ||
            password.length < min ||
            /[^0-9A-Za-z]/.test(password))
            ? { backgroundColor: "red" }
            : { backgroundColor: "transparent" }
        }
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={passConfirm}
        style={
          passConfirm.length &&
          (passConfirm !== password ||
            passConfirm.length < min ||
            /[^0-9A-Za-z]/.test(passConfirm))
            ? { backgroundColor: "red" }
            : { backgroundColor: "transparent" }
        }
        onChange={(e) => setPassConfirm(e.target.value)}
      />
    </div>
  );
};

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <img
        src={images[current]}
        style={{ width: "75vw", aspectRatio: "2", position: "relative" }}
        alt="beauty of nature"
        onClick={(e) => {
          const { layerX } = e.nativeEvent;
          const { clientWidth } = e.target;

          layerX < clientWidth / 3
            ? setCurrent((current) =>
                current === 0 ? (current = images.length - 1) : +current - 1
              )
            : setCurrent((current) =>
                current === images.length - 1 ? (current = 0) : +current + 1
              );
        }}
      />
      <Thumbnails
        images={images}
        current={current}
        onChange={(index) => setCurrent(index)}
      />
    </div>
  );
};

const Thumbnails = ({ images, current, onChange }) => {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <img
          src={image}
          alt="beauty of nature"
          width={100}
          onClick={() => onChange(index)}
          style={
            index === current
              ? {
                  border: " 5px, solid ,black",
                  padding: "2px",
                }
              : { border: " none" }
          }
        />
      ))}
    </div>
  );
};

const Content = ({ page }) => (
  <div style={{ fontSize: "5em" }}>Сторінка №{page}</div>
);

const Color = ({ page }) => (
  <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
    {page}
  </div>
);

const Pagination = ({ render, max }) => {
  const [page, setPage] = useState(1);
  const Render = render;
  const numButtons = [];
  for (let i = 1; i <= max; i++) {
    numButtons.push(i);
  }
  return (
    <div>
      <Render page={page} />
      <button disabled={page === 1} onClick={() => setPage(1)}>
        &lt; &lt;
      </button>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        &lt;
      </button>
      {numButtons.map((numButton, index) => (
        <button
          disabled={index === page - 1}
          onClick={() => setPage(numButton)}
        >
          {numButton}
        </button>
      ))}
      <button disabled={page === max} onClick={() => setPage(page + 1)}>
        &gt;
      </button>
      <button disabled={page === max} onClick={() => setPage(max)}>
        &gt; &gt;
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
      <Characters characters2={characters2} /> */}
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
      <Pagination max={15} render={Color} />
    </div>
  );
}

export default App;
