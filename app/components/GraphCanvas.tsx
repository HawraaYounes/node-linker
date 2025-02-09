"use server"
import ReactFlow, { Controls, Background, MiniMap, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { fetchEdges, fetchNodes } from '../actions/nodeFormAction';
import NodesList from './NodesList';

export default async function GraphCanvas() {
   
const nodes = await fetchNodes();
const edges = await fetchEdges();
console.log("Nodes in graph canvas",nodes)
  return (
    <div className="flex-1 h-screen">
     <NodesList initialNodes={nodes} initialEdges={edges} />
    </div>
  );
}