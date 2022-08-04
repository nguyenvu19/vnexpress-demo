import React from 'react'

const StoryItem = ({ item }) => {
    const { title, desc } = item
    return (
        <div className="storyItem">
            <h3 className="title">
                <a href="/">{title}</a>
            </h3>
            <p className="desc">
                <a href="/">{desc}</a>
            </p>
        </div>
    )
}

export default StoryItem
