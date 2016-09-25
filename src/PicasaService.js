import $ from "jquery";
const picasaApi = '//picasaweb.google.com/data/feed/api/user';

export function fetchGalleryList(username) {
            return new Promise((resolve, reject)=>{
                  /*var options = {
                        thumbSize: 320,
                        thumbCrop: false,
                        imageSize: 1024,
                  };*/

                  var url = picasaApi + '/' + username + '?alt=json&kind=album&access=public';
                  $.get(url, (result)=>{
                        var galleryList = parseAlbumList(result);
                        resolve(galleryList);
                  });
            });
      }

export function fetchImageFromGallery(username, albumid) {
            return new Promise((resolve, reject)=>{
                  var options = {
                        thumbSize: 1024,
                        thumbCrop: false,
                        imageSize: 1024,
                  };


                  var url = picasaApi + '/' + username + '/album/' + albumid
                        + '?alt=json&kind=photo&thumbsize=' + options.thumbSize + (options.thumbCrop ? 'c' : 'u') + '&start-index=1';

                  $.get(url, (result)=>{
                        var gallery = parseImageFromGallery(result);
                        resolve(gallery);
                  });

            });
      }

function parseAlbumList(response) {
      // console.log(response);
      var feed = response.feed;
      var gallerylist = {
            author: feed.gphoto$nickname.$t,
            thumbnail: feed.gphoto$thumbnail.$t,
            userid: feed.gphoto$user.$t,
            gallerys: []
      };

      gallerylist.gallerys = feed.entry.map(parseGalleryHeader);

      return gallerylist;
}

function parseGalleryHeader(feed) {
      return {
            albumid: feed.gphoto$id.$t,
            author: feed.gphoto$nickname.$t,
            title: feed.title.$t,

            location: feed.gphoto$location.$t,
            albumCover: (feed.media$group) ? (feed.media$group.media$thumbnail[0].url) : undefined,
            numphotos: parseInt(feed.gphoto$numphotos.$t, 10),
      };
}

function parseImageFromGallery(response) {
      var feed = response.feed;
      var galObj = parseGalleryHeader(feed);
      galObj.subtitle = feed.subtitle.$t;

      galObj.photos = feed.entry.map((singleImage) => {
            // console.log(singleImage);
            var thumbnail = singleImage.media$group.media$thumbnail[0];
            var actualImage = singleImage.media$group.media$content[0];
            var actualImageUrl = actualImage.url;

            var pathSpilt = splitUrl(actualImageUrl);
            // var pathspilt = actualImageUrl.split(/\/{1}/);
            // var baseurl = pathspilt.slice(0,1)+'//'+pathspilt.slice(2,pathspilt.length-1).join('/')+'/';
            // var filename = pathspilt[pathspilt.length-1];
            var imageAtDesiredSize = pathSpilt[0] + 's' + 1024 + '/' + pathSpilt[1];

            return {
                  thumbnail: {
                        url: thumbnail.url,
                        width: thumbnail.width,
                        height: thumbnail.height,
                  },
                  image: {
                        url: imageAtDesiredSize,
                  },
                  title: singleImage.summary.$t,
                  info: {
                        width: singleImage.gphoto$width.$t,
                        height: singleImage.gphoto$height.$t,
                  }
            };
      });

      return galObj;
}

function splitUrl(url, index=1) {
      var pathspilt = url.split(/\/{1}/);
      var baseurl = pathspilt.slice(0, 1) + '//' + pathspilt.slice(2, pathspilt.length - index).join('/') + '/';
      var filename = pathspilt[pathspilt.length - 1];
      return [baseurl, filename];
}

export function getImageUrl(url, size = 1024, crop = false) {
      var pathSpilt = splitUrl(url, 2);
      var imageAtDesiredSize = pathSpilt[0] + 's' + size + (crop ? '-c' : '') + '/' + pathSpilt[1];
      return imageAtDesiredSize;
}
