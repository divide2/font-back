import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Form, Input} from "antd";
import LabelApi from "../../../../api/system/LabelApi";

const FormItem = Form.Item;

class LabelUpdate extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount(){
        LabelApi.get(this.props.match.params.id).then(data=>{
            this.props.form.setFieldsValue(data)
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (!err) {
                data.id = this.props.match.params.id;
                console.log('Received values of form: ', data);
                LabelApi.update(data).then(this.context.router.history.push('/system/list'));
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


export default LabelUpdate
