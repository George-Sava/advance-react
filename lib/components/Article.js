import React from 'react';

const styles = {
    article: {
        paddingBottom: 10,
        borderBottom: '1px solid gray',
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
    },
    date: {
        fontSize: '0.85em',
        color: '#888',
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    body: {
        paddingLeft: 20,
    }
};

const dateDisplay = (dateString) =>  
{
    return new Date(dateString).toDateString();
};

const Article = ({article, actions}) =>
{
    const author = actions.lookupAuthor(article.authorId);
    
    return (
        <div style={styles.article}>
            <div style={styles.title}>
                {article.title}
            </div>
            <div style={styles.date}>
                {dateDisplay(article.date)}
            </div>
            <div style={styles.author}>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div style={styles.body}>
                {article.body}
            </div>
        </div>
    );
};

export default Article;