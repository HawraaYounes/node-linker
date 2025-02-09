// app/page.tsx
// "use client";
"use server"
import ReactFlow, { Background, Controls } from "reactflow";
import useGraph from "./hooks/useGraph";
import { useActionState } from "react";
import SidePanel from "./components/SidePanel";
import GraphCanvas from "./components/GraphCanvas";
import NodesList from "./components/NodesList";
import { fetchEdges, fetchNodes } from "./actions/nodeFormAction";

// Dynamically import SidePanel with SSR disabled
// const SidePanel = dynamic(() => import("./components/SidePanel"), {
//   ssr: false,
// });

export  default async function Home() {
  // const { nodes, edges } = useGraph();
  // console.log("nodes in page", nodes);
  // const [state, action] = useActionState(addNode, undefined);

// const nodes= await fetchNodes()
// const edges= await fetchEdges()
const nodes = await fetchNodes();
const edges = await fetchEdges();
 console.log("nodes in page", nodes);
  return (
    <div className="flex h-screen">
      <div className="flex-grow">
        <GraphCanvas nodes={nodes}/>
        {/* <NodesList nodes={nodes}/> */}
      </div>
      <SidePanel />
    </div>
  );
}
