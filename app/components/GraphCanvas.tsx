"use client"
import ReactFlow, { Controls, Background, MiniMap, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import useGraph from '../hooks/useGraph';

export default function GraphCanvas({nodes}:{nodes:Node[]}) {
   

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