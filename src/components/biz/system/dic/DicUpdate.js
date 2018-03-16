import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Form, Input} from "antd";
import DicApi from "../../../../api/dic/DicApi";

const FormItem = Form.Item;

class DicAdd extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        let self=this;
        DicApi.get().then(res=>{
            console.log(res);
            self.props.form.setFieldsValue(res.data)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (!err) {
                data.id = this.props.match.params.id;
                console.log('Received values of form: ', data);
                DicApi.update(data).then(this.context.router.history.push('/dic/list'));
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
