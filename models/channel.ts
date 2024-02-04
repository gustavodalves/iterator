import { Collection, DefaultIterator } from "../data-structures/iterator";
import { Video } from "./video";
import { Videos } from "./videos";

export class Channel {
    constructor(
        readonly name: string
    ) {}

    videos: DefaultIterator<Video> & Collection<Video> = new Videos()

    uploadNewVideo(
        title: string,
        duration: number
    ) {
        this.videos.add(
            new Video(title, duration)
        )
    }

    forEach(callback :(video: Video) => void) {
        let hasNext: boolean = this.videos.hasNext()

        while(
            hasNext
        ) {
            callback(this.videos.next)
            hasNext = (this.videos.hasNext())
        }
    }
}