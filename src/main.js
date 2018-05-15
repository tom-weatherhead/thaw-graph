// thaw-graph.js

// See avoidwork's tiny-graph

Class Node {
	// Key-value pairs.
}

Class Graph {
	// Nodes
	// Edges; directed graph.

	function getPathFromTo(a, b) {
		// Use breadth-first search in order to find the shortest path.
	}
	
	function getLongestAcyclicPath() {
	}

	function containsCycle_Helper(n, nodesInPath) {
		
		if (nodesInPath.contains(n)) {
			return true;
		}

		nodesInPath.push(n);
		
		// Depth-first search.

		// nodesInPath.children.forEach(ch => {
			
			// if (containsCycle_Helper(ch, nodesInPath)) {
				// return true;
			// }
		// });
		
		if (nodesInPath.children.any(ch => containsCycle_Helper(ch, nodesInPath))) {
			return true;
		}

		nodesInPath.pop();
		return false;
	}

	function containsCycle() {
		// Array.any() or Array.some() ?
		return nodesInGraph.any(n => containsCycle_Helper(n, []));
	}
}
