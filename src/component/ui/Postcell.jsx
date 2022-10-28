import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
    ${(props) => {
        return (props.isHovering ? "scale(1.1)" : "scale(1.0)");
    }}
`;                                              //애니메이션을 이렇게 구현할 수 있다

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 1px double grey;
    border-radius: 16px;
    margin: 16px;
    transform: ${(props) => props.isHovering ? "scale(1.1)" : "scale(1.0)"};
    transition: 0.25s;

/* animation: ${animation} 1s linear infinite; //1초동안 선형 무한 속성값주기 */
`;

const TitleBox = styled.div`
    width: 100%;
    height: ${(props) => props.isHovering ? "100%" : "calc(100% / 4)"};
    top:  ${(props) => props.isHovering ? "0%" : "calc(100% * (3 / 4))"};
    position: relative;
    background-color: lightgray;
    transition: 0.25s;

    ${(props) => {
        return (
            props.isHovering ? `top: 0%; height: 100%;` : `top: calc(100% * (3/4)); height: calc(100% / 4);`
        );
    }
    }

/* :hover {
background-color: none;
top: 0%;
height: 100 %;
} */
`;

const Title = styled.p`
    width: 100%;
    height: 100%;
    margin: 0px 8px;
    font-size: 12px;
    text-align: left;
    `;

function Postcell(props) {
    const { imageURL, title } = props;
    const [isHovering, setIsHovering] = useState(false);

    const handdleOn = (value) => {
        setIsHovering(value);
        console.log("Mouse On");
    };

    return (
        <Wrapper isHovering={isHovering} onMouseOver={() => handdleOn(true)} onMouseOut={() => setIsHovering(false)}>
            <TitleBox isHovering={isHovering} id="titlebox" >
                <Title>{title || "제목없음"}</Title>
            </ TitleBox>
        </Wrapper>
    );
}

export default Postcell