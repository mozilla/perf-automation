var jobs = [
  { benchmark: 'fannkuch' },
  { benchmark: 'fasta' },
  { benchmark: 'linpack_float.c' },
  { benchmark: 'skinning' },
  { benchmark: 'box2d' },
  { benchmark: 'bullet' },
  { benchmark: 'lua_binarytrees.c' },
  { benchmark: 'zlib.c' },
];

var TOTAL_REPS = 1;

function run_embenchen() {
    return new Promise((resolve, reject) => {
        var curr = 0;

        function runJob() {
            var job = jobs[curr++];
            if (!job) {
                resolve();
                return;
            }

            console.log(`Embenchen: running ${job.benchmark}`);

            // Run the job the specified number of times
            var reps = 0;
            var results = [];

            function nextBenchmark() {
                var runtime = results.reduce((acc, msg) => acc + msg.runtime, 0) / TOTAL_REPS;
                console.log(job.benchmark + ': ' + runtime);
                addResult(job.benchmark, runtime);
                setTimeout(runJob, 0);
            }

            var worker = null;

            function doRepetition() {
                if (worker === null) {
                    worker = new Worker('/wasm-misc/embenchen/worker.js');
                }

                worker.onmessage = function(event) {
                    var msg = event.data;

                    if (msg.benchmark != job.benchmark) {
                        reject('invalid data from benchmark worker');
                        return;
                    }

                    results.push(msg);

                    reps++;
                    if (reps === TOTAL_REPS) {
                        worker.terminate(); // ensure the worker is cleaned up before the next starts
                        worker = null;
                        reps = 0;
                        nextBenchmark();
                    } else {
                        setTimeout(doRepetition, 0);
                    }
                };

                console.log('trigger run of benchmark ' + job.benchmark);

                worker.postMessage({
                    benchmark: job.benchmark
                });
            }

            doRepetition();
        }

        runJob();
    });
}
