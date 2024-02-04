import { Collection, DefaultIterator } from "../data-structures/iterator";
import { Queue } from "../data-structures/queue";
import { Video } from "./video";

export class Videos implements DefaultIterator<Video>, Collection<Video> {
    readonly data: Queue<Video> = new Queue();

    hasNext(): boolean {
        return !this.data.isEmpty;
    }

    get next(): Video {
        return this.data.dequeue()!;
    }

    add(video: Video): void {
        this.data.enqueue(video);
    }
}
