import Plot from "react-plotly.js";

export default function MessageRanking({
  data,
}: {
  data: Record<"texts" | "image" | "video", Record<string, number>>;
}) {
  return (
    <Plot
      data={[
        {
          type: "bar",
          name: "Texts",
          x: Object.keys(data.texts),
          y: Object.values(data.texts).map((val) => Number(val)),
          marker: { color: "#4287f5" },
        },
        {
          type: "bar",
          name: "Images",
          x: Object.keys(data.image),
          y: Object.values(data.image).map((val) => Number(val)),
          marker: { color: "#ffbe54" },
        },
        {
          type: "bar",
          name: "Videos",
          x: Object.keys(data.video),
          y: Object.values(data.video).map((val) => Number(val)),
          marker: { color: "#5cfaa3" },
        },
      ]}
      layout={{
        title: { text: "Total Messages Ranking" },
        barmode: "stack", // Enables stacking
        margin: {
          r: 0,
          l: 30,
        },
      }}
      style={{ width: "100%" }}
    />
  );
}
