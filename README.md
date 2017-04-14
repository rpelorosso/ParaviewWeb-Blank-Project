# Paraview Blank Project

## Development

To start developing, first clone the repository:

```sh
$ git https://github.com/rhpelorosso/Paraview-Blank-Project.git
```

To set up the dependencies for this project run the following.  Note that this must be re-run every time
the dependencies are modified.

```sh
$ npm install
```

When first setting up this priject for development, it may be helpful to have npm
install a symlink to the latest version that can be executed from the command line
in the folder (presumably in the path) where npm is located.  To do this run:

```sh
$ npm link
```

Now make changes and see what happens.  If you have changed the python code
that runs on the paraview server side, you will have to re-run the server. If you have changed the JavaScript
code, running the following command and refreshing the page should be sufficient.

```sh
$ npm run build
```
The ``build.sh`` script runs this.

To run the server, you need to run pvpython, you can do this with:

```
<path to paraview>/bin/pvpython -dr "<path to python script for server>" --content "<path to the created dist folder>" --port 8080
````
(for testing I used the light-viz python file for the server)



