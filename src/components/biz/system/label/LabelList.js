import React, {Component} from "react";
import {Button, Divider, Popconfirm, Table} from "antd";
import {Link} from "react-router-dom";
import LabelApi from "../../../../api/system/LabelApi";
import Label from "../../../util/label/Label";

class LabelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                page: '',
                size: ''
            },
            data: [],
            columns: [
                {
                title: <Label value="column_id"/>,
                dataIndex: 'id',
                render: text => <a href="#">{text}</a>
            }, {
                title: <Label value="column_cn_label"/>,
                dataIndex: 'cnLabel'
            },
                {
                title: '英文标签',
                dataIndex: 'enLabel'
            },  {
                title: '编码',
                dataIndex: 'code'
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                <Link to={`/label/update/${record.id}`}>修改</Link>
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
        LabelApi.delete(id).then(() => this.list());
    };

    componentDidMount() {
        this.list();
    }

    list = () => {
        LabelApi.list().then(data => this.setState({data: data.content}));
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
                <Label value="Y" group="YES_OR_NO"/>
                <Button><Link to="/label/add"><Label value="btn_add"/></Link></Button>
                <Table rowKey="id" columns={this.state.columns} dataSource={this.state.data}
                       pagination={{showSizeChanger: true, pageSizeOptions: ['5', '10', '20'], defaultPageSize: 5}}
                       onChange={this.tableChange}
                />
            </div>
        )
    }
}

export default LabelList;