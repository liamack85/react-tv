import { useState } from "react"; /**Create once usetState() is called */
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  /**<ShowDetails> takes a show as a prop. */
  const [selectedEpisode, setSelectedEpisode] =
    useState(); /**<ShowDetails> keeps the selected episode in a state variable. */
  if (!show) {
    /**If no show is provided, <ShowDetails> renders a message encouraging the user to select a show. */
    return (
      <p>Select a show to get started!</p>
    ); /**In react land, render means return */
  } /**This is a guard case */
  return (
    <div className="show-details">
      <EpisodeList /**If a show is provided, <ShowDetails> renders <EpisodeList> and <EpisodeDetails>. */
        name={show.name}
        episodes={
          show.episodes
        } /**<EpisodeList> and <EpisodeDetails> are provided the correct props. Read the source code of these components to figure out what props they expect! */
        selectedEpisode={
          selectedEpisode
        } /**When you are passing in a prop (from EpisodeList in this case) */
        setSelectedEpisode={
          setSelectedEpisode
        } /**The left side of the = must match up to the prop name */
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
