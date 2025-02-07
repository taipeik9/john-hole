import Plot from "react-plotly.js";

export default function HahasSent({ data }: { data: Record<string, number> }) {
  return (
    <Plot
      data={[
        {
          type: "bar",
          x: Object.keys(data),
          y: Object.values(data).map((val) => Number(val)),
          text: Object.values(data).map((val) => String(val)),
          marker: { color: "#ff94f7" },
        },
      ]}
      layout={{
        title: { text: "Hahas Sent" },
        margin: {
          r: 0,
          l: 30,
        },
      }}
      style={{ width: "100%" }}
    />
  );
}
