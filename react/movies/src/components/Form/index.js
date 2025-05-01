import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css"

function Form() {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('-');
  const [videos, setVideos] = useState([]);
  const [mensage, setMensage] = useState('');

  function validateVideo(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w\-]{11}$/;
    if (!youtubeRegex.test(url) || url < 43) {
      setMensage('Não existe nenhum vídeo com esse url.');
      return false;
    } else {
      return url.substring(32, 43);
    }
  }

  function onSave(e) {
    e.preventDefault();
    console.log(category);
    const urlId = validateVideo(url);
    console.log()
    if (!urlId || category === '-') {
      setMensage('Selecione uma categoria.');
    }
    else if(urlId){
      const newVideo = { url: urlId, category };
      setVideos([...videos, newVideo]);
      const storage = localStorage.getItem('videos');
      const videosList = storage ? JSON.parse(storage) : [];
      const find = videosList.some((video) => { return video.category === category && video.url === urlId });
      if (!find) {
        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));
        setMensage(`Vídeo cadastrado com sucesso na categoria ${category}!`);
      } else {
        setMensage(`Já existe esse vídeo na categoria ${category}!`);
      }
    }
    setCategory('-');
    setUrl('');
  }

  return (
    <section className={styles.container}>
      <h2>Cadastro de Vídeos</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="URL"
            required
            value={url}
            onChange={
              e => setUrl(e.target.value)
            }
          />
        </div>
        <div>
          <label>categoria</label>
          <select
            value={category}
            onChange={e => { setCategory(e.target.value) }}
          >
            <option value="-">Selecione uma categoria</option>
            {
              categories.map((category) => {
                return <option value={category} key={category}>{category}</option>
              })
            }
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
      {mensage !== '' && (
        <div>
          <p>{mensage}</p>
        </div>
      )}


    </section >
  );
}

export default Form;