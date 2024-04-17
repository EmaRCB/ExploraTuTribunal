const VideoItem = ({title, description, duration, uploadDate}) => {
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60);

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <span>{minutes}:{seconds}</span>
                <span>{uploadDate.toLocaleDateString()}</span>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default VideoItem;