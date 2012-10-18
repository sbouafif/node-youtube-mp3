
var _ = require('underscore') // for some utility goodness
 , getmp3 = spawn('sh', [ 'getmp3.sh' ], {
  cwd: process.env.HOME + '/Workspace/youtube-mp3/sh',
  env:_.extend(process.env, { PATH: process.env.PATH + ':/usr/local/bin' })
});

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.get = function(req, res){
    

    res.render('index', { title: 'Get MP3 from youtube.com' });
};
