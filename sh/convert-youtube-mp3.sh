#!/bin/sh
#IFS=$'\n'
echo $1
url=$1
video=`youtube-dl -o ../tmp/%\(title\)s.%\(ext\)s $url`
echo $video
ffmpeg -b 192k -i $video ${video.mp3}
#rm $video
