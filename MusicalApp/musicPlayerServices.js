import TrackPlayer, {
  Event,
  RepeatMode,
  Capability,
} from 'react-native-track-player';
import {playListData} from './src/constants';

/**
 * Setup the player
 */
export async function setupPlayer() {
  let isSetup = false;
  try {
    const player = await TrackPlayer.getActiveTrack();
    isSetup = !!player;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    isSetup = true;
  }
  return isSetup;
}

/**
 * Add tracks to the player queue
 */
export async function addTrack() {
  await TrackPlayer.reset(); // Clear existing tracks
  await TrackPlayer.add(playListData); // Add new playlist
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

/**
 * Playback service: handles remote events (e.g., lock screen)
 */
export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
