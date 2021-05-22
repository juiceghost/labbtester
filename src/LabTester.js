import React, { useEffect, useState } from "react"
import StyledForm from "./styles"
import axios from 'axios'
import styled from "styled-components"
import tw from "twin.macro"

const Error = styled.div`
    ${tw`text-red-500`}
`
const Button = styled.div`
    ${tw`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
`


const LabTester = () => {
    const [lab1URL, setLab1URL] = useState(localStorage.getItem('lab1URL') || 'http://localhost:5000')
    const [lab2URL, setLab2URL] = useState(localStorage.getItem('lab2URL') || 'http://localhost:5000')
    const [lab1Passed, setLab1Passed] = useState(false)
    const [lab1Failed, setLab1Failed] = useState(false)
    const [lab2Passed, setLab2Passed] = useState(false)


    useEffect(() => {
        localStorage.setItem('lab1URL', lab1URL)
        localStorage.setItem('lab2URL', lab2URL)
    }, [lab1URL, lab2URL])
    const handleURL1Change = (e) => {
        setLab1URL(e.target.value)
    }
    const handleURL2Change = (e) => {
        setLab2URL(e.target.value)
    }
    const resetAll = () => {
        localStorage.clear();
        window.location.reload();
    }

    const runTests = async (e) => {
        e.preventDefault()
        try {
            let result = await axios.get(lab1URL + '/api/random')
            let result_custom = await axios.get(lab1URL + '/api/custom_random/500')
            console.log(result)
            console.log(result_custom)
            if (result.data.number > 0 && result_custom.data.number > 0) {
                setLab1Passed(true)
                setLab1Failed(false)

            }
        } catch (err) {
            setLab1Failed(err.toString())
        }
    }
    return (
        <StyledForm>
            <form onSubmit={runTests}>
                {/* <fieldset> */}
                <label htmlFor="labb1">URL for backend Labb 1</label>
                <input name="labb1" type="text" onChange={handleURL1Change} value={lab1URL} placeholder="Enter your endpoint url" />
                {lab1Passed && <p>LABB1 Looks good!</p>}
                {lab1Failed && <Error>{lab1Failed}</Error>}
                <label for="labb2">URL for backend Labb 2</label>
                <input name="labb2" type="text" onChange={handleURL2Change} value={lab2URL} placeholder="Enter your endpoint url" />
                {/* </fieldset> */}
                <button>Run Tests!</button>
            </form>
            <Button onClick={resetAll}>Reset</Button>

        </StyledForm>
    )
}

export default LabTester