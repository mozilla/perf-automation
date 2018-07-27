### Instructions for Creating a new Benchmark Release

1. Update and commit the changes to the benchmark.
2. Create a zip file of the directory, e.g:
    
    ```
    $ cd perf-automation/benchmarks
    $ zip -r unity-webgl-\`git rev-parse --short=12 HEAD\`.zip unity-webgl
    ```

3. Figure out the sha256 hash and size:

    ```
    $ sha256sum unity-webgl-<hash>.zip
    $ du -b unity-webgl-<hash>.zip
    ```

4. Upload the zip as a Github release (click "Releases" on the gihub page).
The tag and title should be unity-webgl-v1 (replace v1 with the next version
number).

5. Update the appropriate fetch task with the url, hash and size. Benchmark
fetches are found here:  
    https://searchfox.org/mozilla-central/source/taskcluster/ci/fetch/benchmarks.yml

6. Update the local revision for running with the mach command here:  
    https://searchfox.org/mozilla-central/source/testing/raptor/mach_commands.py
