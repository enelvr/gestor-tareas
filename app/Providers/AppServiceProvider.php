<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->registerLengthAwarePaginator();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Carbon\Carbon::setLocale('es');
        setlocale(LC_ALL, 'es_MX', 'es', 'ES', 'es_MX.utf8');
        Schema::defaultStringLength(125);

        Inertia::share([
          'authroles' => function () {
            if (Auth::check()) {
                return Auth::user()->roles()->pluck('name');
            } else {
                return [];
            }
          },
  
          'authpermisos' => function () {
            if (Auth::check()) {
              return Auth::user()->getAllPermissions()->pluck('name');
            } else {
              return [];
            }
          }
  
        ]);
    }

    private function registerLengthAwarePaginator()
    {
        $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
            return new class(...array_values($values)) extends LengthAwarePaginator
            {
              public function only(...$attributes)
              {
                return $this->transform(function ($item) use ($attributes) {
                  return $item->only($attributes);
                });
              }
              public function transform($callback)
              {
                $this->items->transform($callback);
                return $this;
              }
              public function toArray()
              {
                return [
                  'data'  => $this->items->toArray(),
                  'links' => $this->links(),
                ];
              }
              public function links($view = null, $data = [])
              {
                $this->appends(Request::all());
                $window   = UrlWindow::make($this);
                $elements = array_filter([
                  $window['first'],
                  is_array($window['slider']) ? '...' : null,
                  $window['slider'],
                  is_array($window['last']) ? '...' : null,
                  $window['last'],
                ]);
                return Collection::make($elements)->flatMap(function ($item) {
                  if (is_array($item)) {
                    return Collection::make($item)->map(function ($url, $page) {
                      return [
                        'url'    => $url,
                        'label'  => $page,
                        'active' => $this->currentPage() === $page,
                      ];
                    });
                  } else {
                    return [
                      [
                        'url'    => null,
                        'label'  => '...',
                        'active' => false,
                      ],
                    ];
                  }
                  })->prepend([
                    'url'    => $this->previousPageUrl(),
                    'label'  => 'Anterior',
                    'active' => false,
                  ])->push([
                    'url'    => $this->nextPageUrl(),
                    'label'  => 'Siguiente',
                    'active' => false,
                  ]);
                }
              };
          });
    }
}
