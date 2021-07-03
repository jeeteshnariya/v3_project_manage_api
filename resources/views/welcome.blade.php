
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="./assets/img/apple-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="./assets/img/favicon.png"
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

    <link href="{{ URL::asset('dist/styles.cbbc3d01fbabecc52ce4.css') }}" rel="stylesheet" />
  </head>
  <body>
    <app-root>
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    </app-root>


    <script
      src="{{ URL::asset('dist/main-es2015.39e5b1af2d84ff7adadd.js')}}"
      type="module"
    ></script>
    <script
      src="{{ URL::asset('dist/main-es5.39e5b1af2d84ff7adadd.js')}}"
      nomodule
      defer
    ></script>
  </body>
</html>
