<!doctype html>
<html>
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="An app to fin all about any actor.">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        <title>The Actor's Oracle</title>
        <link rel="stylesheet" href="../styles/styles.css">
    <!-- Angular.js 2-->
    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    <script src="../node_modules/core-js/client/shim.min.js"></script>
    <script src="../node_modules/zone.js/dist/zone.js"></script>
    <script src="../node_modules/reflect-metadata/Reflect.js"></script>
    <script src="../node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configure SystemJS -->
    <script src="../systemjs.config.js"></script>
    <script>
        System.import('app').catch(function (err) {
            console.error(err);
        });
    </script>
    </head>
    <!-- 3. Display the application -->
    <body>
    <my-app>Loading...</my-app>
</body>
</html>


