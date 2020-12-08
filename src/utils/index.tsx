import {ResultObj} from "../App";

export const filterData = (data : ResultObj[], val : string ) => {
    return data.filter(value => value.name === val)
}
export const transformData = (data: ResultObj[]) => {

    const transformed = data.map((d : any)=> {
        return {x: d.year + '/' + d.quarter,
            y: parseFloat(String(d.count / 1000))}
    });

    return transformed;
}