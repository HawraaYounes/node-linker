import { Node } from "reactflow";

export interface SidePanelProps {
    selectedNode: Node | '',
    setSelectedNode: (node: Node | '') => void
}

