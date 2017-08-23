package com.hr.musicfm.net;

import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Created by yewen on 2017/8/23.
 */

public class PlaylistItemsBean {

    private String kind;
    private String etag;
    private String nextPageToken;
    private PageInfoBean pageInfo;
    private List<ItemsBean> items;

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public String getEtag() {
        return etag;
    }

    public void setEtag(String etag) {
        this.etag = etag;
    }

    public String getNextPageToken() {
        return nextPageToken;
    }

    public void setNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
    }

    public PageInfoBean getPageInfo() {
        return pageInfo;
    }

    public void setPageInfo(PageInfoBean pageInfo) {
        this.pageInfo = pageInfo;
    }

    public List<ItemsBean> getItems() {
        return items;
    }

    public void setItems(List<ItemsBean> items) {
        this.items = items;
    }

    public static class PageInfoBean {
        /**
         * totalResults : 200
         * resultsPerPage : 20
         */

        private int totalResults;
        private int resultsPerPage;

        public int getTotalResults() {
            return totalResults;
        }

        public void setTotalResults(int totalResults) {
            this.totalResults = totalResults;
        }

        public int getResultsPerPage() {
            return resultsPerPage;
        }

        public void setResultsPerPage(int resultsPerPage) {
            this.resultsPerPage = resultsPerPage;
        }
    }

    public static class ItemsBean {
        /**
         * kind : youtube#playlistItem
         * etag : "m2yskBQFythfE4irbTIeOgYYfBU/awPR7NqdY_hZ2OxDx2HjInS0LMY"
         * id : UExGZ3F1TG5MNTlhbHhJV25mNGl2dTVialBlSFNsc1VlOS5GMjBEMTBBRTVEN0RBMUFF
         * snippet : {"publishedAt":"2017-08-21T14:54:54.000Z","channelId":"UC-9-kyTW8ZkZNDHQJ6FgpwQ","title":"米津玄師 MV「ピースサイン」","description":"TVｱﾆﾒ「僕のヒーローアカデミア」オープニングテーマ\n\n7th Single　「ピースサイン」　2017.6.21 RELEASE\nhttp://reissuerecords.net/special/peacesign/\n\n01.  ピースサイン\n02.  Neighbourhood　\n03.  ゆめくいしょうじょ\n04.  ピースサイン（Instrumental）\n\n\n▼商品形態\nピース盤/初回限定 (CD+DVD+ピースリング) ¥1,900(tax out)\nヒーロー盤/初回限定 (CD+赤透明ｼﾞｭｴﾙｹｰｽ+TCGｶｰﾄﾞ) ¥1,500(tax out)\n通常盤  CD ¥1,200(tax out)\n\nDVD：「僕のヒーローアカデミア」ﾉﾝｸﾚｼﾞｯﾄOPﾑｰﾋﾞｰ\nTCGｽﾍﾟｼｬﾙｶｰﾄﾞ：『僕のヒーローアカデミア』TCGｽﾍﾟｼｬﾙｶｰﾄﾞ 米津玄師/ピースサインEDITION\n\n▼初回特典（全形態共通）\n\u201d米津玄師 2017 TOUR / fogbound\u201d 最速先行抽選応募ｼﾘｱﾙﾅﾝﾊﾞｰ封入\n応募期間：2017.6.20(tue) - 6.25(sun)\n\n▼リリース特設サイト\nhttp://reissuerecords.net/special/peacesign/\n\n\nHP     http://reissuerecords.net\nTwitter  　https://twitter.com/hachi_08\nOFFICIAL CHANNEL     http://www.youtube.com/user/08yakari","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/hqdefault.jpg","width":480,"height":360},"standard":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/sddefault.jpg","width":640,"height":480},"maxres":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/maxresdefault.jpg","width":1280,"height":720}},"channelTitle":"Music","playlistId":"PLFgquLnL59alxIWnf4ivu5bjPeHSlsUe9","position":0,"resourceId":{"kind":"youtube#video","videoId":"9aJVr5tTTWk"}}
         */

        private String kind;
        private String etag;
        private String id;
        private SnippetBean snippet;

        public String getKind() {
            return kind;
        }

        public void setKind(String kind) {
            this.kind = kind;
        }

        public String getEtag() {
            return etag;
        }

        public void setEtag(String etag) {
            this.etag = etag;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public SnippetBean getSnippet() {
            return snippet;
        }

        public void setSnippet(SnippetBean snippet) {
            this.snippet = snippet;
        }

        public static class SnippetBean {
            /**
             * publishedAt : 2017-08-21T14:54:54.000Z
             * channelId : UC-9-kyTW8ZkZNDHQJ6FgpwQ
             * title : 米津玄師 MV「ピースサイン」
             * description : TVｱﾆﾒ「僕のヒーローアカデミア」オープニングテーマ

             7th Single　「ピースサイン」　2017.6.21 RELEASE
             http://reissuerecords.net/special/peacesign/

             01.  ピースサイン
             02.  Neighbourhood　
             03.  ゆめくいしょうじょ
             04.  ピースサイン（Instrumental）


             ▼商品形態
             ピース盤/初回限定 (CD+DVD+ピースリング) ¥1,900(tax out)
             ヒーロー盤/初回限定 (CD+赤透明ｼﾞｭｴﾙｹｰｽ+TCGｶｰﾄﾞ) ¥1,500(tax out)
             通常盤  CD ¥1,200(tax out)

             DVD：「僕のヒーローアカデミア」ﾉﾝｸﾚｼﾞｯﾄOPﾑｰﾋﾞｰ
             TCGｽﾍﾟｼｬﾙｶｰﾄﾞ：『僕のヒーローアカデミア』TCGｽﾍﾟｼｬﾙｶｰﾄﾞ 米津玄師/ピースサインEDITION

             ▼初回特典（全形態共通）
             ”米津玄師 2017 TOUR / fogbound” 最速先行抽選応募ｼﾘｱﾙﾅﾝﾊﾞｰ封入
             応募期間：2017.6.20(tue) - 6.25(sun)

             ▼リリース特設サイト
             http://reissuerecords.net/special/peacesign/


             HP     http://reissuerecords.net
             Twitter  　https://twitter.com/hachi_08
             OFFICIAL CHANNEL     http://www.youtube.com/user/08yakari
             * thumbnails : {"default":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/hqdefault.jpg","width":480,"height":360},"standard":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/sddefault.jpg","width":640,"height":480},"maxres":{"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/maxresdefault.jpg","width":1280,"height":720}}
             * channelTitle : Music
             * playlistId : PLFgquLnL59alxIWnf4ivu5bjPeHSlsUe9
             * position : 0
             * resourceId : {"kind":"youtube#video","videoId":"9aJVr5tTTWk"}
             */

            private String publishedAt;
            private String channelId;
            private String title;
            private String description;
            private ThumbnailsBean thumbnails;
            private String channelTitle;
            private String playlistId;
            private int position;
            private ResourceIdBean resourceId;

            public String getPublishedAt() {
                return publishedAt;
            }

            public void setPublishedAt(String publishedAt) {
                this.publishedAt = publishedAt;
            }

            public String getChannelId() {
                return channelId;
            }

            public void setChannelId(String channelId) {
                this.channelId = channelId;
            }

            public String getTitle() {
                return title;
            }

            public void setTitle(String title) {
                this.title = title;
            }

            public String getDescription() {
                return description;
            }

            public void setDescription(String description) {
                this.description = description;
            }

            public ThumbnailsBean getThumbnails() {
                return thumbnails;
            }

            public void setThumbnails(ThumbnailsBean thumbnails) {
                this.thumbnails = thumbnails;
            }

            public String getChannelTitle() {
                return channelTitle;
            }

            public void setChannelTitle(String channelTitle) {
                this.channelTitle = channelTitle;
            }

            public String getPlaylistId() {
                return playlistId;
            }

            public void setPlaylistId(String playlistId) {
                this.playlistId = playlistId;
            }

            public int getPosition() {
                return position;
            }

            public void setPosition(int position) {
                this.position = position;
            }

            public ResourceIdBean getResourceId() {
                return resourceId;
            }

            public void setResourceId(ResourceIdBean resourceId) {
                this.resourceId = resourceId;
            }

            public static class ThumbnailsBean {
                /**
                 * default : {"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/default.jpg","width":120,"height":90}
                 * medium : {"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/mqdefault.jpg","width":320,"height":180}
                 * high : {"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/hqdefault.jpg","width":480,"height":360}
                 * standard : {"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/sddefault.jpg","width":640,"height":480}
                 * maxres : {"url":"https://i.ytimg.com/vi/9aJVr5tTTWk/maxresdefault.jpg","width":1280,"height":720}
                 */

                @SerializedName("default")
                private DefaultBean defaultX;
                private MediumBean medium;
                private HighBean high;
                private StandardBean standard;
                private MaxresBean maxres;

                public DefaultBean getDefaultX() {
                    return defaultX;
                }

                public void setDefaultX(DefaultBean defaultX) {
                    this.defaultX = defaultX;
                }

                public MediumBean getMedium() {
                    return medium;
                }

                public void setMedium(MediumBean medium) {
                    this.medium = medium;
                }

                public HighBean getHigh() {
                    return high;
                }

                public void setHigh(HighBean high) {
                    this.high = high;
                }

                public StandardBean getStandard() {
                    return standard;
                }

                public void setStandard(StandardBean standard) {
                    this.standard = standard;
                }

                public MaxresBean getMaxres() {
                    return maxres;
                }

                public void setMaxres(MaxresBean maxres) {
                    this.maxres = maxres;
                }

                public static class DefaultBean {
                    /**
                     * url : https://i.ytimg.com/vi/9aJVr5tTTWk/default.jpg
                     * width : 120
                     * height : 90
                     */

                    private String url;
                    private int width;
                    private int height;

                    public String getUrl() {
                        return url;
                    }

                    public void setUrl(String url) {
                        this.url = url;
                    }

                    public int getWidth() {
                        return width;
                    }

                    public void setWidth(int width) {
                        this.width = width;
                    }

                    public int getHeight() {
                        return height;
                    }

                    public void setHeight(int height) {
                        this.height = height;
                    }
                }

                public static class MediumBean {
                    /**
                     * url : https://i.ytimg.com/vi/9aJVr5tTTWk/mqdefault.jpg
                     * width : 320
                     * height : 180
                     */

                    private String url;
                    private int width;
                    private int height;

                    public String getUrl() {
                        return url;
                    }

                    public void setUrl(String url) {
                        this.url = url;
                    }

                    public int getWidth() {
                        return width;
                    }

                    public void setWidth(int width) {
                        this.width = width;
                    }

                    public int getHeight() {
                        return height;
                    }

                    public void setHeight(int height) {
                        this.height = height;
                    }
                }

                public static class HighBean {
                    /**
                     * url : https://i.ytimg.com/vi/9aJVr5tTTWk/hqdefault.jpg
                     * width : 480
                     * height : 360
                     */

                    private String url;
                    private int width;
                    private int height;

                    public String getUrl() {
                        return url;
                    }

                    public void setUrl(String url) {
                        this.url = url;
                    }

                    public int getWidth() {
                        return width;
                    }

                    public void setWidth(int width) {
                        this.width = width;
                    }

                    public int getHeight() {
                        return height;
                    }

                    public void setHeight(int height) {
                        this.height = height;
                    }
                }

                public static class StandardBean {
                    /**
                     * url : https://i.ytimg.com/vi/9aJVr5tTTWk/sddefault.jpg
                     * width : 640
                     * height : 480
                     */

                    private String url;
                    private int width;
                    private int height;

                    public String getUrl() {
                        return url;
                    }

                    public void setUrl(String url) {
                        this.url = url;
                    }

                    public int getWidth() {
                        return width;
                    }

                    public void setWidth(int width) {
                        this.width = width;
                    }

                    public int getHeight() {
                        return height;
                    }

                    public void setHeight(int height) {
                        this.height = height;
                    }
                }

                public static class MaxresBean {
                    /**
                     * url : https://i.ytimg.com/vi/9aJVr5tTTWk/maxresdefault.jpg
                     * width : 1280
                     * height : 720
                     */

                    private String url;
                    private int width;
                    private int height;

                    public String getUrl() {
                        return url;
                    }

                    public void setUrl(String url) {
                        this.url = url;
                    }

                    public int getWidth() {
                        return width;
                    }

                    public void setWidth(int width) {
                        this.width = width;
                    }

                    public int getHeight() {
                        return height;
                    }

                    public void setHeight(int height) {
                        this.height = height;
                    }
                }
            }

            public static class ResourceIdBean {
                /**
                 * kind : youtube#video
                 * videoId : 9aJVr5tTTWk
                 */

                private String kind;
                private String videoId;

                public String getKind() {
                    return kind;
                }

                public void setKind(String kind) {
                    this.kind = kind;
                }

                public String getVideoId() {
                    return videoId;
                }

                public void setVideoId(String videoId) {
                    this.videoId = videoId;
                }
            }
        }
    }
}