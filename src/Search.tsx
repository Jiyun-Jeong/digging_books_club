import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function Search() {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [bookList, setBookList] = useState<any[]>([]);

    return (
        <>
            <div id="head">
                <h1 className="hidden">디깅 북 클럽</h1>
                <div className="SearchBar">
                    <input 
                    type="text"
                    name="title"
                    value={searchKeyword} 
                    className="input_text"
                    onChange={(e) => {
                        setSearchKeyword(e.target.value);
                    }}
                    placeholder="책 검색하기" 
                    aria-label="책 이름 입력" />
                    <button type={"button"} className="del_btn" aria-label="검색어 삭제"></button>
                    <button type={"button"} className="search_btn" aria-label="검색" 
                    onClick={
                        async () => {
                        const list = await axios.get(`/ttb/api/ItemSearch.aspx?ttbkey=ttbrijamong08302251002&Query=${searchKeyword}&SearchTarget=Book&Version=20131101&output=js&maxResults=10`);
                        setBookList(list.data.item)}
                    }
                        >
                    </button>
                </div>
            </div>
            <section className="list">
                <h2 className="hidden">책 리스트</h2>
                <ul>
                    {
                    bookList.map((book) => {
                        return <li>
                        <a href={book.link}>
                            <img src={book.cover} alt="" />
                            <div className="text">
                            <p>{book.title}</p>
                            <span>{book.author}</span>
                            </div>
                        </a>
                        </li>;
                    })
                    }
                </ul>
                <div className="no_list">
                    <p>아직 검색한 책이 없네요!</p>
                    <p>책을 검색해서 북카드를 생성해 보세요.</p>
                </div>
            </section>
        </>
    );
}

export default Search;