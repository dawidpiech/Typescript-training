import React from "react";
import { Playlist } from "./Playlist";

type Props = {};

const playlist: Playlist = {
  id: "123",
  name: "Playlist 123",
  public: false,
  description: "Best playlist",
};

// type Playlist = typeof playlist;

const PlaylistDetails = (props: Props) => {
  return (
    <div>
      <div
        className="grid gap-5 mb-5"
        title={playlist.name}
        id={`playlist_${playlist.id}`}
      >
        {/* {null} {true} {false} {undefined} */}

        <div className="grid">
          <div className="font-semibold">Name</div>
          <div>{playlist.name}</div>
        </div>

        <div className="grid">
          <div className="font-semibold">Public</div>
          <div
            style={{
              color: playlist.public ? "red" : "green",
            }}
          >
            {playlist.public ? "Yes" : "No"}
          </div>
        </div>

        <div className="grid">
          <div className="font-semibold">Description</div>
          <div>{playlist.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
