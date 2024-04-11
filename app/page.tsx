"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { beep } from "@/utils/audio";
import {
  Camera,
  FlipHorizontal,
  PersonStanding,
  Video,
  Volume2,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { Rings } from "react-loader-spinner";
import Webcam from "react-webcam";
import { toast } from "sonner";

type Props = {};

const HomePage = (props: Props) => {
  const webCamRef = useRef<Webcam>(null); // to use useRef we have use "use client"; on top of this file otherwise it will give error and this webCamRef is of type Webcam which is imported from react-webcam
  const canvasRef = useRef<HTMLCanvasElement>(null); //  This canvasRef is of type HTMLCanvasElement which is imported from react
  //  States
  const [mirrored, setMirrored] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [autoRecordEnabled, setAutoRecordEnabled] = useState<boolean>(false);
  const [volume, setVolume] = useState(0.8);
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
            <ModeToggle />
            <Button variant={"outline"} size={"icon"}>
              <FlipHorizontal onClick={() => setMirrored((prev) => !prev)} />
            </Button>
            <Separator className="my-2" />
          </div>
          {/* middle section */}
          <div className="flex flex-col gap-2">
            <Separator className="my-2" />
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={userPromptScreenshot}
            >
              <Camera />
            </Button>
            <Button
              variant={isRecording ? "destructive" : "outline"}
              size={"icon"}
              onClick={userPromptRecord}
            >
              <Video />
            </Button>
            <Separator className="my-2" />
            <Button
              variant={autoRecordEnabled ? "destructive" : "outline"}
              size={"icon"}
              onClick={toggleAutoRecord}
            >
              {autoRecordEnabled ? (
                <Rings color="white" height={45} />
              ) : (
                <PersonStanding />
              )}
            </Button>
          </div>
          {/* bottom section */}
          <div className="flex flex-col gap-2">
            <Separator />
            <Popover>
              <PopoverTrigger asChild>
                {/* asChild is used to make the button as a child of the PopoverTrigger.*/}
                <Button variant={"outline"} size={"icon"}>
                  <Volume2 />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Slider
                  max={1}
                  min={0}
                  step={0.1}
                  defaultValue={[volume]}
                  onValueCommit={(val) => {
                    setVolume(val[0]);
                    beep(val[0]);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
  // handler Functions
  function userPromptScreenshot() {
    //take picture
    //Save picture
  }
  function userPromptRecord() {
    // Check if Recording:    //Then Stop Recording//and Save Video
    // if not recording:    //Start Recording
  }
  function toggleAutoRecord() {
    if (autoRecordEnabled) {
      setAutoRecordEnabled(false);
      //show toast to notify the change
      toast("Auto Record Disabled");
    } else {
      setAutoRecordEnabled(true);
      toast("Auto Record Enabled");
    }
  }
};

export default HomePage;
