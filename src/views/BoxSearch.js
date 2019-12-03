import React, {useState} from 'react'
import styled from 'styled-components'

export default function BoxSearch(props){

    const [city, setCity] = useState('')

    const handleSubmit = () => {
        if (city === ''){alert("Please, select a location.")}
        else{ 
            props.history.push('/restaurants')
        }
    }

    return (
        <BoxSearchDiv>
            <div><img src="" alt="Some Food"/></div>
            <div className="search">
                <select onChange={(e) => setCity(e.target.value)} className="searchTerm" name="location" id="">
                    <option value="" defaultValue>Select a location</option>
                    <option value="manhattan">Manhattan</option>
                    <option value="queens">Queens</option>
                    <option value="brooklyn">Brooklyn</option>
                    <option value="bronx">Bronx</option>
                    <option value="statenisland">Staten Island</option>
                </select>
                <button onClick={handleSubmit} type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div> 
        </BoxSearchDiv>
    )
}

const BoxSearchDiv = styled.div`

width: 30%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

.search {
    width: 100%;
    position: relative;
    display: flex;
  }
  
  .searchTerm {
    width: 100%;
    border: 3px solid #00B4CC;
    border-right: none;
    padding: 5px;
    height: 38px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
  }
  
  .searchTerm:focus{
    color: #00B4CC;
  }
  
  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }

  .wrap{

  }

`