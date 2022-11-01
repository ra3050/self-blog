import React from "react";
import styled from "styled-components";
import Postcell from "../ui/Postcell";

const Wrapper = styled.div`
    width: 1000px;
    height: 1000px;
    display: flex;
    border: 1px solid grey;
    border-radius: 32px;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;

function CellBox(props) {
    const { post, onClick } = props;
    const titles = ["안녕, 반가워", "나는 오늘 탄생한 미니 블로그라고해"];

    return (
        <Wrapper>
            {post.map((title, index) => {
                return (
                    <Postcell imageURL={"/"} title={title} key={index} />
                );
            })}
        </Wrapper>
    );

};

export default CellBox;