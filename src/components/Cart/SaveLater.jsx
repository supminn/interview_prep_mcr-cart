import React from "react";
import { useData } from "../../context/DataProvider";
import SavedItem from "./SavedItem";

export default function SaveLater() {
  const {
    state: { saveLater },
  } = useData();

  return (
    saveLater.length > 0 && (
      <div className="saved-container">
        <h3>Saved for Later ({saveLater.length})</h3>
        {saveLater.map((item) => (
          <SavedItem key={item.id} item={item} />
        ))}
      </div>
    )
  );
}
