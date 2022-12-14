import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("Videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes} 
          messages={messages}
          description={description}
          shares={shares}
           />
        )
        )}
      </div>
    </div>
  );
}

export default App;


// firebase init
// hosting 
// existing
// build
// npm run build
// firebase deploy
// y
