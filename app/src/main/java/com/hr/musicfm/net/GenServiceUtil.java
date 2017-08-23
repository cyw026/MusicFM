package com.hr.musicfm.net;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava.RxJavaCallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by yewen on 2017/8/22.
 */


public class GenServiceUtil {

    private static final String BASE_URL = "https://www.googleapis.com/youtube/v3/";

    private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder();


    private static Retrofit.Builder builder = new Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
            .addConverterFactory(GsonConverterFactory.create());

    private static Retrofit retrofit = builder.client(httpClient.build()).build();


    public static <S> S createService(Class<S> serviceClass) {
        return retrofit.create(serviceClass);
    }
}