import { nanoid } from "nanoid";
import type { FormData } from "../components/UserFrom";

export const villains: FormData[] = [
    {
        id: nanoid(),
        name: "Joker",
        reference: "The Dark Knight (2008)",
        imageUrl:
            "https://i.ytimg.com/vi/votcOf5cYCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5mWtGdIPEGf9W-deMw7YbVP33CQ",
    },
    {
        id: nanoid(),
        name: "Darth Vader",
        reference: "Star Wars: The Empire Strikes Back (1980)",
        imageUrl:
            "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
    },
    {
        id: nanoid(),
        name: "Hannibal Lecter",
        reference: "The Silence of the Lambs (1991)",
        imageUrl:
            "https://static0.moviewebimages.com/wordpress/wp-content/uploads/article/DZ7wy5pxFVlVozd7dnBvClCIbHffuL.jpg?w=1200&h=675&fit=crop",
    },
    {
        id: nanoid(),
        name: "Thanos",
        reference: "Avengers: Infinity War (2018)",
        imageUrl:
            "https://th-thumbnailer.cdn-si-edu.com/UAJEu9vQxdwwIi8XyBiSQmysTtk=/fit-in/1600x0/filters:focal(582x120:583x121)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d6/7d/d67d186f-f5f3-4867-82c5-2c772120304f/thanos-snap-featured-120518-2.jpg",
    },
    {
        id: nanoid(),
        name: "Walter White",
        reference: "Breaking Bad (2008–2013)",
        imageUrl:
            "https://scriptmag.com/uploads/MTY3Mzc4OTQ5MzAzMDUyMDc3/image-placeholder-title.jpg?format=auto&optimize=high&width=1440",
    },
];
