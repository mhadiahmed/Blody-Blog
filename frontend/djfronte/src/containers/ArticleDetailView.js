import React, {Component} from 'react'
import { Card } from 'antd'
import axios from 'axios'


class ArticleDetail extends Component {
    state = {
        article: {}
    }
    componentDidMount(){
        const articleID = this.props.match.params.articleID
        axios.get(`http://localhost:8000/api/${articleID}`)
        .then(res => {
            this.setState({
                article: res.data
            })
            
        })
    }
    render(){
        return(
           <Card title={this.state.article.title}>
               <p>{this.state.article.content}</p>
           </Card>
        )
    }
}

export default ArticleDetail