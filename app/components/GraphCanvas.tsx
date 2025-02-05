// src/components/GraphCanvas.tsx
import ReactFlow, { Controls, Background } from 'reactflow';
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
      </ReactFlow>
    </div>
  );
}