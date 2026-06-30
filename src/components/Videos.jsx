import { Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  if (direction === 'column') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {videos.map((item, idx) => (
          <Box key={idx} sx={{ width: '100%' }}>
            {item.id?.videoId && <VideoCard video={item} />}
            {item.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Box>
    );
  }

  // split videos into two arrays: one for video items and one for channel items
  const videoItems = videos.filter(item => item.id?.videoId);
  const channelItems = videos.filter(item => item.id?.channelId);

  return (
    <Box>
      {/* channels in a row */}
      {channelItems.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          {channelItems.map((item, idx) => (
            <ChannelCard key={idx} channelDetail={item} />
          ))}
        </Box>
      )}

      {/* Videos in a grid */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 2,
      }}>
        {videoItems.map((item, idx) => (
          <VideoCard key={idx} video={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Videos;