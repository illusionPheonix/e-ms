import React, { Component } from 'react';
import './login.less';
import { Form, Input, Button, Checkbox } from 'antd';

export default class login extends Component {
    render() {
        return (
            <div className='login-box'>
                <Form>
                    <Form.Item>
                        <Input></Input>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
