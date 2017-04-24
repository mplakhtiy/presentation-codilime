/**
 * Created by MaryanPC on 17-Apr-17.
 */
/**
 I am glad you also visited my code :)
 I created this site to present myself at CodiLime during the recruitment process.
 I used Node.js, React.Js, Bootstrap, ES6, HTML5
 */
import React from "react";
import Article from "./Article";
import Modal from "./Modal";
import Header from "./Header";
import Footer from "./Footer";
import Paragraph from"./Paragraph";
export default class Page extends React.Component {
    render() {
        const Row2 = [
            [
                "Technologies I'm using:",
                <p>JavaScript, Node.js, React.js, Angular.js, MongoDB, HTML5, CSS, .NET, C#, ASP.NET, Windows Forms,
                    WPF, Java, Python, OpenCV, Unity3D</p>,
                <div>
                    <Paragraph
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                        title="JavaScript"
                        sentences={[
                            "Sustainable knowledge of Core JS",
                            "Working with and improving in JS since Dec 2014.",
                            "Books: \"JavaScript the good parts\", \"JavaScript. The Definitive Guide\""
                        ]}
                    />

                    <Paragraph
                        image="https://scontent.xx.fbcdn.net/v/t34.0-0/p280x280/18136594_10212692166324543_1620243337_n.png?_nc_ad=z-m&oh=2a49de52817d2ee57e3a75088b95936e&oe=58FFF27B"
                        title="React.js, Node.js and Angular.js"
                        sentences={[
                            "Confident user of Node.js and React.js.",
                            "Basic knowledge of Angular"
                        ]}
                    />
                </div>,
                "https://1.bp.blogspot.com/-1eBVTbvnKjM/WFkYf0ocNyI/AAAAAAAAFEw/anQEkfi8H50wRDRl_eofBEhy2tNgm3CKACLcB/s1600/programming.png"
            ],
            [
                "Experience:",
                <span>SoftServe | IT Academy<br/>Universities projects<br/>Own developments</span>,
                <div>
                    <Paragraph
                        image="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/032014/untitled-1_11.png?itok=vx2Z94jt"
                        title="SoftServe IT Academy"
                        sentences={[
                            "Together with my team, I developed an online web service for data visualization",
                            "I learned JavaScript from scratch to the level required for the project in a short time",
                            "We implemented modular architecture and developed our own framework.",
                            "Technologies I used: .NET, Angular.js, Highcharts.js,",
                            <a href="http://ita-dashboards.apphb.com/" role="button">View details »</a>
                        ]}
                    />
                    <Paragraph
                        image="https://assets2.ardentcreative.com/wp-content/uploads/2013/06/color_creative-icon.png"
                        title="This web page is also an experience :)"
                        sentences={[
                            "Two days - code part, third day - content part.",
                            "Technologies I used: React.js, Node.js, ES6, Bootstrap"
                        ]}
                    />
                    <Paragraph
                        image="https://s-media-cache-ak0.pinimg.com/originals/d4/83/ce/d483ce5d786f9625548cc6232251dbf9.gif"
                        title="Image and Speech Recognition course"
                        sentences={[
                            "I developed a computer vision program for human hand tracking",
                            "Technologies I used: Java, Python, OpenCV",
                        ]}
                    />
                </div>,
                "http://www.siainnovations.com/images/icon-exceptional-experience-blue.png"
            ],
            [
                "Education:",
                <p>Warsaw University of Technology<br/>Ivan Franko National University of Lviv<br/>Lviv Physics and
                    Mathematics Lyceum</p>,
                <div>
                    <Paragraph
                        image="http://www.ipwc.pw.edu.pl/images/loga/BIG_PW.png"
                        title="Warsaw University of Technology"
                        sentences={[
                            "M.Sc in Computer Science",
                            "Master Thesis: Developing a VR application."
                        ]}
                    />
                    <Paragraph
                        image="http://www.lnu.edu.ua/wp-content/themes/lnu-main/lib/images/logos/social.png"
                        title="Ivan Franko National University of Lviv"
                        sentences={[
                            "B.Sc in Applied Mathematics and Informatics",
                            "Bachelor Thesis: Computation of Periodic States of Nonlinear Electric Schemes.",
                            "Presented a project within a course of Linear Integration Equations on international conference at our university in English"
                        ]}
                    />
                    <Paragraph
                        image="https://scontent.xx.fbcdn.net/v/t34.0-12/18155405_1335135703239490_99411699_n.png?_nc_ad=z-m&oh=bec9118732e7e61924d798ed89000549&oe=590035D6"
                        title="Lviv Physics and Mathematics Lyceum"
                        sentences={[
                            "High score in mathematics final test (195/200) ."
                        ]}
                    />
                </div>,
                "http://www.middlemarchbp.co.uk/images/icons/university.svg"
            ]

        ].map((value, i) => <div key={i}><Article id={i} title={value[0]} bullets={value[1]} story={value[2]}
                                                  image={value[3]}/> <Modal id={i} title={value[0]} bullets={value[1]}
                                                                            story={value[2]} image={value[3]}/></div>);
        return (
            <div class="wrapper">
                <Header/>
                <div class="container marketing">
                    <div class="row">{Row2}</div>
                </div>
                <Footer/>
            </div>
        );
    }
}
