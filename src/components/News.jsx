import { news } from '../data/news';
import '../css/All.css';

export default function News() {
  return (
    <section className="card" id="news" aria-labelledby="news-heading">
      <h2 className="card-title" id="news-heading">News</h2>
      <ul className="news-list">
        {news.map((item) => (
          <li key={`${item.time}-${item.title}`}>
            <time className="news-time">{item.time}</time>
            <div className="news-content">
              {item.publicationId ? (
                <a className="news-ref" href={`#${item.publicationId}`}>{item.title}</a>
              ) : (
                <strong className="news-ref">{item.title}</strong>
              )}
              <span> — {item.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
