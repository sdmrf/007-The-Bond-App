class SearchUsername {
    private username: string;

    constructor(username: string) {
        this.username = username;
        this.lookup();
    }

    private lookup() {
        try {
            this.lookupInstagram();
            this.lookupTwitter();
            this.lookupFacebook();
            this.lookupYoutube();
            this.lookupSnapchat();
            this.lookupSpotify();
            this.lookupPinterest();
            this.lookupReddit();
            this.lookupTinder();
            this.lookupGithub();
            this.lookupLinkedin();
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to one or more platforms.`);
        }
    }

    private lookupInstagram() {
        try {
            const instagramUrl = `https://www.instagram.com/${this.username}`;
            this.printUrl(instagramUrl, "Instagram");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Instagram.`);
        }
    }

    private lookupTwitter() {
        try {
            const twitterUrl = `https://www.x.com/${this.username}/`;
            this.printUrl(twitterUrl, "Twitter");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Twitter.`);
        }
    }

    private lookupFacebook() {
        try {
            const facebookUrl = `https://www.facebook.com/${this.username}/`;
            this.printUrl(facebookUrl, "Facebook");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Facebook.`);
        }
    }

    private lookupYoutube() {
        try {
            const youtubeUrl = `https://www.youtube.com/${this.username}/`;
            this.printUrl(youtubeUrl, "Youtube");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Youtube.`);
        }
    }

    private lookupSnapchat() {
        try {
            const snapchatUrl = `https://story.snapchat.com/@${this.username}/`;
            this.printUrl(snapchatUrl, "Snapchat");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Snapchat.`);
        }
    }

    private lookupSpotify() {
        try {
            const spotifyUrl = `https://open.spotify.com/user/${this.username}/`;
            this.printUrl(spotifyUrl, "Spotify");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Spotify.`);
        }
    }

    private lookupPinterest() {
        try {
            const pinterestUrl = `https://www.pinterest.com/${this.username}/`;
            this.printUrl(pinterestUrl, "Pinterest");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Pinterest.`);
        }
    }

    private lookupReddit() {
        try {
            const redditUrl = `https://www.reddit.com/${this.username}/`;
            this.printUrl(redditUrl, "Reddit");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Reddit.`);
        }
    }

    private lookupTinder() {
        try {
            const tinderUrl = `https://www.tinder.com/@${this.username}/`;
            this.printUrl(tinderUrl, "Tinder");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Tinder.`);
        }
    }

    private lookupGithub() {
        try {
            const githubUrl = `https://www.github.com/${this.username}/`;
            this.printUrl(githubUrl, "Github");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Github.`);
        }
    }

    private lookupLinkedin() {
        try {
            const linkedinUrl = `https://www.linkedin.com/${this.username}/`;
            this.printUrl(linkedinUrl, "Linkedin");
        } catch (error) {
            console.error(`Error: ${error}. Unable to make a request to Linkedin.`);
        }
    }

    private printUrl(url: string, platform: string) {
        console.log(`Link for ${platform}: ${url}`);
    }
}

const PlatformsSearch = async ({ username }: { username: string }) => {
    new SearchUsername(username);    
};

export default PlatformsSearch;
