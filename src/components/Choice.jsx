import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Choice() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color='blue'>
        Get Started
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Choose your role</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <div className="flex flex-row justify-center w-full space-x-4">
            <Button variant="gradient" color="blue" onClick={handleOpen}>
              <span>Mentees</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={handleOpen}>
              <span>Mentor</span>
            </Button>
          </div>
        </DialogFooter>

      </Dialog >
    </>
  )
}

export default Choice
