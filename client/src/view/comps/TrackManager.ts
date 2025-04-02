import Track from './Track';

export default class TrackManager {
    private static tracks: Track[] = [];
    private static currentTrackIndex: number = -1;

    static register(track: Track) {
        this.tracks.push(track);
    }

    static playTrack(index: number) {
        if (index >= 0 && index < this.tracks.length) {
            this.currentTrackIndex = index;
            this.tracks[index].play();
        }
    }

    static nextTrack() {
        this.playTrack(this.currentTrackIndex + 1);
    }

    static prevTrack() {
        this.playTrack(this.currentTrackIndex - 1);
    }

    static stopAll(exceptTrack?: Track) {
        this.tracks.forEach(track => {
            if (track !== exceptTrack) {
                track.stop();
            }
        });
    }
}