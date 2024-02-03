import { Videos } from "./videos";
import { Video } from "./video";

describe('Videos', () => {
  let videos: Videos;

  beforeEach(() => {
    videos = new Videos();
  });

  it('should add videos correctly', () => {
    const video1 = new Video('Video 1', 120);
    const video2 = new Video('Video 2', 180);

    videos.add(video1);
    videos.add(video2);

    expect(videos.hasNext()).toBe(true);
    expect(videos.next).toBe(video1);
    expect(videos.next).toBe(video2);
    expect(videos.hasNext()).toBe(false);
  });

  it('should iterate over videos correctly', () => {
    const video1 = new Video('Video 1', 120);
    const video2 = new Video('Video 2', 180);

    videos.add(video1);
    videos.add(video2);

    const iteratorValues = [...videos.data];
    expect(iteratorValues).toEqual([video1, video2]);
  });

  it('should throw an error when trying to get next video from an empty Videos', () => {
    expect(() => videos.next).toThrowError('Queue is empty');
  });

  it('should return false for hasNext when Videos is empty', () => {
    expect(videos.hasNext()).toBe(false);
  });
});
