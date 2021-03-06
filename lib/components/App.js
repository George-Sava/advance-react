import React from 'react';

import DataApi from '../DataApi';
import {data} from '../testData.json';

import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends React.Component{

    constructor()
    {
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    articleActions = {
        lookupAuthor: (authorId) => {

            const author = this.state.authors[authorId];
            return author;
        }
    };

    render() {
        return (
            <div>
                <ArticleList 
                    articles={this.state.articles}
                    articleActions={this.articleActions}
                />
            </div>
        );
    }
}


