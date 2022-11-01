import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Postcell from './component/ui/Postcell';
import PostList from './component/list/PostList'

const titles = ["안녕, 반가워", "나는 오늘 탄생한 미니 블로그라고해" ];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <Postcell imageURL={'/Users/kusket/Desktop/React_clone/self-blog/src/test.png'} title={"안녕? 반가워"}/> */}
    <PostList post={titles} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
