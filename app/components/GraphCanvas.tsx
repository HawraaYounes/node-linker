"use client"
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import useGraph from '../hooks/useGraph';

export default function GraphCanvas() {
    const {
        nodes,
      } = useGraph();

  return (
    <div className="flex-1 h-screen">
      <ReactFlow
        nodes={nodes}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}