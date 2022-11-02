import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const PostImg = styled.img.attrs({ alt: "post image" })`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    width: calc(16.666vw - 32px);
    height: calc(16.666vw - 32px);
    overflow: hidden;
    border: 1px double grey;
    border-radius: 16px;
    margin: auto;
    transform: ${(props) => props.isHovering ? "scale(1.1)" : "scale(1.0)"};
    transition: 0.25s;
`;

const TitleBox = styled.div`
    width: 100%;
    height: ${(props) => props.isHovering ? "100%" : "calc(100% / 4)"};
    top:  ${(props) => props.isHovering ? "0%" : "calc(100% * (3 / 4))"};
    position: relative;
    background-color:   ${(props) => props.isHovering ? "transparent" : "lightgray"};
    transition: 0.25s;

    display: table;     // 부모 프로퍼티를 테이블로 만들어두면 자식을 테이블-셀로 선언할 수 있음
`;

const Title = styled.p`
    display: table-cell;
    vertical-align: middle;
    text-align: center;

    margin: 0px 8px;
    font-size: 12px;
`;

function Postcell(props) {
    const { imageURL, title } = props;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouse = (value) => {
        setIsHovering(value);
        if (value) {
            console.log("Mouse On");
        } else {
            console.log("Mouse Out");
        }
    };

    return (
        <>
            <Wrapper isHovering={isHovering}
                src={"/img/test.png"}
                onMouseOver={() => handleMouse(true)}
                onMouseOut={() => handleMouse(false)}>
                {/* <PostImg src="img/test.png" /> */}
                <TitleBox isHovering={isHovering} id="titlebox" >
                    <Title>{title || "제목없음"}</Title>
                </ TitleBox>
            </Wrapper>
        </>
    );
}

export default Postcell;