import { Channel } from "./channel";

describe('Channel', () => {
  let channel: Channel;

  beforeEach(() => {
    channel = new Channel('Test Channel');
  });

  it('should have the correct name', () => {
    expect(channel.name).toBe('Test Channel');
  });

  it('should upload and iterate over videos correctly', () => {
    const video1 = { title: 'Video 1', duration: 120 };
    const video2 = { title: 'Video 2', duration: 180 };

    channel.uploadNewVideo(video1.title, video1.duration);
    channel.uploadNewVideo(video2.title, video2.duration);

    const uploadedVideos: { title: string; duration: number }[] = [];

    channel.forEach((video) => {
      uploadedVideos.push({ title: video.title, duration: video.duration });
    });

    expect(uploadedVideos).toEqual([video1, video2]);
  });

  it('should iterate over an empty channel without executing the callback', () => {
    const callback = jest.fn();
    channel.forEach(callback);

    expect(callback).not.toHaveBeenCalled();
  });
});
