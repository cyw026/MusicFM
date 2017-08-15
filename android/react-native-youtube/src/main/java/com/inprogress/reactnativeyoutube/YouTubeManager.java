package com.inprogress.reactnativeyoutube;

import android.support.annotation.Nullable;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.pierfrancescosoffritti.youtubeplayer.YouTubePlayerView;
import com.pierfrancescosoffritti.youtubeplayer.AbstractYouTubeListener;
import com.pierfrancescosoffritti.youtubeplayer.YouTubePlayerFullScreenListener;

import java.util.Map;


public class YouTubeManager extends SimpleViewManager<YouTubePlayerView> {

    private static final int COMMAND_SEEK_TO = 1;
    private static final int COMMAND_NEXT_VIDEO = 2;
    private static final int COMMAND_PREVIOUS_VIDEO = 3;
    private static final int COMMAND_PLAY_VIDEO_AT = 4;

    @Override
    public String getName() {
        return "ReactYouTube";
    }

    @Override
    protected YouTubePlayerView createViewInstance(ThemedReactContext themedReactContext) {
        final YouTubePlayerView playerView= new YouTubePlayerView(themedReactContext);
        playerView.initialize(new AbstractYouTubeListener() {
            @Override
            public void onReady() {
                playerView.loadVideo("9aJVr5tTTWk", 0);
            }
        }, true);

        return playerView;
    }

    @Override
    public Map<String,Integer> getCommandsMap() {
        return MapBuilder.of(
            "seekTo",
            COMMAND_SEEK_TO,
            "nextVideo",
            COMMAND_NEXT_VIDEO,
            "previousVideo",
            COMMAND_PREVIOUS_VIDEO,
            "playVideoAt",
            COMMAND_PLAY_VIDEO_AT
        );
    }

    @Override
    public void receiveCommand(YouTubePlayerView view, int commandType, @Nullable ReadableArray args) {
        Assertions.assertNotNull(view);
        Assertions.assertNotNull(args);
        switch (commandType) {
            case COMMAND_SEEK_TO: {
                view.seekTo(args.getInt(0));
                return;
            }
            case COMMAND_NEXT_VIDEO: {
//                view.nextVideo();
                return;
            }
            case COMMAND_PREVIOUS_VIDEO: {
//                view.previousVideo();
                return;
            }
            case COMMAND_PLAY_VIDEO_AT: {
//                view.playVideoAt(args.getInt(0));
                   view.playVideo();
                return;
            }
            default:
                throw new IllegalArgumentException(
                  String.format("Unsupported command %d received by %s.", commandType, getClass().getSimpleName())
                );
        }
    }

    @Override
    public @Nullable Map <String,Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
            "error",
            (Object) MapBuilder.of("registrationName", "onYouTubeError"),
            "ready",
            (Object) MapBuilder.of("registrationName", "onYouTubeReady"),
            "state",
            (Object) MapBuilder.of("registrationName", "onYouTubeChangeState"),
            "quality",
            (Object) MapBuilder.of("registrationName", "onYouTubeChangeQuality"),
            "fullscreen",
            (Object) MapBuilder.of("registrationName", "onYouTubeChangeFullscreen")
        );
    }

    public int getCurrentTime(YouTubePlayerView view) {
//        return view.getCurrentTime();
        return 0;
    }

    public int getVideosIndex(YouTubePlayerView view) {
//        return view.getVideosIndex();
        return 0;
    }


    @ReactProp(name = "apiKey")
    public void setApiKey(YouTubePlayerView view, @Nullable String param) {
//        view.setApiKey(param);
    }

    @ReactProp(name = "videoId")
    public void setPropVideoId(YouTubePlayerView view, @Nullable String param) {
//        view.setVideoId(param);
        view.loadVideo("9aJVr5tTTWk", 0);
    }

    @ReactProp(name = "videoIds")
    public void setPropVideoIds(YouTubePlayerView view, @Nullable ReadableArray param) {
//        view.setVideoIds(param);
    }

    @ReactProp(name = "playlistId")
    public void setPropPlaylistId(YouTubePlayerView view, @Nullable String param) {
//        view.setPlaylistId(param);
    }

    @ReactProp(name = "play")
    public void setPropPlay(final YouTubePlayerView view, @Nullable boolean param) {
//        view.initialize(new AbstractYouTubeListener() {
//            @Override
//            public void onReady() {
//                view.loadVideo("9aJVr5tTTWk", 0);
//            }
//        }, true);

//        view.setPlay(param);
        view.playVideo();
    }

    @ReactProp(name = "loop")
    public void setPropLoop(YouTubePlayerView view, @Nullable boolean param) {
//        view.setLoop(param);
    }

    @ReactProp(name = "fullscreen")
    public void setPropFullscreen(YouTubePlayerView view, @Nullable boolean param) {
//        view.setFullscreen(param);
    }

    @ReactProp(name = "controls")
    public void setPropControls(YouTubePlayerView view, @Nullable int param) {
//        view.setControls(param);
    }

    @ReactProp(name = "showFullscreenButton")
    public void setPropShowFullscreenButton(YouTubePlayerView view, @Nullable boolean param) {
//        view.setShowFullscreenButton(param);
    }
}
