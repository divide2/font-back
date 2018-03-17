import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Form, Input} from "antd";
import LabelApi from "../../../../api/system/LabelApi";

const FormItem = Form.Item;

class LabelAdd extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    handleSubmit = (e) => {
        let self = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                LabelApi.add(values).then(() => self.context.router.history.push('/Label/list'))
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


export default LabelAdd
