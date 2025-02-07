import Plot from "react-plotly.js";

export default function BarGraph({
  data,
  color,
  title,
  roundText,
}: {
  data: Record<string, number>;
  color: string;
  title: string;
  roundText?: boolean;
}) {
  return (
    <Plot
      data={[
        {
          type: "bar",
          x: Object.keys(data),
          y: Object.values(data).map((val) => Number(val)),
          text: Object.values(data).map((val) =>
            String(
              roundText ? Math.round((val + Number.EPSILON) * 100) / 100 : val
            )
          ),
          marker: { color: color },
        },
      ]}
      layout={{
        title: { text: title },
        margin: {
          r: 0,
          l: 30,
        },
      }}
      style={{ width: "100%" }}
    />
  );
}
