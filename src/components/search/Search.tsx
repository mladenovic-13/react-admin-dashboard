import React, { useEffect, useState } from "react";
import { index } from "../../algolia";
import { NavbarSearch, Results } from "./style";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IUser } from "../../shared/types";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const searchItems = async () => {
      const res = await index.search(searchQuery);
      return res.hits;
    };
    if (searchQuery.length > 2) {
      searchItems().then((hits: any[]) => {
        setResults(hits);
      });
    }
  }, [searchQuery]);

  const hanldeSearch = async () => {};

  return (
    <NavbarSearch>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="searchInput"
        placeholder="Search..."
      />
      <div onClick={hanldeSearch} className="searchWrapper">
        <SearchOutlinedIcon className="searchIcon navbarIcon " />
      </div>
      {searchQuery.length > 2 && results?.length > 0 && (
        <Results>
          {results?.map((result: IUser) => (
            <Link
              key={result.username}
              to="/"
              state={{ result }}
              style={{ textDecoration: "none" }}
            >
              <div className="item">
                <p className="display">{result.displayName}</p>
                <p className="username">{result.username}</p>
              </div>
            </Link>
          ))}
        </Results>
      )}
    </NavbarSearch>
  );
};

export default Search;
