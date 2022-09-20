import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Webcam from "react-webcam";
import { useState, useRef, useCallback } from 'react';



export default function Home() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };


  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  console.log(imgSrc);


  return (
    <>
      <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
        <a href={imgSrc} download="filename.jpg">
          download
        </a>
      </>
    </>
  )
}