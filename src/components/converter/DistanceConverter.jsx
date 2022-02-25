import { Input } from "antd"
import { useEffect, useState } from "react"

const style = {width: '211px', margin: '5px'}

const DistanceConverter = () => {
    const [value, setValue] = useState(0)
    const [metric, setMetric] = useState()
    const [centimeters, setCentimeters] = useState(0)
    const [decimeters, setDecimeters] = useState(0)
    const [meters, setMeters] = useState(0)
    const [kilometers, setKilometers] = useState(0)
    const [inches, setInches] = useState(0)
    const [feet, setFeet] = useState(0)
    const [yards, setYards] = useState(0)
    const [miles, setMiles] = useState(0)
    const convert = () => {
        if (metric == 'cm') {
            setCentimeters(value)
            setDecimeters(value / 10)
            setMeters(value / 100)
            setKilometers(value / 1000)
            setInches(value / 2.54)
            setFeet(value / 30.48)
            setYards(value / 91.44)
            setMiles(value / 160934)
        }
        if (metric == 'dm') {
            setCentimeters(value * 10)
            setDecimeters(value)
            setMeters(value / 10)
            setKilometers(value / 100)
            setInches(value * 3.937)
            setFeet(value / 3.048)
            setYards(value / 9.14)
            setMiles(value / 16093)
        }
        if (metric == 'm') {
            setCentimeters(value * 100)
            setDecimeters(value * 10)
            setMeters(value)
            setKilometers(value / 10)
            setInches(value * 39.37)
            setFeet(value * 3.281)
            setYards(value * 1.094)
            setMiles(value / 1609)
        }
        if (metric == 'km') {
            setCentimeters(value * 1000)
            setDecimeters(value * 100)
            setMeters(value * 10)
            setKilometers(value)
            setInches(value * 39370)
            setFeet(value * 3281)
            setYards(value * 1094)
            setMiles(value / 1.609)
        }
        if (metric == 'in') {
            setCentimeters(value * 2.54)
            setDecimeters(value / 3.937)
            setMeters(value / 39.37)
            setKilometers(value / 39370)
            setInches(value)
            setFeet(value / 12)
            setYards(value * 36)
            setMiles(value * 63360)
        }
        if (metric == 'ft') {
            setCentimeters(value * 30.48)
            setDecimeters(value * 3.048)
            setMeters(value / 3.281)
            setKilometers(value / 3281)
            setInches(value * 12)
            setFeet(value)
            setYards(value / 3)
            setMiles(value / 5280)
        }
        if (metric == 'yd') {
            setCentimeters(value * 91.44)
            setDecimeters(value * 9.14)
            setMeters(value / 1.094)
            setKilometers(value / 1094)
            setInches(value / 36)
            setFeet(value * 3)
            setYards(value)
            setMiles(value / 1760)
        }
        if (metric == 'mi') {
            setCentimeters(value * 160934)
            setDecimeters(value * 16093)
            setMeters(value * 1609)
            setKilometers(value * 1.609)
            setInches(value / 63360)
            setFeet(value * 5280)
            setYards(value * 1760)
            setMiles(value)
        }
    }
    useEffect(() => {
        convert()
    })
    return (
        <>
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('cm'); convert()}} 
                style={style} 
                suffix="cm" 
                placeholder="0" 
                value={centimeters} 
            />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('dm'); convert()}} 
                style={style} suffix="dm" 
                placeholder="0" 
                value={decimeters} 
            />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('m'); convert()}} 
                style={style} suffix="m" 
                placeholder="0" 
                value={meters} 
            />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('km'); convert()}} 
                style={style} 
                suffix="km" 
                placeholder="0" 
                value={kilometers} 
            />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('in'); convert()}} 
                style={style} 
                suffix="in" 
                placeholder="0" 
                value={inches} 
            />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('ft'); convert()}} 
                style={style} 
                suffix="ft" 
                placeholder="0" 
                value={feet} 
                />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('yd'); convert()}} 
                style={style} 
                suffix="yd" 
                placeholder="0"
                value={yards} 
                />
            <Input 
                onChange={(event) => {setValue(event.target.value); setMetric('mi'); convert()}} 
                style={style} 
                suffix="mi" 
                placeholder="0" 
                value={miles}
                />
        </>
    )
}

export default DistanceConverter