// app/page.tsx
// "use client";
import ReactFlow, { Background, Controls } from "reactflow";
import { useActionState } from "react";
import GraphCanvas from "./components/GraphCanvas";
import NodesList from "./components/NodesList";
import { fetchEdges, fetchNodes } from "./actions/nodeFormAction";
import dynamic from 'next/dynamic'
import SidePanel from "./components/SidePanel";
import SSR from "./components/SSR";
 
// Dynamically import SidePanel with SSR disabled
// const SidePanel = dynamic(() => import("./components/SidePanel"), {
//   ssr: false,
// });

export  default function Home() {
  // const { nodes, edges } = useGraph();
  // console.log("nodes in page", nodes);
  // const [state, action] = useActionState(addNode, undefined);

// const nodes= await fetchNodes()
// const edges= await fetchEdges()

 
// const SidePanel = dynamic(() => import('./components/SidePanel'), { ssr: false })
  return (
    <div className="flex h-screen">
      
      <div className="flex-grow">
        <GraphCanvas />
        {/* <NodesList nodes={nodes}/> */}
      </div>
      <SSR />
    </div>
  );
}
