const VideoData = require('../../../db/schemas/youtubeDataSchema');
const VideoDataFormat = ( videoId,channelId,channelUrl,title,uploader,dataUpload,thumbnail,subject,date)=>{
    let dateFixed = `${dataUpload.substring(0,4)}-${dataUpload.substring(4,6)}-${dataUpload.substring(6,8)}`
    let videoData = new VideoData({
        videoId,
        channelId,
        channelUrl,
        title,
        uploader,
        dataUpload: dateFixed,
        thumbnail,
        subject,
        date: dateFixed
    });
    console.log(`Salvando video id:${videoData.videoId} no banco de dados`)
    videoData.save()
    .catch(()=>{
        console.log(`Video id:${videoData.videoId} já salvo no banco de dados`)
    })
}
module.exports = VideoDataFormat