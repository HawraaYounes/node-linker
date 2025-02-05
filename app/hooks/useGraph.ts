import { useState } from 'react';
import {
  Node,
} from 'reactflow';

export default function useGraph() {
  const [nodes, setNodes] = useState<Node[]>([]);

  return {
    nodes,
  
  };
}