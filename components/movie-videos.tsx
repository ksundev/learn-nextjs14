import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/movies/${id}/videos`);
    return await response.json();
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideo(id);
    return <div>
        <h6>{JSON.stringify(videos)}</h6>
    </div>
}