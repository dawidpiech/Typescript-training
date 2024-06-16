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

  // NOT STATE:
  // const playlists = mockPlaylists as Playlist[]; // GLOBALS!
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const [selectedId, setSelectedId] = useState<Playlist["id"]>();
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id));
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const savePlaylist = (draft: Playlist) => {
    // Immutable
    setPlaylists(playlists.map((p) => (p.id == draft.id ? draft : p)));

    setSelected(draft);
    setMode("details");
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();

    setPlaylists((prevState) => {
      console.log("potem");
      return [...prevState, draft];
    });

    console.log("najpierw");
    
    // Ile playlist się doda?
    // 3
    setPlaylists([...playlists, draft]); // 3 + 1
    setPlaylists([...playlists, draft]); // 3 + 1
    setPlaylists([...playlists, draft]); // 3 + 1

    setSelected(draft);
    setSelectedId(draft.id);
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
          <button
            className="bg-fuchsia-500 text-white px-5 py-2 mt-3 float-end"
            onClick={() => setMode("creator")}
          >
            Create New
          </button>
        </div>
        <div>
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}

          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={showDetails}
              onSave={savePlaylist}
            />
          )}

          {mode === "creator" && (
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
