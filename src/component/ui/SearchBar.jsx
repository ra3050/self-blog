import React from "react";
import styled from "styled-components";

const Search = styled.input`
    width: calc(100% - 64px);
    height: 50px;
    margin: 64px;
    font-size: 16px;
    vertical-align: middle;
    text-align: center;

    border: 1px solid gray;
    border-radius: 32px;
`;

function SearchBar(props) {
    const { onChange, onKeyPress } = props;

    return (
        <Search placeholder={"제목만 검색 가능합니다."} onChange={onChange} onKeyPress={onKeyPress} />
    );
}

export default SearchBar;
