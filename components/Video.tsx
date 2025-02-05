const VideoComponent = ({ src }: { src: string }) => {
  return (
    <video controls className="h-full w-full" preload="auto">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
