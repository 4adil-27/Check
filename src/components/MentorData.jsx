import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react"
import Choice from './Choice'

export default function MentorData() {
    return (
        <Carousel className="rounded-xl">
            <div className="relative h-full w-full">
                <img
                    src="https://img.freepik.com/free-vector/think-out-box-concept-open-your-brain-look-new-ideas-that-will-drive-your-business-work-creativity-help-see-business-opportunity-vision-idea-discover-new-solution_1150-55436.jpg?w=1380&t=st=1712488134~exp=1712488734~hmac=3c57fe0898d0f65200ee8e254e82d45d45af23be9ddee0117316c1817d25c98f"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/5">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="indigo-500"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl opacity-100"
                        >
                            Mentor Hub
                        </Typography>
                        <Typography
                            variant="lead"
                            color="teal-500"
                            className="mb-12 opacity-80"
                        >
                            Your gateway to transformative mentorship.Discover tailored connections
                            with experienced mentors eager to guide you. Whether you're seeking career insights
                            or personal development, MentorHub is here to empower your journey.

                        </Typography>
                        <div className="flex gap-2">
                            <Choice />
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}
