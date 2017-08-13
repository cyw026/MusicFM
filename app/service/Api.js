//playlistId=PLFgquLnL59alxIWnf4ivu5bjPeHSlsUe9&key={YOUR_API_KEY}

const convertRequestBodyToFormUrlEncoded = (data) => {
    const bodyKeys = Object.keys(data);
    const str = [];
    for (let i = 0; i < bodyKeys.length; i += 1) {
        const thisKey = bodyKeys[i];
        const thisValue = data[thisKey];
        str.push(`${encodeURIComponent(thisKey)}=${encodeURIComponent(thisValue)}`);
    }
    return str.join('&');
};

const config = {
    API_KEY: "AIzaSyBfaalvZeERdvx7PGDdoxi_WtbFNISxYJg"
};

class gapi {

    BaseURL = 'https://www.googleapis.com';

    playlistItems(playlistId) {
        let headers = new Headers({
            "Content-Type": "application/json;"
        });

        return fetch(`${this.BaseURL}/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLFgquLnL59alxIWnf4ivu5bjPeHSlsUe9&key=AIzaSyBfaalvZeERdvx7PGDdoxi_WtbFNISxYJg`, {
                method: "GET",
                headers: headers,
            }).then(res => {
                if (res.status == 200)
                    return res.json();
                else throw new Error('Something went wrong on api server!');
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                console.error('playlistItems err:' + JSON.stringify(err))
            });
    }
}

export default new gapi();