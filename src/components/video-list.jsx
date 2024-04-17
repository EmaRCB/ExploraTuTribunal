const VideoList = ({title, children}) => {
    const videos = children ? children : <p>No hay videos</p>;

    return (<div>
        <h2>{title}</h2>
        {videos}
    </div>);
};

export default VideoList;