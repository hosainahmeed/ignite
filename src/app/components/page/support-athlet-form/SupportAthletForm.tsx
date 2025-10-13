'use client'
import { Checkbox, Form, Input, Select } from 'antd'
import React from 'react'

function SupportAthletForm() {
    return (
        <div>
            <Form requiredMark={false} layout='vertical'>
                <Form.Item
                    name="name"
                    label="Select a Fund to Support"
                    rules={[{ required: true, message: 'Please select a fund to support' }]}
                >
                    <Select
                        size='large'
                        placeholder="Select a Fund to Support"
                        options={[
                            { value: 'IGNITE Fund', label: 'IGNITE Fund - Donate to our general fund that is dispersed to many athletes.' },
                            { value: 'IGNITE a Child', label: 'IGNITE a Child - Champion Donor - Support a Child directly, and commit to covering their full costs.' },

                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Donation Amount"
                    rules={[{ required: true, message: 'Please select a donation amount' }]}
                >
                    <Select
                        size='large'
                        placeholder="Donation Amount"
                        options={[
                            { value: 'Spark', label: 'Spark ($10)' },
                            { value: 'Flame', label: 'Flame ($25)' },
                            { value: 'Blaze', label: 'Blaze ($50)' },
                            { value: 'Inferno', label: 'Inferno ($100)' },
                            { value: 'Custom', label: 'Custom amount' },

                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Donation Frequency"
                    rules={[{ required: true, message: 'Please select a donation frequency' }]}
                >
                    <Select
                        size='large'
                        placeholder="Donation Frequency"
                        options={[
                            { value: 'One Time', label: 'One Time' },
                            { value: 'Monthly', label: 'Monthly' },
                            { value: 'Yearly', label: 'Yearly' },

                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="donation"
                >
                    <Checkbox
                        name="donation"
                        value="donation"
                        defaultChecked
                    >
                        Help us cover processing fees so 100% of your donation reaches the athletes
                    </Checkbox>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SupportAthletForm