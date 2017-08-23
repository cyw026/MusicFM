package com.hr.musicfm;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

/**
 * A placeholder fragment containing a simple view.
 */
public class HomeActivityFragment extends Fragment {

    public HomeActivityFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_home, container, false);
    }

    public class QuickAdapter extends BaseQuickAdapter<Status, BaseViewHolder> {
        public QuickAdapter() {
            super(R.layout.tweet, DataServer.getSampleData());
        }

        @Override
        protected void convert(BaseViewHolder viewHolder, Status item) {
            viewHolder.setText(R.id.tweetName, item.getUserName())
                    .setText(R.id.tweetText, item.getText())
                    .setText(R.id.tweetDate, item.getCreatedAt())
                    .setVisible(R.id.tweetRT, item.isRetweet())
                    .linkify(R.id.tweetText);
            Glide.with(mContext).load(item.getUserAvatar()).crossFade().into((ImageView) viewHolder.getView(R.id.iv));
        }
    }
}
