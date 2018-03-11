import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Form, Select, Input, Button, message} from 'antd';
import axios from 'axios'


const FormItem = Form.Item;

const Option = Select.Option;

class DicAdd extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        let self=this;
        axios.get(`/v1/dic/${this.props.match.params.id}`).then(res=>{
            console.log(res);
            self.props.form.setFieldsValue(res.data)
        })
    }
    handleSubmit = (e) => {
        let self = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.id=self.props.match.params.id
                console.log('Received values of form: ', values);
                axios.patch('/v1/dic', values).then(res => {
                    message.success(res.data.code);
                    self.context.router.history.push('/dic/list')
                })
            }
        });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="中文标签"
                    labelCol={{span: 5}}
                    wrapperCol={{span: 12}}
                >
                    {getFieldDecorator('cnLabel', {
                        rules: [{required: true, message: '必填!'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    label="英文标签"
                    labelCol={{span: 5}}
                    wrapperCol={{span: 12}}
                >
                    {getFieldDecorator('enLabel', {
                        rules: [{required: true, message: '必填!'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    label="组码"
                    labelCol={{span: 5}}
                    wrapperCol={{span: 12}}
                >
                    {getFieldDecorator('groupCode', {
                        rules: [{required: true, message: '必填!'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    label="组名"
                    labelCol={{span: 5}}
                    wrapperCol={{span: 12}}
                >
                    {getFieldDecorator('groupName', {
                        rules: [{required: true, message: '必填!'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    label="编码"
                    labelCol={{span: 5}}
                    wrapperCol={{span: 12}}
                >
                    {getFieldDecorator('code', {
                        rules: [{required: true, message: '必填!'}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{span: 12, offset: 5}}
                >
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </FormItem>
            </Form>
        );
    }
}


export default DicAdd
