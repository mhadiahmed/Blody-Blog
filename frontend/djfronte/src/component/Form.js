import React from 'react'
import { Form, Input, Button } from 'antd'
import axios from 'axios'
class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        // event.preventDefault()
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        // eslint-disable-next-line
        switch(requestType){
            case "post":
                return axios.post('http://localhost:8000/api/',{
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            
            case "put":
                return axios.put(`http://localhost:8000/api/${articleID}/`,{
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        
        
    }
    render() {
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID
            )}>
            <Form.Item label="Title">
                <Input name="title" placeholder="put  a title here" />
            </Form.Item>
            <Form.Item label="Content">
                <Input name="content" placeholder="put a content here" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

export default CustomForm