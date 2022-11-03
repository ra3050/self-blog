import React from "react";
import styled from "styled-components";
import CellBox from "../list/PostcellBox";
import SearchBar from "../ui/SearchBar";

const titles = ["안녕, 반가워", "나는 오늘 탄생한 미니 블로그라고해", "인생네컷", "일처리가 군대식 일처리에요", "'끼'리먄 까기를 바라요", "'why'를 제시해주면 정말 좋을텐데", " 자존심때문에 몰라도 물어보지를 않고 그냥\n진행한다.", "거시경제의 문제점이 발생하고 있다.", "이전과 완전 다른 방향의 경제 현상이 나타날 것이다.", "카카오 손절 안했으면... 아... 못해도 본절은 했을건데", "이래서 기다림이 중요합니다", "이런 데이터가 쌓여야 손절을 안하고 잘 먹고 나올텐데", "모든건 경험이라고 생각합니다."];

const Wrapper = styled.div`
    width: 66.666%;
    position: relative;
    top: 10vh;
    left: 16.666vw;
    border: 1px solid grey;
    border-radius: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

function MainPage(props) {
    return (
        <>
            <Wrapper length={titles.length}>
                <SearchBar />
                <CellBox post={titles} />
            </Wrapper>
        </>
    );
}

export default MainPage;