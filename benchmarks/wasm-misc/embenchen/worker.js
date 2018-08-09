var Module = {
    arguments: ['4'],
    print: function(x) { Module.printBuffer += x + '\n' },
    printBuffer: '',
    preRun: [function() {
        Module.startTime = Date.now();
    }],
    postRun: [function() {
        Module.endTime = Date.now();
    }],
};

if (typeof console === 'undefined') console = { log: function(){} };

onmessage = function(event) {
    var msg = event.data;

    fetch('/wasm-misc/embenchen/src/wasm_' + msg.benchmark + '.wasm')
    .then(resp => resp.arrayBuffer())
    .then(buffer => {
        Module.wasmBinary = buffer;

        importScripts('/wasm-misc/embenchen/src/wasm_' + msg.benchmark + '.js');

        var runtime;
        switch (msg.benchmark) {
            case 'linpack_float.c': {
                // Linpack displays a number of Mflops. Use this instead of the
                // total running time.
                let output = Module.printBuffer;
                // Unrolled Single  Precision     1302.24 Mflops
                let result = /Unrolled\s*Single\s*Precision\s*([0-9]+.[0-9]+)\s*Mflops/.exec(output);
                if (result) {
                    runtime = result[1]; // first captured group.
                    runtime = Number.parseFloat(runtime);
                    runtime = 10000000 / runtime;
                } else {
                    runtime = 0;
                }
            }
            break;
            default:
                runtime = Module.endTime - Module.startTime;
            break;
        }

        postMessage({
            benchmark: msg.benchmark,
            runtime
        });
    });
};

