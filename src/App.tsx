import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState<string>("");
  const [bookList, setBookList] = useState([]);

  return (
    <div className="App">
      <div id="wrap">
        <div id="head">
          <h1 className="hidden">디깅 북 클럽</h1>
          <div className="SearchBar">
            <input 
              type="text"
              name="title"
              value={search} 
              className="input_text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="책 검색하기" 
              aria-label="책 이름 입력" />
              <button type="button" className="search_btn" aria-label="검색" onClick={async () => {
                const list = await axios.get(`/ttb/api/ItemSearch.aspx?ttbkey=ttbrijamong08302251002&Query=${search}&SearchTarget=Book&output=js&maxResults=10`);
                setBookList(JSON.parse(list.data.replace(/[\\;]/g, '')).item)}}>
              </button>
          </div> {/* 식이 필요합니다 */}
        </div>
        <section>
          <h2 className="hidden">책 리스트</h2>
          <ul>
            {
              bookList.map((book) => {
                return <li>
                  <img src={book.cover} alt="" />
                  {book.title}
                </li>;
              })
            }
          </ul>
          <div className="no_list">
            <p>아이쿠, 아직 등록된 책이 없네요!</p>
            <p>책을 검색해서 북카드를 생성해 보세요.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;