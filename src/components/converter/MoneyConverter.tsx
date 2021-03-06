import { Space, Select, InputNumber, Typography, Button } from 'antd'
import React, { useEffect, useState, useRef } from 'react'

const { Title } = Typography
const { Option } = Select

const style = {
    color: '#0086FF',
    border: '2px #0086FF solid',
    padding: '5px',
    margin: '5px',
    borderRadius: '10px',
}

interface CurrencyObject {
    first: string
    second: string
}

const MoneyConverter = () => {
    const inputElement = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(5)
    const [result, setResult] = useState([] as Number[])
    const [currency, setCurrency] = useState({
        data: {
            RUB: 0,
            USD: 0,
        },
    })
    const [firstCurrency, setFirstCurrency] = useState('USD')
    const [secondCurrency, setSecondCurrency] = useState('RUB')
    const [currencyHistory, setCurrencyHistory] = useState(
        [] as CurrencyObject[]
    )
    const getData = () => {
        fetch(
            'https://freecurrencyapi.net/api/v2/latest?apikey=4f202bc0-9668-11ec-8d55-25c099a12d74'
        ).then((x) =>
            x.json().then((i) => {
                i.data.USD = 1
                setCurrency(i)
            })
        )
    }
    const convert = () => {
        if (result.length > 5) {
            if (confirm('Too many calculations. Wanna delete old ones?')) {
                setResult(result.splice(0, result.length))
                setCurrencyHistory(
                    currencyHistory.splice(
                        currencyHistory.length - 1,
                        currencyHistory.length
                    )
                )
            }
        }
        setCurrencyHistory(
            currencyHistory.concat([
                { first: firstCurrency, second: secondCurrency },
            ])
        )
        setResult(
            result.concat([
                value *
                    Number(currency.data[firstCurrency]) *
                    Number(currency.data[secondCurrency]),
            ])
        )
    }
    const selectBefore = (
        <Select
            onChange={(e) => {
                setFirstCurrency(e)
            }}
            defaultValue="USD"
            style={{ width: 60 }}
        >
            <Option value="USD">$</Option>
            <Option value="EUR">???</Option>
            <Option value="GBP">??</Option>
            <Option value="CNY">??</Option>
            <Option value="RUB">???</Option>
        </Select>
    )
    const selectAfter = (
        <Select
            onChange={(e) => {
                setSecondCurrency(e)
            }}
            defaultValue="RUB"
            style={{ width: 60 }}
        >
            <Option value="USD">$</Option>
            <Option value="EUR">???</Option>
            <Option value="GBP">??</Option>
            <Option value="CNY">??</Option>
            <Option value="RUB">???</Option>
        </Select>
    )
    useEffect(() => {
        convert()
    }, [value])
    return (
        <>
            <Space direction="vertical">
                <InputNumber
                    ref={inputElement}
                    onPressEnter={(e: React.KeyboardEvent) => {
                        const target = e.target as HTMLInputElement
                        setValue(Number(target.value))
                        getData()
                    }}
                    addonBefore={selectBefore}
                    addonAfter={selectAfter}
                    defaultValue={100}
                />
                <Button
                    onClick={() => {
                        if (inputElement.current) {
                            setValue(Number(inputElement.current.value))
                        }
                        getData()
                    }}
                >
                    Convert
                </Button>
            </Space>
            ,
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '300px',
                }}
            >
                <Title level={2}>History:</Title>
                {React.Children.toArray(
                    result.map((e, i) => {
                        return (
                            <p className="appear">
                                <span style={style}>
                                    {currencyHistory[i].first}
                                </span>
                                &gt;
                                <span style={style}>
                                    {currencyHistory[i].second}
                                </span>
                                =<span style={style}>{e.toFixed(2)}</span>
                            </p>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default MoneyConverter
