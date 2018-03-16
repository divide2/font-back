import React, {Component} from 'react'
import {Table, Icon, Divider} from 'antd';
import axios from 'axios'

class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        }
    }

    componentDidMount() {
        let that = this;
        axios.get('/v1/dic/all').then(function (res) {
            that.setState({data: res.data})
        })
    }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.data}/>
        )
    }
}

const columns = [{
    title: '序号',
    dataIndex: 'orderNum',
    key: 'orderNum',
    render: text => <a href="#">{text}</a>
}, {
    title: '中文标签',
    dataIndex: 'cnLabel'
}, {
    title: '英文标签',
    dataIndex: 'enLabel'
}, {
    title: '组码',
    dataIndex: 'groupCode'
}, {
    title: '组名',
    dataIndex: 'groupName'
}, {
    title: '编码',
    dataIndex: 'code'
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="#">Action-{record.name}</a>
            <Divider type="vertical"/>
            <a href="#">删除</a>
            <Divider type="vertical"/>
            <a href="#" className="ant-dropdown-link">
                More actions <Icon type="down"/>
            </a>
        </span>
    )
}]
const data = [{
    key: '1',
    name: 'John Brown',
    age: 2,
    address: '深圳南山区'
}, {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: '深圳罗湖区'
}, {
    key: '3',
    name: 'John Brown',
    age: 3,
    address: '深圳宝安区'
}];

// axios.get('/v1/dic/all')
//     .then(function (res) {
//         res.data
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


export default BaseForm;