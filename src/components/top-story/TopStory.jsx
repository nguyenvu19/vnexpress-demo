import React from 'react'
import './top-story.scss'
import { postDatas } from '../../utils/data'
import StoryItem from './StoryItem'
const TopStory = () => {
    return (
        <section className="topStory">
            <div className="topStoryContainer">
                <div className="left">
                    <div className="storyList">
                        <div className="hotStoryItem">
                            <div className="img">
                                <a href="/">
                                    <picture>
                                        <source
                                            srcSet={`${postDatas[0].img} 1x,${postDatas[0].img} 2x`}
                                        />
                                        <img
                                            loading="lazy"
                                            src={postDatas[0].img}
                                            alt=""
                                        />
                                    </picture>
                                </a>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <a href="/">{postDatas[0].title}</a>
                                </h3>
                                <p className="desc">
                                    <a href="/">{postDatas[0].desc}</a>
                                </p>
                            </div>
                        </div>
                        <div className="otherStoryItem">
                            {postDatas.map(
                                (item, index) =>
                                    index > 0 &&
                                    index < 4 && (
                                        <StoryItem key={index} item={item} />
                                    )
                            )}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="banner"></div>
                </div>
            </div>
        </section>
    )
}

export default TopStory
