import Track from './Track';

export default class TrackManager {
    private static instances: Track[] = [];

    static register(track: Track) {
        this.instances.push(track);
    }

    static stopAll(currentTrack?: Track) {
        this.instances.forEach(track => {
            if (track !== currentTrack) {
                track.stop();
            }
        });
    }
}