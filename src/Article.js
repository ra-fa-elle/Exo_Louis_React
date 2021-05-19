import React from "react";
import './Article.css'

function Article(props) {
    const {title, content} = props

    return (
        <div className="article-ctn">
            <div style={{flex: 2}}>
                <p className="article-content">
                    {content}
                </p>
            </div>
            <div style={{flex: 1}}>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default Article;