function Sample(){
    return(
        <>
           <SkipComponent/>
           <WrapComponent/>
        </>
    )
}

//skip
class SkipComponent extends React.Component{
    render() {
        return (
            <>
             <ul className="skip">
                <li><a href="#insta">콘텐츠 바로가기</a></li>
             </ul>
            </>
        );
    }
}

//wrap
class WrapComponent extends React.Component{
    render() {
        return (
            <>
              <MainComponent/>
            </>
        );
    }
}

//main
class MainComponent extends React.Component {
    render() {
        return (
            <>
            <header id="header">
                <h1><a href="#"><img src="img/logo2.png" alt="logo image"></img></a></h1>
                <h2><img src="img/menuicon.png" alt="menu"></img></h2>
            </header>

           
            <div class="videocontainer">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jp_xSGreeo0?autoplay=1&amp;mute=1&amp;modestbranding=1&amp;controls=0&amp;playlist=XoAd6BbE_eg&amp;loop=1" 
           title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen></iframe>
            </div> 

            <div id="line">
                <img src="img/line.png" alt="line"></img>
            </div>
        

            <div id="recipe">
                <h3><img src="img/title.png" alt="kanu recipe"></img></h3>
                <ul>
                    <li><img src="img/re05.png" alt="kanu recipe"></img></li>
                    <li><img src="img/re06.png" alt="kanu recipe"></img></li>
                    <li><img src="img/re07.png" alt="kanu recipe"></img></li>
                    <li><img src="img/re08.png" alt="kanu recipe"></img></li>
                </ul>
            </div>

            <div id="insta">
                <h4><img src="img/instalogo.png" alt="instagram"></img></h4>
                <ul>
                    <li><a href="https://www.instagram.com/kanucoffee.official/" target="_blank"><img src="img/kanuimg00.jpg" alt="image"></img></a></li>
                    <li><a href="https://www.instagram.com/kanucoffee.official/"
                    target="_blank"><img src="img/kanuimg.jpg" alt="image"></img></a></li>
                    <li><a href="https://www.instagram.com/kanucoffee.official/"
                    target="_blank"><img src="img/kanuimg01.jpg" alt="image"></img></a></li>
                </ul>
            </div>

            <div id="banner">
                <img src="img/main01.jpg"></img>
            </div>

            <footer id="footer">
                <ul>
                    <li><a href="#">개인정보 취급방침</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="#">영상정보처리기기운영관리방침</a></li>
                </ul>

                <p>부평공장 - 인천시 부평구 새벌로 55 <br></br>
                서울사무소 - 서울시 마포구 독막로 324 (도화동, 동서빌딩) <br></br>
                대표번호 1588-2233 고객상담실 080-023-9114<br></br>
                 Copyright 2017 Dongsuh Foods Corporation. All rights reserved.</p>

                 <img id="footimg" src="img/bottom.png" alt="logoimg"></img>
            </footer>
             
            </>
        );
    }
}

ReactDOM.render(
    <Sample/>,
    document.getElementById("root")
);