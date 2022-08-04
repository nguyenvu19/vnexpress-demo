import React from 'react'
import './topic.scss'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
const Topic = () => {
    return (
        <section className="topic">
            <div className="topicContainer">
                <div className="boxTopic">
                    <span className="titleTopic">
                        <TrendingUpIcon /> Chủ đề
                    </span>
                    <div className="topicList">
                        <a href="/" className="topicItem">
                            Thi tốt nghiệp THPT 2022
                        </a>
                        <a href="/" className="topicItem">
                            Giá sách giáo khoa mới
                        </a>
                        <a href="/" className="topicItem">
                            Đề án đưa 5 huyện ở TP HCM lên quận
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topic
