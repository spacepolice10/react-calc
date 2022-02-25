import { Space, Select, InputNumber, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

const { Title } = Typography 
const { Option } = Select

const MoneyConverter = () => {
    const [value, setValue] = useState(5)
    const [currency, setCurrency] = useState({data: {
        RUB: 81,
        USD: 1,
    }})
    const [firstCurrency, setFirstCurrency] = useState("USD")
    const [secondCurrency, setSecondCurrency] = useState("RUB")
    const [result, setResult] = useState([])
    const getData = () => {
        fetch('https://freecurrencyapi.net/api/v2/latest?apikey=4f202bc0-9668-11ec-8d55-25c099a12d74').then(x => x.json().then(i => { i.data.USD = 1; setCurrency(i)}))
    }
    const convert = () => {
        if (result.length > 9) setResult(result.splice(result.length - 1, (result.length)))
        setResult(result.concat([(value * currency.data[firstCurrency]) * currency.data[secondCurrency]]))
    }
    const selectBefore = (
        <Select onChange={(e) => {setFirstCurrency(e)}} defaultValue="USD" style={{ width: 60 }}>
          <Option value="USD">$</Option>
          <Option value="EUR">€</Option>
          <Option value="GBP">£</Option>
          <Option value="CNY">¥</Option>
          <Option value="RUB">₽</Option>
        </Select>
    );
    const selectAfter = (
        <Select onChange={(e) => {setSecondCurrency(e)}} defaultValue="RUB" style={{ width: 60 }}>
          <Option value="USD">$</Option>
          <Option value="EUR">€</Option>
          <Option value="GBP">£</Option>
          <Option value="CNY">¥</Option>
          <Option value="RUB">₽</Option>
        </Select>
    );
    useEffect(() => {
        convert()
    }, [value])
    return (
        <>
            <Space direction="vertical">
                <InputNumber onPressEnter={(e) => {setValue(e.target.value); getData(), convert()}} addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
            </Space>,
            {/* <div style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
                <Title level={2}>History:</Title>
                {React.Children.toArray(result.map(i => {
                    const first = firstCurrency
                    const second = secondCurrency
                    return <p>{first} &gt; {second} = {i}</p>
                }))}
            </div> */}
        </>
    )
}

export default MoneyConverter