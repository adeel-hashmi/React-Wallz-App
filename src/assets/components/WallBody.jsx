import React, { useState } from 'react'
import data from '../../data.js'
import imgData from '../../data.js'

function WallBody() {

    // const [img, setImg] =  React.useState("/bg.png")
    const [wall, setWall] =  React.useState(
        {
            topText : "",
            bottomText : "",
            randomImg: "/bg.png"
        }
    )
    
    function randomImgBtn_handler(e){
        e.preventDefault()
        const imgArray = imgData.data.memes
        const randomNum = Math.floor(Math.random() * imgArray.length)
        const imgUrl = imgArray[randomNum].url
        setWall(prevWall =>({
                ...prevWall,
                randomImg : imgUrl
            }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setWall(prevWall =>({
            ...prevWall,
            [name] : value
        }))
    }


    return (
        <div className="flex justify-around flex-col lg:flex-row">
            <form className="px-4 lg:my-32 my-10 mx-auto md:max-w-lg lg:max-w-2xl space-y-4">
            <div className="flex lg:space-x-4">
                <input placeholder="Upper Text" className="shadow-sm rounded text-2xl py-2 px-4 border border-gray-400 w-full focus:outline-none focus:border-cyan-500" type="text" name="topText" value={wall.topText} onChange={handleChange}/>
                <input placeholder="Bottom Text" className="shadow-sm rounded text-2xl py-2 px-4 border border-gray-400 w-full focus:outline-none focus:border-cyan-500" type="text" name="bottomText" value={wall.bottomText} onChange={handleChange}/>
            </div>
            <div className="text-center">
                <button onClick={randomImgBtn_handler} className="bg-black text-white shadow-sm w-full py-4 text-xl max-w-sm">Generate Random Image </button> 
            </div>
            </form>
            {/* <div className="max-w-md lg:mt-10 lg:m-6 m-auto bg-cover" style={{backgroundImage: `url(${wall.randomImg})`}}> */}
            <div className="max-w-md w-96 md:mt-10 mx-auto relative">
                <img className="flex-1"  src={wall.randomImg}/>
                <h2 className="absolute text-5xl top-5 left-1/2 -translate-x-1/2 ont-bold text-white drop-shadow shadow-black">{wall.topText}</h2>
                <h2 className="absolute text-5xl bottom-5 left-1/2 -translate-x-1/2 ont-bold text-white drop-shadow shadow-black">{wall.bottomText}</h2>
            </div>
        </div>
    )
}

export default WallBody