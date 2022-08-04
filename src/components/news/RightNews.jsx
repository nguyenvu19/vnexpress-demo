import React from 'react'

const RightNews = ({ news, menu }) => {
    return (
        <div className="rightBox">
            <hgroup>
                <h2 className="parentMenu">
                    <a href="/">{menu.name}</a>
                </h2>
                {menu.children.map(
                    (item, index) =>
                        index < 5 && (
                            <span key={index} className="subMenu">
                                <a href="/">{item.name}</a>
                            </span>
                        )
                )}
            </hgroup>
            <div className="rightNews">
                <article className="itemNews full">
                    <div className="img">
                        <a href="/">
                            <img src={news[0].img} alt="" />
                        </a>
                    </div>
                    <div className="content">
                        <h3 className="title">{news[0].title}</h3>
                        <p className="desc">{news[0].desc}</p>
                    </div>
                </article>
                <article className="itemNews sub">
                    <div className="content">
                        <h3 className="title">{news[1].title}</h3>
                        <p className="desc">{news[1].desc}</p>
                    </div>
                </article>
                <div className="bottomNews">
                    <article className="itemNews">
                        <h3 className="title">
                            <a href="/">{news[2].title}</a>
                        </h3>
                    </article>
                    <article className="itemNews">
                        <h3 className="title">
                            <a href="/">{news[3].title}</a>
                        </h3>
                    </article>
                    <article className="itemNews">
                        <h3 className="title">
                            <a href="/">{news[4].title}</a>
                        </h3>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default RightNews
