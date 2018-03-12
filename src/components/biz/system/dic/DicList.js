import React, {Component} from 'react'
import {Table, Icon, Divider, Popconfirm, Button} from 'antd';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Label from '../../../util/label/Label'

// import Pager from '../../../util/page/Pager.js'


class DicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {},
            data: [],
            columns: [{
                title: '序号',
                dataIndex: 'id',
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
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                <Link to={`/dic/update/${record.id}`}>修改</Link>
            <Divider type="vertical"/>
            <Popconfirm title="确定删除吗?" onConfirm={() => this.onDelete(record.id)}>
              <a href="#">删除</a>
            </Popconfirm>
        </span>
                )
            }]
        }
    }


    onDelete = (id) => {
        let self = this;
        axios.delete(`/v1/dic/${id}`).then((res) => {
            console.log(res);
            self.all();
        })
    };

    componentDidMount() {
        this.all();
    }

    all = () => {
        let self = this;
        axios.get('/v1/dic/page', {params: this.query}).then((res) => {
            self.setState({data: res.data.content})
        })
    };

    tableChange = (p) => {
        console.log(p);
        this.setState({
            query: {
                page: p.current,
                size: p.pageSize
            }
        });
        this.all()
    };

    render() {
        return (
            <div>
                <Label value="Y" group="YES_OR_NO"/>
                <Button><Link to="/dic/add">添加</Link></Button>
                <Table rowKey="id" columns={this.state.columns} dataSource={this.state.data}
                       pagination={{showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}}
                       onChange={this.tableChange}
                />
            </div>
        )
    }
}

export default DicList;