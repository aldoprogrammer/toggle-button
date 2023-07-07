import React, { useState } from 'react';
import './App.css';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import image6 from './img/6.jpg';

function App () {
  const data = [
    {
      id: '1',
      title: 'Product 1',
      text: "Ini adalah deksripsi produk 1",
      img: image3,
    },
    {
      id: '2',
      title: 'Product 2',
      text: "Ini adalah deksripsi produk 2",
      img: image4,
    },
    {
      id: '3',
      title: 'Product 3',
      text: "Ini adalah deksripsi produk 3",
      img: image5,
    },
    {
      id: '4',
      title: 'Product 4',
      text: "Ini adalah deksripsi produk 4",
      img: image6,
    },
  ]

  const [toggled, setToggled] = useState()

  return (
    <div className="main">
      <div className='wrapper'>
         {
          data.map(({title, id}) => {
            return (
              <button className='button'
                onClick={() => setToggled(id)}
              >{title}</button>
            )
          })
         }
      </div>
      {
          data.map(({title, text, img, id}) => {
            return (
              <>
                {toggled === id ? (
                  <div className='toggleContent'>
                  <h2 className='toggleTitle'>{title}</h2>
                  <div className='content'>
                    <img src={img} alt="alt gambar" className="img"/>
                    <p className='text'>{text}</p>
                  </div>
                </div>
                ) : null}
              </>
            )
          })
         }
    </div>
  )
};

export default App;
