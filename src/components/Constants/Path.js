let edges = {};
let items = 0;
let nodeList;
let count;

//receive data from Header-> Input field
export const addNode = (node) => {
  const res = node.toUpperCase(node.trim());

  if (!edges[res] && res.length > 0) {
    edges[res] = [];
  }
  items = Object.keys(edges).length;
};

// create a relationship btw two entities
export const addEdge = (start, end) => {
  edges[start].push(end);
};

//get all the nodes present on the list
export const getVertex = () => {
  return Object.keys(edges);
};

//here nodelist contains an array object for all the paths possible
export const getPath = () => {
  return nodeList;
};

export const printAllPaths = (start, end) => {
  nodeList = {};
  count = 0;
  let pathList = [];

  let isVisited = new Array(items);

  for (let i = 0; i < items; i++) {
    isVisited[i] = false;
  }

  pathList.push(start);
  printAllPathsUtil(start, end, isVisited, pathList);
};

const printAllPathsUtil = (current, destination, isVisited, localPathList) => {
  if (current == destination) {
    nodeList[count] = [...localPathList];
    count += 1;
    return;
  }

  isVisited[current] = true;

  for (let i = 0; i < edges[current].length; i++) {
    if (!isVisited[edges[current][i]]) {
      localPathList.push(edges[current][i]);
      printAllPathsUtil(
        edges[current][i],
        destination,
        isVisited,
        localPathList
      );

      localPathList.splice(localPathList.indexOf(edges[current][i]), 1);
    }
  }
};
