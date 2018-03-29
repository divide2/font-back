import React, {Component} from "react";
import {Button, Divider, Popconfirm, Table} from "antd";
import {Link} from "react-router-dom";
import Dic from "../../../util/label/Dic";
import DicApi from "../../../../api/system/DicApi";
import Label from "../../../util/label/Label";

class DicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                page: '',
                size: ''
            },
            data: [],
            columns: [{
                title: <Label value="ADD_SUCCESS"/>,
                dataIndex: 'id',
                render: text => <a href="/">{text}</a>
            }, {
                title: <Label value="ADD_SUCCESS"/>,
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
              <a href="/">删除</a>
            </Popconfirm>
        </span>
                )
            }]
        }
    }

    onDelete = (id) => {
        DicApi.delete(id).then(() => this.list());
    };

    componentDidMount() {
        this.list();
    }

    list = () => {
        DicApi.list().then(data => this.setState({data: data.content}));
    };

    tableChange = (p) => {
        this.setState({
            query: {
                page: p.current,
                size: p.pageSize
            }
        });
        this.list()
    };

    render() {
        return (
            <div>
                <Dic value="Y" group="YES_OR_NO"/>
                <Button><Link to="/dic/add"><Label value="ADD_SUCCESS"/></Link></Button>
                <Table rowKey="id" columns={this.state.columns} dataSource={this.state.data}
                       pagination={{showSizeChanger: true, pageSizeOptions: ['5', '10', '20'], defaultPageSize: 5}}
                       onChange={this.tableChange}
                />
            </div>
        )
    }
}

export default DicList;