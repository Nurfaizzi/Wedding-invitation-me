"use client"
 import ReactPlayer from 'react-player';


function AudioPlayer  ({url}) {
    return (
<div>
    <ReactPlayer url={"https://www.youtube.com/watch?v=FzkfEQ7a7ew&list=RDFzkfEQ7a7ew&start_radio=1"} controls={true} />
</div>
    )
}

export default AudioPlayer