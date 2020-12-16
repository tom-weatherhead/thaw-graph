// thaw-graph/src/main.ts

// See avoidwork's tiny-graph

// Class Node {
// 	// Key-value pairs.
// }

// Class Graph {
// 	// Nodes
// 	// Edges; directed graph.

// 	function getPathFromTo(a, b) {
// 		// Use breadth-first search in order to find the shortest path.
// 	}

// 	function getLongestAcyclicPath() {
// 	}

// 	function containsCycle_Helper(n, nodesInPath) {

// 		if (nodesInPath.contains(n)) {
// 			return true;
// 		}

// 		nodesInPath.push(n);

// 		// Depth-first search.

// 		// nodesInPath.children.forEach(ch => {

// 			// if (containsCycle_Helper(ch, nodesInPath)) {
// 				// return true;
// 			// }
// 		// });

// 		if (nodesInPath.children.any(ch => containsCycle_Helper(ch, nodesInPath))) {
// 			return true;
// 		}

// 		nodesInPath.pop();
// 		return false;
// 	}

// 	function containsCycle() {
// 		// Array.any() or Array.some() ?
// 		return nodesInGraph.any(n => containsCycle_Helper(n, []));
// 	}
// }

// ****

// For use in the abbey-library project, inspired by 'The Name of the Rose' (1986) via my Labyrinth projects (2013).

/*
class Graph<T> // or Graph<K, V> ?

type KeyType = number | string;
interface IEdge { from: KeyType; to: KeyType; };

public readonly nodes = new Record<KeyType, T>();
public readonly edges: IEdge[] = [];

public getNodeFromKey(key: KeyType): T { ... }
public addEdge(fromKey: KeyType, toKey: KeyType, bidirectional = false): boolean { ... }
findNeighbours(key: KeyType): KeyType[] { ... }
pathExists(fromKey: KeyType, toKey: KeyType): boolean { ... }
// findPath(fromKey: KeyType, toKey: KeyType): KeyType[] | undefined { ... }
findShortestPath(fromKey: KeyType, toKey: KeyType): KeyType[] | undefined { ... } // via breadth-first search
findLongestPath(): KeyType[] { ... } // via the two-step grasp-node-and-suspend-graph-from-it process
isAcyclic(): boolean { ... }

public static createRandomSpanningGraph(nodes: Record<KeyType, T>): Graph<T>
 */

export function sayHi(): string {
	return 'Hello, World!';
}
