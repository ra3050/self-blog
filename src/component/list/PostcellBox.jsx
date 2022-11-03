import React from "react";
import styled from "styled-components";
import Postcell from "./Postcell";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    height: ${(props) => { return (`${(props.length / 4) * 25}vw`); }};
    margin: 16px;
    

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
    flex-wrap: wrap;

`;

function CellBox(props) {
    const { post, onClick } = props;

    return (
        <Wrapper length={post.length}>
            {post.map((title, index) => {
                return (
                    <Postcell imageURL={"/"} title={title} key={index} />
                );
            })}
        </Wrapper>
    );

};

export default CellBox;