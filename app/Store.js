
import { action, computed, observable, extendObservable } from 'mobx';
import firebase from './firebase';
import take from 'lodash/take';
import gapi from './service/Api';

// firebase.initializeApp({
//     databaseURL: 'https://hacker-news.firebaseio.com'
// });

const N_STORIES = 30,
      LANG_API_KEY = 'AIzaSyCSE5mekK1XxfDMQde8bywlaOMIdN5L7ug';

class Store {
    @observable stories = observable.map();
    @observable items = observable.map();
    @observable storyTypes = [
        {name: 'Top', value: 'topstories'},
        {name: 'Ask HN', value: 'askstories'},
        {name: 'Show HN', value: 'showstories'},
        {name: 'Jobs', value: 'jobstories'}
    ];
    @observable alreadyListening = observable.map();
    @observable _navigationState = {
        index: 0,
        routes: [
            {key: 'topstories', type: 'storylist'}
        ]
    };
    @observable user = {
        username: null,
        loggedIn: false,
        actionAfterLogin: false,
        auth: null
    };
    @observable playlistItemsRes = {

    };

    @computed get currentRoute() {
        return this._navigationState.routes[this._navigationState.index];
    }

    @computed get selectedStoryOption() {
        const { key } = this.currentRoute;

        return this.storyTypes.find(
            ({ name, value }) => value === key
        );
    }

    @computed get navigationState() {
        return {
            index: this._navigationState.index,
            routes: this._navigationState.routes.slice()
        };
    }

    @action navigateBack() {
        this._navigationState.index -= 1;
        this._navigationState.routes.pop();
    }

    @action listenForStories(storyType) {
        if (!this.alreadyListening.get(storyType)) {
            this.alreadyListening.set(storyType, true);

            firebase.database()
                    .ref(`v0/${storyType}`)
                    .on('value', snapshot => {
                        const ids = take(snapshot.val(), N_STORIES);

                        this.updateStories(storyType, ids);
                        ids.forEach(id => this.listenToStory(id));
                    })
        }
    }

    @action updateStories(storyType, ids) {
        this.stories.set(storyType, ids);
    }

    @action listenToStory(id) {
        if (!this.alreadyListening.get(id)) {
            this.alreadyListening.set(id, true);

            firebase.database()
                    .ref(`v0/item/${id}`)
                    .on('value', snapshot => {
                        this.updateItem(id, snapshot.val());
                    });
        }
    }

    @action updateItem(id, val) {
        val.sentiment = {fetched: false};
        this.items.set(id, val);
    }

    @action loadItem(id) {
        firebase.database()
                .ref(`v0/item/${id}`)
                .once('value', snapshot => {
                    const val = snapshot.val();

                    this.updateItem(id, val);
                    this.analyzeSentiment(id);

                    if (val.kids) {
                        val.kids.forEach(id => this.loadItem(id));
                    }
                });
    }

    @action pickStoryType({ value }) {
        this.listenForStories(value);

        this._navigationState.routes.push({
            key: value,
            type: 'storylist'
        });
        this._navigationState.index += 1;
    }

    @action openStory(id) {
        this._navigationState.routes.push({
            key: String(id),
            id: id,
            type: 'story'
        });
        this._navigationState.index += 1;

        // recursively walk through kids
        this.loadItem(id);
    }

    @action showLoginForm() {
        this._navigationState.routes.push({
            key: 'loginform',
            type: 'loginform'
        });
        this._navigationState.index += 1;
    }

    @action register() {
      firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(rst => {
        console.log(rst)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
    }

    @action login(username, password) {
        return new Promise((resolve, reject) => {

          //   firebase.auth()
          //   .createUserWithEmailAndPassword(username, password)
          //   .then(rst => {
          //     console.log(rst)
          //   })
          //   .catch(function(error) {
          //     // Handle Errors here.
          //     var errorCode = error.code;
          //     var errorMessage = error.message;
          //     // ...
          //     console.log(errorMessage)
          //   });
          // });

            firebase.auth()
            .signInWithEmailAndPassword(username, password)
            .then(rst => {
              console.log('signInWithEmailAndPassword');
              resolve(rst);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
          });

    }


    @action playlistItems() {
        return new Promise((resolve, reject) => {
            gapi.playlistItems('PLFgquLnL59alxIWnf4ivu5bjPeHSlsUe9')
                .then(res => {
                    this.playlistItemsRes = res;
                    resolve(res)
                });
        });
    }
}

export default new Store();