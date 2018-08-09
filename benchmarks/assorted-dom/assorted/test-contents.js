var testContents = [ "<!DOCTYPE html>\n\
<head>\n\
\n\
<meta charset=utf8>\n\
\n\
<!--\n\
 Copyright (C) 2007 Apple Inc.  All rights reserved.\n\
\n\
 Redistribution and use in source and binary forms, with or without\n\
 modification, are permitted provided that the following conditions\n\
 are met:\n\
 1. Redistributions of source code must retain the above copyright\n\
    notice, this list of conditions and the following disclaimer.\n\
 2. Redistributions in binary form must reproduce the above copyright\n\
    notice, this list of conditions and the following disclaimer in the\n\
    documentation and/or other materials provided with the distribution.\n\
\n\
 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY\n\
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n\
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n\
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR\n\
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n\
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n\
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n\
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n\
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n\
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n\
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. \n\
-->\n\
\n\
<title>Assorted misc-test</title>\n\
<link rel=\"stylesheet\" href=\"../kraken.css\">\n\
</head>\n\
\n\
<body>\n\
<h3>misc-test</h3>\n\
<div id=\"console\">\n\
</div>\n\
\n\
<div id=\"test\"></div>\n\
\n\
\n\
<script>\n\
function recordMeasurement(time) {\n\
    document.getElementById(\"console\").innerHTML = time + \"ms\";\n\
    if (window.parent) {\n\
        parent.recordResult(time);\n\
    }\n\
}\n\
\n\
var _sunSpiderStartDate = 0;\n\
function startMeasuring() {\n\
    _sunSpiderStartDate = new Date();\n\
}\n\
\n\
function stopMeasuring() {\n\
    var _sunSpiderInterval = new Date() - _sunSpiderStartDate;\n\
    recordMeasurement(_sunSpiderInterval);\n\
}\n\
\n\
startMeasuring();\n\
\n\
function test() {\n\
   return document.getElementById(\"test\");\n\
}\n\
\n\
\n\
// Optional. Call this if you want to ignore the time it took to set up the test.\n\
startMeasuring();\n\
\n\
for (var i=0; i<100000; i++) {\n\
    test();\n\
}\n\
\n\
// Required. Notifies the measuring is done.\n\
stopMeasuring();\n\
\n\
// Alternately, instead of using startMeasuring/stopMeasuring, you can\n\
// call record() and pass it the time, in milliseconds, that your test\n\
// took.\n\
\n\
\n\
\n\
</script>\n\
\n\
\n\
</body>\n\
</html>\n\
", "<!DOCTYPE html>\n\
<head>\n\
\n\
<meta charset=utf8>\n\
\n\
<!--\n\
 Copyright (C) 2007 Apple Inc.  All rights reserved.\n\
\n\
 Redistribution and use in source and binary forms, with or without\n\
 modification, are permitted provided that the following conditions\n\
 are met:\n\
 1. Redistributions of source code must retain the above copyright\n\
    notice, this list of conditions and the following disclaimer.\n\
 2. Redistributions in binary form must reproduce the above copyright\n\
    notice, this list of conditions and the following disclaimer in the\n\
    documentation and/or other materials provided with the distribution.\n\
\n\
 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY\n\
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n\
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n\
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR\n\
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n\
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n\
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n\
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n\
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n\
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n\
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. \n\
-->\n\
\n\
<title>Assorted misc-worker-getname-performance-getter</title>\n\
<link rel=\"stylesheet\" href=\"../kraken.css\">\n\
</head>\n\
\n\
<body>\n\
<h3>misc-worker-getname-performance-getter</h3>\n\
<div id=\"console\">\n\
</div>\n\
\n\
\n\
\n\
<script>\n\
function recordMeasurement(time) {\n\
    document.getElementById(\"console\").innerHTML = time + \"ms\";\n\
    if (window.parent) {\n\
        parent.recordResult(time);\n\
    }\n\
}\n\
\n\
var _sunSpiderStartDate = 0;\n\
function startMeasuring() {\n\
    _sunSpiderStartDate = new Date();\n\
}\n\
\n\
function stopMeasuring() {\n\
    var _sunSpiderInterval = new Date() - _sunSpiderStartDate;\n\
    recordMeasurement(_sunSpiderInterval);\n\
}\n\
\n\
startMeasuring();\n\
\n\
var w = new Worker(\"getname-performance-getter-helper.js\")\n\
w.onmessage = function (e) {\n\
    recordMeasurement(e.data);\n\
}\n\
\n\
\n\
\n\
</script>\n\
\n\
\n\
</body>\n\
</html>\n\
", "<!DOCTYPE html>\n\
<head>\n\
\n\
<meta charset=utf8>\n\
\n\
<!--\n\
 Copyright (C) 2007 Apple Inc.  All rights reserved.\n\
\n\
 Redistribution and use in source and binary forms, with or without\n\
 modification, are permitted provided that the following conditions\n\
 are met:\n\
 1. Redistributions of source code must retain the above copyright\n\
    notice, this list of conditions and the following disclaimer.\n\
 2. Redistributions in binary form must reproduce the above copyright\n\
    notice, this list of conditions and the following disclaimer in the\n\
    documentation and/or other materials provided with the distribution.\n\
\n\
 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY\n\
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n\
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n\
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR\n\
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n\
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n\
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n\
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n\
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n\
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n\
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. \n\
-->\n\
\n\
<title>Assorted misc-worker-getprop-performance-getter</title>\n\
<link rel=\"stylesheet\" href=\"../kraken.css\">\n\
</head>\n\
\n\
<body>\n\
<h3>misc-worker-getprop-performance-getter</h3>\n\
<div id=\"console\">\n\
</div>\n\
\n\
\n\
\n\
<script>\n\
function recordMeasurement(time) {\n\
    document.getElementById(\"console\").innerHTML = time + \"ms\";\n\
    if (window.parent) {\n\
        parent.recordResult(time);\n\
    }\n\
}\n\
\n\
var _sunSpiderStartDate = 0;\n\
function startMeasuring() {\n\
    _sunSpiderStartDate = new Date();\n\
}\n\
\n\
function stopMeasuring() {\n\
    var _sunSpiderInterval = new Date() - _sunSpiderStartDate;\n\
    recordMeasurement(_sunSpiderInterval);\n\
}\n\
\n\
startMeasuring();\n\
\n\
var w = new Worker(\"getprop-performance-getter-helper.js\")\n\
w.onmessage = function (e) {\n\
    recordMeasurement(e.data);\n\
}\n\
\n\
\n\
\n\
</script>\n\
\n\
\n\
</body>\n\
</html>\n\
", "<!DOCTYPE html>\n\
<head>\n\
\n\
<meta charset=utf8>\n\
\n\
<!--\n\
 Copyright (C) 2007 Apple Inc.  All rights reserved.\n\
\n\
 Redistribution and use in source and binary forms, with or without\n\
 modification, are permitted provided that the following conditions\n\
 are met:\n\
 1. Redistributions of source code must retain the above copyright\n\
    notice, this list of conditions and the following disclaimer.\n\
 2. Redistributions in binary form must reproduce the above copyright\n\
    notice, this list of conditions and the following disclaimer in the\n\
    documentation and/or other materials provided with the distribution.\n\
\n\
 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY\n\
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n\
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n\
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR\n\
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n\
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n\
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n\
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n\
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n\
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n\
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. \n\
-->\n\
\n\
<title>Assorted misc-window-getname-performance-getter</title>\n\
<link rel=\"stylesheet\" href=\"../kraken.css\">\n\
</head>\n\
\n\
<body>\n\
<h3>misc-window-getname-performance-getter</h3>\n\
<div id=\"console\">\n\
</div>\n\
\n\
\n\
\n\
<script>\n\
function recordMeasurement(time) {\n\
    document.getElementById(\"console\").innerHTML = time + \"ms\";\n\
    if (window.parent) {\n\
        parent.recordResult(time);\n\
    }\n\
}\n\
\n\
var _sunSpiderStartDate = 0;\n\
function startMeasuring() {\n\
    _sunSpiderStartDate = new Date();\n\
}\n\
\n\
function stopMeasuring() {\n\
    var _sunSpiderInterval = new Date() - _sunSpiderStartDate;\n\
    recordMeasurement(_sunSpiderInterval);\n\
}\n\
\n\
startMeasuring();\n\
\n\
var origPostMessage = window.postMessage;\n\
window.postMessage = function(arg) {\n\
    origPostMessage.call(window, arg, \"*\");\n\
}\n\
window.onmessage = function(e) {\n\
    recordMeasurement(e.data);\n\
}\n\
document.write('<script src=\"getname-performance-getter-helper.js\"></' + 'script>');\n\
\n\
\n\
\n\
</script>\n\
\n\
\n\
</body>\n\
</html>\n\
", "<!DOCTYPE html>\n\
<head>\n\
\n\
<meta charset=utf8>\n\
\n\
<!--\n\
 Copyright (C) 2007 Apple Inc.  All rights reserved.\n\
\n\
 Redistribution and use in source and binary forms, with or without\n\
 modification, are permitted provided that the following conditions\n\
 are met:\n\
 1. Redistributions of source code must retain the above copyright\n\
    notice, this list of conditions and the following disclaimer.\n\
 2. Redistributions in binary form must reproduce the above copyright\n\
    notice, this list of conditions and the following disclaimer in the\n\
    documentation and/or other materials provided with the distribution.\n\
\n\
 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY\n\
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n\
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\n\
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR\n\
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\n\
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\n\
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\n\
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY\n\
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n\
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n\
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. \n\
-->\n\
\n\
<title>Assorted misc-window-getprop-performance-getter</title>\n\
<link rel=\"stylesheet\" href=\"../kraken.css\">\n\
</head>\n\
\n\
<body>\n\
<h3>misc-window-getprop-performance-getter</h3>\n\
<div id=\"console\">\n\
</div>\n\
\n\
\n\
\n\
<script>\n\
function recordMeasurement(time) {\n\
    document.getElementById(\"console\").innerHTML = time + \"ms\";\n\
    if (window.parent) {\n\
        parent.recordResult(time);\n\
    }\n\
}\n\
\n\
var _sunSpiderStartDate = 0;\n\
function startMeasuring() {\n\
    _sunSpiderStartDate = new Date();\n\
}\n\
\n\
function stopMeasuring() {\n\
    var _sunSpiderInterval = new Date() - _sunSpiderStartDate;\n\
    recordMeasurement(_sunSpiderInterval);\n\
}\n\
\n\
startMeasuring();\n\
\n\
var origPostMessage = window.postMessage;\n\
window.postMessage = function(arg) {\n\
    origPostMessage.call(window, arg, \"*\");\n\
}\n\
window.onmessage = function(e) {\n\
    recordMeasurement(e.data);\n\
}\n\
document.write('<script src=\"getprop-performance-getter-helper.js\"></' + 'script>');\n\
\n\
\n\
\n\
</script>\n\
\n\
\n\
</body>\n\
</html>\n\
" ];
