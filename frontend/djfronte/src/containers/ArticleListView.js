import React, {Component} from 'react'
import Article from '../component/articles'
import axios from 'axios'
import CustomForm from '../component/Form'

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
            <div>
                <Article data={this.state.articles}/>
                <br/>
                <h2>Create an Article</h2>
                <CustomForm requestType="post" articleID={null} btnText="Add"/>
            </div>

        )
    }
}

export default ArticleList