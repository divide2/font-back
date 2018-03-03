import React, {Component} from 'react'
import {Table, Icon, Divider} from 'antd';

class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Table columns={columns} dataSource={data}/>
        )
    }
}

const columns=[{
    title:'Name',
    dataIndex:'name',
    key:'name',
    render:text=><a href="#">{text}</a>
},{
    title:'Age',
    dataIndex:'age',
    key:'age'
},{
    title:'Address',
    dataIndex:'address',
    key:'address'
},{
    title:'Action',
    key:'action',
    render:(text,record)=>(
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

const data=[{
 key:'1',
 name:'John Brown',
 age:2,
 address:'深圳南山区'
},{
    key:'2',
    name:'John Brown',
    age:32,
    address:'深圳罗湖区'
},{
    key:'2',
    name:'John Brown',
    age:3,
    address:'深圳宝安区'
}]
























export default BaseForm;