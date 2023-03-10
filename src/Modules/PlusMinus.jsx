// Ch5.2
import React, { useState } from 'react';
export default function PlusMinus() {
    const [nums, setNums] = useState({ num1: 0, num2: 0 });
    const [res, setRes] = useState(0);
    const inputChanged = (event) => {
        setNums({ ...nums, [event.target.name]: event.target.value });
    }
    const calc = (met) => {
        met == "+" ? setRes(Number(nums.num1) + Number(nums.num2)) : setRes(Number(nums.num1) - Number(nums.num2)); 
    }
    return (
        <div>
            <div>
                <h3>Calculate plus or minus</h3>
                <p>Result = {res}</p>
            </div>
            <div>
                <input placeholder='0' name='num1' value={nums.num1} onChange={inputChanged} />
                <input placeholder='0' name='num2' value={nums.num2} onChange={inputChanged} />
                <button onClick={() => calc("+")}>+</button>
                <button onClick={() => calc("-")}>-</button>
            </div>
        </div>
    )
}