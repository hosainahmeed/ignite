'use client'
import { Button, Checkbox, Divider, Form, Input, Select } from 'antd'
import React from 'react'

type FundOption = 'IGNITE Fund' | 'IGNITE a Child'
type AmountTier = 'Spark' | 'Flame' | 'Blaze' | 'Inferno' | 'Custom'
type Frequency = 'One Time' | 'Monthly' | 'Yearly'

const AMOUNT_MAP: Record<Exclude<AmountTier, 'Custom'>, number> = {
    Spark: 10,
    Flame: 25,
    Blaze: 50,
    Inferno: 100,
}

function formatCurrency(n: number) {
    return `$${n.toFixed(2)}`
}

function SupportAthletForm() {
    const [form] = Form.useForm()

    const fund = Form.useWatch<FundOption>('fund', form)
    const tier = Form.useWatch<AmountTier>('amountTier', form)
    const customAmount = Form.useWatch<number>('customAmount', form)
    const coverFee = Form.useWatch<boolean>('coverFee', form)
    const frequency = Form.useWatch<Frequency>('frequency', form)

    const baseAmount = (() => {
        if (tier === 'Custom') return Number(customAmount) || 0
        if (!tier) return 0
        return AMOUNT_MAP[tier]
    })()

    const fee = coverFee ? +(baseAmount * 0.03).toFixed(2) : 0
    const total = +(baseAmount + fee).toFixed(2)

    const showFrequency = fund === 'IGNITE Fund'
    const showCustom = tier === 'Custom'

    const summaryTitle = (() => {
        if (!tier) return 'Donation Summary'
        const freqLabel = showFrequency && frequency ? ` ${frequency}` : ''
        const tierLabel = tier === 'Custom' ? 'Custom' : tier
        return `${tierLabel}${freqLabel} Donation`
    })()

    const onValuesChange = (changed: any) => {
        if (changed.fund === 'IGNITE a Child') {
            form.setFieldsValue({ frequency: undefined, amountTier: 'Custom', customAmount: 1000 })
        }

        if (changed.amountTier && changed.amountTier !== 'Custom') {
            form.setFieldsValue({ customAmount: undefined })
        }
    }

    const onFinish = (values: any) => {
        const payload = {
            fund: values.fund as FundOption,
            amountTier: values.amountTier as AmountTier,
            customAmount: values.customAmount ? Number(values.customAmount) : undefined,
            frequency: showFrequency ? (values.frequency as Frequency) : undefined,
            coverFee: !!values.coverFee,
            baseAmount,
            fee,
            total,
        }

        console.log('Donation submission:', payload)
    }

    return (
        <div>
            <Form
                form={form}
                requiredMark={false}
                layout='vertical'
                initialValues={{ coverFee: true, fund: 'IGNITE Fund', frequency: 'One Time' }}
                onValuesChange={onValuesChange}
                onFinish={onFinish}
            >
                <Form.Item
                    name="fund"
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
                    name="amountTier"
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

                {showCustom && (
                    <Form.Item
                        name="customAmount"
                        label="Enter Custom Amount"
                        rules={[
                            { required: true, message: 'Please enter an amount' },
                            {
                                validator: (_, value) => {
                                    const n = Number(value)
                                    if (!value || isNaN(n) || n <= 0) return Promise.reject('Enter a valid positive amount')
                                    return Promise.resolve()
                                }
                            }
                        ]}
                    >
                        <Input size='large' placeholder='e.g., 250' inputMode='numeric' />
                    </Form.Item>
                )}

                {showFrequency && (
                    <Form.Item
                        name="frequency"
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
                )}

                <Form.Item name="coverFee" valuePropName='checked'>
                    <Checkbox defaultChecked>
                        Help us cover processing fees so 100% of your donation reaches the athletes (adds 3%)
                    </Checkbox>
                </Form.Item>

                <div className="flex items-center mb-12 flex-col justify-between">
                    <div className='flex w-full justify-between'>
                        <h1>{summaryTitle}</h1>
                        <p>{formatCurrency(baseAmount)}</p>
                    </div>
                    {coverFee && <div className='flex w-full justify-between'>
                        <p>3% Cover the Fee</p>
                        <p>{formatCurrency(fee)}</p>
                    </div>}
                    <Divider />
                    <div className='flex w-full justify-between'>
                        <h1>Total</h1>
                        <p>{formatCurrency(total)}</p>
                    </div>
                </div>

                <Form.Item shouldUpdate>
                    <Button
                        style={{
                            background: 'linear-gradient(180deg, #BF0A30 0%, #003F91 100%)',
                            color: '#fff',
                            border: 'none',
                            padding: '12px 24px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        size="large"
                        htmlType="submit"
                        disabled={baseAmount <= 0}
                    >
                        Donate Now
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default SupportAthletForm