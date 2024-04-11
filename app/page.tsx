"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

type Props = {};

const HomePage = (props: Props) => {
  const webCamRef = useRef<Webcam>(null); // to use useRef we have use "use client"; on top of this file otherwise it will give error and this webCamRef is of type Webcam which is imported from react-webcam
  const canvasRef = useRef<HTMLCanvasElement>(null); //  This canvasRef is of type HTMLCanvasElement which is imported from react
  //  States
  const [mirrored, setMirrored] = useState<boolean>(false);
  return (
    <div className="flex h-screen ">
      {/* h-screen is a utility class in Tailwind CSS that sets the height of an
      element to occupy the full height of the screen. */}

      {/* ------------------  This is the left division of the page with webcam and canvas  ----------------------------- */}
      <div className="relative">
        <div className="relative h-screen w-full p-2">
          <Webcam
            ref={webCamRef}
            mirrored={mirrored}
            className="h-full w-full  p-2"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 h-full w-full object-contain "
          ></canvas>
        </div>
      </div>

      {/* ------------------  This is the right division of the page with button panel and wiki section  ----------------------------- */}
      <div className="flex flex-row flex-1">
        {/* ----------Buttons Panel---------- */}
        <div className="border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4">
          {/* top section */}
          <div className="flex flex-col gap-2">
            <ModeToggle/>
            <Separator />
          </div>
          {/* middle section */}
          <div className="flex flex-col gap-2">
            <Separator />
            <Separator />
          </div>
          {/* bottom section */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
