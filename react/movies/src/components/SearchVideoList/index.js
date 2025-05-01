import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../Loader";

function filterVideos(videos, searchText) {
  const lowerSearchText = searchText.toLowerCase();
  return videos.filter((video) => {
    const category = video.category.toLowerCase();
    const title = video.title.toLowerCase();
    return category.includes(lowerSearchText) || title.includes(lowerSearchText);
  })
}

function SearchVideoList({ videos }) {

  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 200)
  }, []);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      {
        loading ? <Loader />:
          <VideoList
            videos={foundVideos}
            emptyHeading={`Sem Vídeos sobre ${searchText}`}
          />
      }

    </section>
  );
}

export default SearchVideoList;