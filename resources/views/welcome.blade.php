

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="{{ URL::asset('dist/assets/img/apple-icon.png') }}"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="{{ URL::asset('dist/assets/img/apple-icon.png') }}./assets/img/favicon.png"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      name="viewport"
    />
    <meta name="viewport" content="width=device-width" />

    <title>PMS</title>

    <base href="/" />

    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="{{ URL::asset('dist/assets/css/demo.css') }}" rel="stylesheet" />

    <!--     Fonts and icons     -->
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      rel="stylesheet"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <app-root>
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    </app-root>
  <script src="{{ URL::asset('dist/assets/runtime-es2015.js') }}" type="module"></script>
  <script src="{{ URL::asset('dist/assets/runtime-es5.js') }}" nomodule defer></script><script src="polyfills-es5.js" nomodule defer></script>
  <script src="{{ URL::asset('dist/assets/polyfills-es2015.js') }}" type="module"></script><script src="styles-es2015.js" type="module"></script>
      <script src="{{ URL::asset('dist/assets/styles-es5.js') }}" nomodule defer></script><script src="vendor-es2015.js" type="module"></script>
      <script src="{{ URL::asset('dist/assets/vendor-es5.js') }}" nomodule defer></script><script src="main-es2015.js" type="module"></script>
      <script src="{{ URL::asset('dist/assets/main-es5.js') }}" nomodule defer></script></body>
</html>
