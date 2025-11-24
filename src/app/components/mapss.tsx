"use client"
import React, { useEffect } from 'react'
import {Loader} from "@googlemaps/js-api-loader"
import { Marker } from '@react-google-maps/api'
const Mapss = () => {

   const mapRef= React.useRef<HTMLDivElement>(null)


  useEffect (() => {
    const initMap = async () => {
      console.log("map init")
    const loader = new Loader ({
      apiKey : process.env.NEXT_PUBLUC_MAPS_API_KEY as string,
      version : "weekly"

    })
       const {Map} = await loader.importLibrary("maps")
       const {Marker} =await loader.importLibrary("marker")
      const position = {
        lng: 110.04185335157803, 
        lat : -7.846126900605335, 
      }    

      const mapOptions : google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS.MAPID"
      }

      const map = new Map(mapRef.current as HTMLDivElement,mapOptions)
      const marker = new Marker ({
        map : map,
        position : position
      })
      
    }
    initMap();
  },[])
  return (
    <div style={{height : "800px"}} ref={mapRef}></div>
      
  )
}

export default Mapss