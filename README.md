# `MERN`:_CMS_ - Not Production Ready
### _Trying to put it all together_
This is a work in progress with the aim of creating a _lightweight_ CMS around the MERN stack. I know there are others out there scouring google for resources on the subject, and I know there are a lot of resources out there. I do not intend for this to be a tutorial by any means. There are some really great ones below that I suggest you read and follow. I will try to add more as I come across them and note anything I found to be of importance. Feel free to fork, merge, download, or whatever you want with what is here. I'd be happy to hear if you have any suggestions as I am still trying to wrap my head around some of these technologies.

---
## `mernCommentBox`

Here's a thing to be aware of.  If you followed [bryantheastronaut](https://github.com/bryantheastronaut/mernCommentBox)'s tutorial for the comment box, you may wish to incorporate it into your app. In doing so you may notice that after you navigate away from a page with the chatbox using something like [`react-router`](https://reacttraining.com/react-router/), [`axios`](https://github.com/axios/axios) continues it's callback and attempts to `setState()` on an unmounted component (_CommentBox_), resulting in a warning every 2 seconds. to prevent this from happening, we need to `clearInterval()` in our `componentWillUnmount()` method. See below.

```javascript
//Here's where our app talks to capt. mongoDB of the starship axios
componentDidMount() {
  this.loadCommentsFromServer();
  this.setInterval = setInterval(this.loadCommentsFromServer, this.props.pollInterval);
}
//When we go somewhere else, we would like them to please STFU
componentWillUnmount() {
  this.setInterval && clearInterval(this.setInterval);
  this.setInterval = false;
}
```

### `backend/config/mock-default.json`

The file 'backend/config/mock-default.json' in this repository will need to be renamed 'default.json'. this file is created by [`FeathersJS`](https://feathersjs.com/) if you follow [Build a CRUD App Using React, Redux and FeathersJS](https://www.sitepoint.com/crud-app-react-redux-feathersjs/) below too, so if you are using that tutorial and following along with it, you can simply delete the file.

### MongoDB cloud service (yes, there is a free version)

I found it helpful to set up a cloud based mongoDB. I use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Others prefer [mLab](https://mlab.com/). Either works. Use the code below to achieve this. The benefit will be one less thing to set up and one less terminal running. Otherwise, be sure to download and install mongoDB if you don't have it (the free version is the [Community Server](https://www.mongodb.com/download-center?jmp=nav#community)). If you go this route, and you are new to MongoDb, save yourself a headache and read the [docs](https://docs.mongodb.com/?_ga=2.83508949.291315070.1507155837-1405832387.1507052608&_gac=1.117454331.1507256316.Cj0KCQjwsNfOBRCWARIsAGITapaNbkdgoTwA71oRmSmjgoTdOT2tnhCY530ogavTAbhajMTVS8ozfbAaAoDlEALw_wcB).

```javascript
{
  "host": "localhost",
  "port": 3030,
  "public": "../public/",
  "paginate": {
    "default": 50,
    "max": 50
  },
 "mongodb": "//<USERNAME>:<PASSWORD>@<CLUSTERNAME>\\
-shard-00-00-rbton.mongodb.net:27017,\\
<CLUSTERNAME>-shard-00-01-rbton.mongodb.net:27017,\\
<CLUSTERNAME>-shard-00-02-rbton.mongodb.net:27017\\
/test?ssl=true&replicaSet=<CLUSTERNAME>-shard-0&authSource=admin"
}
```
---
# `Contributing`
Please do.

Thanks.

-Have fun

---
## Sources
- [Build a CRUD App Using React, Redux and FeathersJS](https://www.sitepoint.com/crud-app-react-redux-feathersjs/)
- [A Guide for Building A React Redux CRUD App](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f)
- [A Tutorial on creating a MERN Stack App from the Facebook Comment React Tutorial](https://github.com/bryantheastronaut/mernCommentBox)
- [MERN Stack Tutorial With Example From Scratch](https://appdividend.com/2017/06/28/mern-stack-tutorial/)
- [Introducing the MEAN and MERN stacks](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack/)
- [mLab](https://mlab.com/)
- [mongoose](http://mongoosejs.com/)
- [React Docs](https://facebook.github.io/react/docs/hello-world.html)
- [FullStack React](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
- [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- [MongoDB docs](https://docs.mongodb.com/?_ga=2.83508949.291315070.1507155837-1405832387.1507052608&_gac=1.117454331.1507256316.Cj0KCQjwsNfOBRCWARIsAGITapaNbkdgoTwA71oRmSmjgoTdOT2tnhCY530ogavTAbhajMTVS8ozfbAaAoDlEALw_wcB)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
