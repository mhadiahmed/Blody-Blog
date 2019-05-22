import React, {Component} from 'react'
import Article from '../component/articles'
import axios from 'axios'


class ArticleList extends Component {
    state = {
        articles: []
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/')
        .then(res => {
            this.setState({
                articles: res.data
            })

        })
    }
    render(){
        return(
            <Article data={this.state.articles}/>
        )
    }
}

export default ArticleList