import { news } from '../data/news';
import '../css/All.css';

function News() {
  const handleNewsRefClick = (event) => {
    const link = event.target.closest('a.news-ref');
    if (!link) return;

    event.preventDefault();
    const id = link.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="News" id="news">
      <div className="card-title">News</div>
      <ul className="news-list" onClick={handleNewsRefClick}>
        {news.map((item, index) => (
          <li key={index}>
            <div className="news-time">{item.time}</div>
            <div className="news-content">
              {item.publicationId ? (
                <a href={`#${item.publicationId}`} className="news-ref">{item.title}</a>
              ) : (
                <strong className="news-ref">{item.title}</strong>
              )}
              {' — '}{item.detail}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
