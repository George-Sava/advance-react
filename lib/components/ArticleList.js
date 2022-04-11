import React from 'react';
import Article from './Article';

const ArticleList = (props) => 
{   const articles = Object.values(props.articles);
    return (
        <div>
            {
                articles.map(article =>
                {
                    return <Article
                        key={article.id} 
                        article={article}
                        actions={props.articleActions}
                    />;
                })
            }
        </div>
    );
};

export default ArticleList;

