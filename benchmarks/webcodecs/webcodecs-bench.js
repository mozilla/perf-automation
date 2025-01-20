function showResults(results, title) {
  const container = document.getElementById("results");
  const table = document.createElement("table");
  const caption = table.createCaption();
  caption.textContent = title;
  const tHeader = table.createTHead();
  const headerRow = tHeader.insertRow(0);
  for (const columnNames of ["Test", "Value", "Unit"]) {
    const cell = headerRow.insertCell();
    cell.textContent = columnNames;
  }
  const tBody = table.createTBody();
  Object.entries(results).forEach(([name, result]) => {
    const row = tBody.insertRow();
    const testName = row.insertCell();
    testName.textContent = name;
    const testValue = row.insertCell();
    testValue.textContent = result.value;
    const testUnit = row.insertCell();
    testUnit.textContent = result.unit;
  });
  container.appendChild(table);
}

function sendResults(results) {
  let data = ["raptor-benchmark", "webcodecs", JSON.stringify(results)];
  window.postMessage(data, "*");
  window.sessionStorage.setItem("benchmark_results", JSON.stringify(data));
}

async function runTests(testcases) {
  document.getElementById("progress-bar").max = testcases.length;
  document.getElementById("progress-bar").value = 0;

  let testResults = {};
  for (let i = 0; i < testcases.length; i++) {
    console.assert(!testResults.hasOwnProperty(testcases[i].name));
    let results = await testcases[i].func();
    document.getElementById("progress-bar").value++;
    showResults(results, testcases[i].name);
    testResults[testcases[i].name] = results;
  }
  document.getElementById("in-progress").style.display = "none";
  sendResults(testResults);
}

async function startBenchmarks(delay = 0) {
  // testcases = [
  //  {
  //    name: "vp8 realtime encode",
  //    func: async function() {
  //      ...
  //      return {
  //        "...": { value: ..., unit: ... },
  //        "...": { value: ..., unit: ... },
  //        ...,
  //      };
  //    },
  //    ...
  //  },
  // ];
  let testcases = await loadTestCases();

  document.getElementById("run-tests").disabled = true;
  document.getElementById("in-progress").style.display = "inline";
  if (delay) {
    setTimeout(() => {
      runTests(testcases);
    }, delay);
  } else {
    runTests(testcases);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  if (location.search.includes("raptor")) {
    startBenchmarks(100);
    return;
  }

  document.getElementById("run-tests").addEventListener("click", function () {
    startBenchmarks(0);
  });
});

var loadTestsFuncs = [];

async function loadTestCases() {
  let testcases = [];
  for (const f of loadTestsFuncs) {
    testcases = testcases.concat(await f());
  }
  return testcases;
}

/* Public API */
// Add a function that loads testcases to the list of functions that will be
// called to load testcases. The added function should return an array of
// testcases that contains the following fields:
//  - name: the name of the test
//  - func: the async function that returns the tests
function addTestsLoader(f) {
  loadTestsFuncs.push(f);
}
