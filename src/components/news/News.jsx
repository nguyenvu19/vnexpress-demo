import React from 'react'
import './news.scss'
import { postDatas, MENU_DATAS } from '../../utils/data'
import RightNews from './RightNews'
const News = () => {
    return (
        <section className="news">
            <div className="newsContainer">
                <div className="left">
                    {postDatas.map((item, index) => (
                        <article
                            className={
                                index === 0 ? 'leftNews' : 'leftNews hasBorder'
                            }
                            key={index}
                        >
                            <h3 className="title">
                                <a href="/">{item.title}</a>
                            </h3>
                            <div className="leftNewsBottom">
                                <div className="img">
                                    <a href="/">
                                        <img src={item.img} alt="" />
                                    </a>
                                </div>
                                <p className="desc">
                                    <a href="/">{item.desc}</a>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="right">
                    <div className="rightBoxes">
                        <RightNews
                            news={[
                                postDatas[0],
                                postDatas[8],
                                postDatas[5],
                                postDatas[7],
                                postDatas[2],
                            ]}
                            menu={MENU_DATAS[0]}
                        />
                        <RightNews
                            news={[
                                postDatas[1],
                                postDatas[4],
                                postDatas[6],
                                postDatas[0],
                                postDatas[3],
                            ]}
                            menu={MENU_DATAS[1]}
                        />
                        <RightNews
                            news={[
                                postDatas[5],
                                postDatas[2],
                                postDatas[3],
                                postDatas[1],
                                postDatas[0],
                            ]}
                            menu={MENU_DATAS[2]}
                        />
                        <RightNews
                            news={[
                                postDatas[8],
                                postDatas[4],
                                postDatas[2],
                                postDatas[3],
                                postDatas[6],
                            ]}
                            menu={MENU_DATAS[3]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
