"use client";
import CytoscapeComponent from "react-cytoscapejs";
import { getCameraItemsByName } from '@/utils/camerasData';

const CameraCytoscape: React.FunctionComponent<CameraCytoscapeProps> = (props: CameraCytoscapeProps) => {

  const cameraItems = getCameraItemsByName(props.cameraName) || [];

  // Convert Camera data to Cytoscape elements
  const elements = [
    { data: { id: "camera", label: props.cameraName } }, // Camera node
    ...cameraItems.map((item, index) => [
      { data: { id: `item-${index}`, label: item.NameParent } }, // CameraItem node
      { data: { source: "camera", target: `item-${index}` } }, // Edge from Camera to CameraItem
    ]).flat(),
  ];

  return (

    <div style={{ height: "600px", width: "100%" }}>
      <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "700px" }}
        layout={{ name: "grid" }} // You can change to 'circle', 'breadthfirst', etc.
        cy={(cy) => {
          cy.on("tap", "node", (evt) => {
            const nodeId = evt.target.id();
            console.log(`Clicked node: ${nodeId}`);
          });
        }}
        stylesheet={[
          {
            selector: "node",
            style: {
              content: "data(label)",
              "text-valign": "center",
              "text-halign": "center",
              "background-color": "#0074D9",
              color: "#fff",
              width: 500,
              height: 50,
              shape: "rectangle", // Set nodes to square
              "border-width": 2,
              "border-color": "#ccc",
            },
          },
          {
            selector: "edge",
            style: {
              width: 3,
              "line-color": "#ccc",
            },
          },
        ]}
      />
    </div>

  );
}

interface CameraCytoscapeProps {
  cameraName: string;
}

export default CameraCytoscape;