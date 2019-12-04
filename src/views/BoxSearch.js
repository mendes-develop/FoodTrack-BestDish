import React, {useState} from 'react'
import styled from 'styled-components'
import { Container, Image } from 'react-bootstrap';
// import {image} from '../image.jpg'

export default function BoxSearch(props){

    const [city, setCity] = useState('')

    const handleSubmit = () => {
        if (city === ''){alert("Please, select a location.")}
        else{ 
            props.history.push('/restaurants')
        }
    }
    // https://media.timeout.com/images/105442053/image.jpg

    return (
        <Container fluid={true} style={{"paddingRight": "0px", "paddingLeft": "0px"}}>
            <BoxSearchDiv className="search">
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
            </BoxSearchDiv>
            <Image src="../image.jpg" style={{"position": "fixed","display": "flex","filter" : "brightness(50%)"}} fluid />
        </Container>
            
        
    )
//  "filter": "blur(1px)", "-webkit-filter": "blur(1px)", 
    // return (
    //     <BoxSearchDiv>
    //         <div className='wrap'><img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fres.cloudinary.com%2Fsimpleview%2Fimage%2Fupload%2Fv1485793494%2Fclients%2Fchattanooga%2FRestaurants_cb227c1b-1c14-4eb5-b22f-c67b8dbf4d45.jpg&imgrefurl=https%3A%2F%2Fwww.chattanoogafun.com%2Frestaurants%2F&docid=k39JnvXYvfGTyM&tbnid=BIcNnE_IxbOCYM%3A&vet=10ahUKEwi6heuRz5rmAhUjWN8KHVLwAUYQMwhuKAMwAw..i&w=4977&h=2800&bih=689&biw=1278&q=restaurants&ved=0ahUKEwi6heuRz5rmAhUjWN8KHVLwAUYQMwhuKAMwAw&iact=mrc&uact=8" width={300} height={300} alt="Some Food"/></div>
    //         <div className="search">
    //             <select onChange={(e) => setCity(e.target.value)} className="searchTerm" name="location" id="">
    //                 <option value="" defaultValue>Select a location</option>
    //                 <option value="manhattan">Manhattan</option>
    //                 <option value="queens">Queens</option>
    //                 <option value="brooklyn">Brooklyn</option>
    //                 <option value="bronx">Bronx</option>
    //                 <option value="statenisland">Staten Island</option>
    //             </select>
    //             <button onClick={handleSubmit} type="submit" className="searchButton">
    //                 <i className="fa fa-search"></i>
    //             </button>
    //         </div> 
    //     </BoxSearchDiv>
    // )
}

const BoxSearchDiv = styled.div`

    width: 100%;
    position: fixed;
    display: flex;
    z-index: 99;
    padding-top: 300px;
    padding-right: 200px;
    padding-left: 200px;

  
  
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
    width: 100%;
    height: 100%
  }

`