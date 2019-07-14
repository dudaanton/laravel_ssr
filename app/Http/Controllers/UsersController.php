<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
      $html = $this->render();

      return view('users', [
        'html' => $html
      ]);
    }

    public function render()
    {
      $renderer_source = \File::get(base_path('node_modules/vue-server-renderer/basic.js'));

      $app_source = \File::get(public_path('js/users_server.js'));

      $js = '
          var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } };
          this.global = { process: process }
      ';

      $v8 = new \V8js();

      ob_start();

      $v8->executeString($js);
      $v8->executeString($renderer_source);
      $v8->executeString($app_source);

      return ob_get_clean();
    }
}
