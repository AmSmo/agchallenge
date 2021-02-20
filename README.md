Air Garage Challenge

Ranks Garages by worst to best based on location.. with some caveats.

To get this to work you will need a yelp api key.

Place that key in the base folder in a file called env.js

In that file Place
`module.exports = { API_KEY: "Bearer ______" }`
Where the `_____` is your yelp API key.

Once that is saved you can type `npm run airgarage` in the command line.

This will start up a node/express backend with a react frontend (not the prettiest but practical)

Two searches Available...
First is most relevant "Find Terrible Parking", so based on location.

Second is "from bottom" which is from the bottom of the list... which may not give you the best results since most of those only have a single review. May be a target based on wanting to increase popularity but also may not be in a popular location.
