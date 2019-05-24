import React, {Component} from 'react'
import { Card,Button } from 'antd'
import axios from 'axios'
import CustomForm from '../component/Form'

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
    handleDelete = (event) =>{
        const articleID = this.props.match.params.articleID
        axios.delete(`http://localhost:8000/api/${articleID}`)
        this.props.history.push('/')
        this.forceUpdate()
    }
    render(){
        return(
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="update" />
                <form onSubmit={this.handleDelete}>
                    <Button htmlType="submit" type="danger">Delete</Button>
                </form>
           </div>
        )
    }
}

export default ArticleDetail