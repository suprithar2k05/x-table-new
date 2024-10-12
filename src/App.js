import { useEffect, useState } from "react";
import tableData from "./table.json";
import "./styles.css";

export default function App() {
  const [articleData, setArticleData] = useState(tableData);

  const handleDate = () => {
    setArticleData(
      articleData.toSorted((a, b) => {
        if (a.date === b.date) {
          return b.views - a.views;
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    );
  };

  const handleViews = () => {
    setArticleData(
      articleData.toSorted((a, b) => {
        return b.views - a.views;
      })
    );
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {articleData.map(({ date, views, article }, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{views}</td>
              <td>{article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
