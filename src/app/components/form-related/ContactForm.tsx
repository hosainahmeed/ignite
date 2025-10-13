'use client';
import React from 'react';
import { Form, Input } from 'antd';
import { Button } from '@/components/ui/button';
import TextArea from 'antd/es/input/TextArea';

function ContactForm() {
    const [form] = Form.useForm();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', form.getFieldsValue());
        alert('Form submitted successfully!');
    };
    return (
        <div>
            <div className="grid gap-4">
                <Form requiredMark={false} layout='vertical' form={form}>
                    <Form.Item
                        name="fullName"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input
                            size='large'
                            placeholder="Full Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            size='large'
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone!' }]}
                    >
                        <Input
                            size='large'
                            placeholder="Phone"
                        />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <TextArea
                            size='large'
                            placeholder="Description"
                            rows={4}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-[#BF0A30] to-[#003F91] cursor-pointer rounded text-white px-8 py-3 font-medium transition-colors duration-200 focus:ring-[var(--blue)] focus:ring-offset-2"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
}

export default ContactForm;