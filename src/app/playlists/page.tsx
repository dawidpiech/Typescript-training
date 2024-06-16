"use client";

// tsrafce
import React, { useState } from "react";
import PlaylistList from "./components/PlaylistList";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistDetails from "./components/PlaylistDetails";
import { mockPlaylists } from "../core/mocks/mockPlaylists";
import { Playlist } from "../core/types/Playlist";

type Props = {};

const PlaylistsPage = (props: Props) => {
  type Modes = "details" | "editor" | "creator";
  const [mode, setMode] = useState<Modes>("details");

  const playlists = mockPlaylists;
  const [selectedId, setSelectedId] = useState("234");
  const [selected, setSelected] = useState(mockPlaylists[1]);

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id)!);
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const savePlaylist = (draft: Playlist) => {
    setMode("details");
  };
  return (
    <div>
      <h1 className="text-4xl leading-loose">Playlists</h1>

      <div className="grid grid-cols-2 gap-7">
        <div>
          <PlaylistList
            playlists={playlists}
            onSelect={selectPlaylistById}
            selectedId={selectedId}
          />

          {/* <input type="text" value={selected.name} onKeyUp={e => {}} placki={}/> */}
        </div>
        <div>
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={} />
          )}

          {mode === "editor" && (
            <PlaylistEditor playlist={selected} onCancel={} onSave={} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
