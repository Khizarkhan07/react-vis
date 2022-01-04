import React, {useCallback, useEffect, useState} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, Hint} from 'react-vis';
import 'react-vis/dist/style.css';
import {ResultObj} from "../App";
import {filterData, transformData} from "../utils";

export type ChartProps = {
    data : ResultObj[];
}
const Chart: React.FC<ChartProps> = ({data}) => {
    const [color, setColor] = useState('violet')
    const [hint, setHint]= useState({x: 1, y :1 })
    const handleMouseOver = useCallback(()=> {
        setColor('black')
    }, [true])
    const handleMouseOut = useCallback(()=> {
        setColor('violet')
    }, [true])


    const handleHintValue = useCallback( (e) => {
        setHint(e)
    }, [hint])

    const javaScript : ResultObj[] = filterData(data, 'JavaScript')
    const java : ResultObj[] = filterData(data, 'Java')
    const ruby : ResultObj[] = filterData(data, 'Ruby')
    const python : ResultObj[] = filterData(data, 'Python')

    const JavaScriptDataArr  = transformData(javaScript)
    const JavaDataArr  = transformData(java)
    const RubyDataArr  = transformData(ruby)
    const PythonDataArr  = transformData(python)

    return (
        <div>
            <XYPlot

                xType="ordinal"
                width={1000}
                height={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Period of time(year and quarter)" />
                <YAxis title="Number of pull requests (thousands)" />

                <Hint value={hint}>
                    <div>
                        <p>{hint.x} , {hint.y} </p>
                    </div>
                </Hint>

                <LineSeries
                    onNearestX ={ handleHintValue}
                    onSeriesMouseOver = {handleMouseOver}
                    onSeriesMouseOut = {handleMouseOut}
                    data={(JavaScriptDataArr as any)}
                    style={{stroke: color, strokeWidth: 3}}

                />
                <LineSeries
                    onNearestX ={ handleHintValue}
                    data={(RubyDataArr as any)}
                    style={{stroke: 'red', strokeWidth: 3}}
                />
                <LineSeries
                    onNearestX ={ handleHintValue}
                    data={(PythonDataArr as any)}
                    style={{stroke: 'green', strokeWidth: 3}}
                />
                <LineSeries
                    onNearestX ={ handleHintValue}
                    data={(JavaDataArr as any)}
                    style={{stroke: 'blue', strokeWidth: 3}}
                />
            </XYPlot>

        </div>

    );
}

export default React.memo(Chart);