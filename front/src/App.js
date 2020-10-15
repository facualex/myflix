import React, { useRef } from 'react';
import MovieCard from './components/MovieCard'
import GlobalStyles from './GlobalStyles'

const movies = [0, 1, 2, 3, 4, 5]
const moviesById = {
  0: {
   title: 'Blade Runner 2049', 
   cover: '2049.jpg',
   subtitles: '',
  },
  1: {
   title: 'Blade Runner', 
   cover: 'br.jpg',
   subtitles: '',
  },
  2: {
   title: 'GoodFellas', 
   cover: 'goodfellas.jpg',
   subtitles: '',
  },
  3: {
   title: 'Once Upon A Time in Hollywod', 
   cover: 'onceuponatime.jpg',
   subtitles: '',
  },
  4: {
   title: 'Blade Runner 2049', 
   cover: '2049.jpg',
   subtitles: '',
  },
  5: {
   title: 'Blade Runner', 
   cover: 'br.jpg',
   subtitles: '',
  },
}

function App() {
  const uploaderRef = useRef(null)

  return (
    <>
    <GlobalStyles />
    <div style={{ width: '100%', display: 'flex', alignItems: "center", flexDirection: 'column' }}>
      <header style={{
          width: '100%',
          height: '4rem',
          backgroundColor: '#E40101',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 999,
       }}> 
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>MYFLIX</h1>
      </header>

      <div style={styles.input} onClick={() => uploaderRef.current.click()}>
        <p>Select movies folder...</p>
        <img alt="Click to select movies folder" src="search.svg" width="25px" />
      </div>
      <input ref={uploaderRef} onChange={(e) => console.log(e.target.files)} type="file" placeholder="Select movies folder..." style={{ display: 'none' }} webkitdirectory="" directory=""  mozdirectory="" msdirectory="" odirectory="" />

      <div style={styles.grid}>
        {movies.map(id => <MovieCard key={id} title={moviesById[id].title} coverPath={moviesById[id].cover}/>)}
      </div>
    </div>
    </>
  );
}


const styles = {
  grid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: "repeat(5, 220px)",
    gridGap: '15px',
    justifyContent: 'center' 
  },
  input: {
    padding: '1rem',
    width: '30%',
    backgroundColor: '#f6f6f6',
    border: '1px solid',
    borderColor: '#bebebe',
    outline: 'none',
    marginTop: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}

export default App;
