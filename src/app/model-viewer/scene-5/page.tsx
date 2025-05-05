import dynamic from "next/dynamic";

const Model = dynamic(() => import("@/components/model-viewer/Model"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function ModelViewer({ params }: { params: { id: string } }) {
  return (
    <Model
      glbSrc={`/assets/5_4_2025.glb`}
      layout="split"
      annotations={[
        {
          title: "Title",
          description: "Test",
          camPos: {
            x: -9.195697166159329e-12,
            y: -4.3615402270843776e-11,
            z: 8.95161205503274e-11,
          },
          lookAt: {
            x: -12.437318933458773,
            y: 7.100021852511969,
            z: -26.306989605896803,
          },
        },
        {
          title: "Title",
          description: "Test",
          camPos: {
            x: -9.195697166159329e-12,
            y: -4.3615402270843776e-11,
            z: 8.95161205503274e-11,
          },
          lookAt: {
            x: -29.776749982822547,
            y: -1.9356024529386666,
            z: 2.5322192826017407,
          },
        },
        {
          title: "Title",
          description: "Test",
          camPos: {
            x: -9.195697166159329e-12,
            y: -4.3615402270843776e-11,
            z: 8.95161205503274e-11,
          },
          lookAt: {
            x: -18.57962810284077,
            y: 1.177112042453919,
            z: 23.45351345381486,
          },
        },
        {
          title: "Title",
          description: "Test",
          camPos: {
            x: -9.195697166159329e-12,
            y: -4.3615402270843776e-11,
            z: 8.95161205503274e-11,
          },
          lookAt: {
            x: 27.18972077639111,
            y: 9.46391214660108,
            z: 8.314237604206356,
          },
        },
      ]}
    />
  );
}
