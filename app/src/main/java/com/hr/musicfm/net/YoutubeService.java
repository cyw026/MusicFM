package com.hr.musicfm.net;

import java.util.List;
import java.util.Map;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;
import retrofit2.http.QueryMap;

import rx.Observable;

/**
 * Created by yewen on 2017/8/22.
 */

public interface YoutubeService {

    @GET("playlistItems?part=snippet&playlistId=PLFgquLnL59alxIWnf4ivu5bjPeHSlsUe9&key=AIzaSyBfaalvZeERdvx7PGDdoxi_WtbFNISxYJg")
    Call<PlaylistItemsBean> playlistItems(@Query("maxResults") int size);
}
