<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class MakeCrud extends Command
{
    protected $signature = 'crud:make {name} {--fields=}';
    protected $description = 'Create CRUD operations';

    public function handle()
    {
        $name = $this->argument('name');
        $fields = $this->option('fields');

        // Generate migration
        $migrationFilePath = $this->createMigration($name, $fields);

        // Generate model
        $this->call('make:model', ['name' => $name]);

        // Generate controller
        $this->call('make:controller', [
            'name' => "{$name}Controller",
            '--resource' => true,
        ]);

        // Generate views
        $this->createViews($name);

        // Add routes
        $this->addRoutes($name);

        $this->info('CRUD for ' . $name . ' created successfully.');
        $this->info('Migration file path: ' . $migrationFilePath);
    }

    protected function createMigration($name, $fields)
    {
        $tableName = Str::plural(Str::snake($name));
        $migrationName = 'create_' . $tableName . '_table';
        $this->call('make:migration', [
            'name' => $migrationName,
            '--create' => $tableName
        ]);

        // Determine the migration file path
        $migrationFilePath = $this->getMigrationFilePath($migrationName);
        $this->updateMigrationFile($migrationFilePath, $fields);

        return $migrationFilePath;
    }

    protected function getMigrationFilePath($migrationName)
    {
        // Get the latest migration file that matches the migration name
        $migrations = File::files(database_path('migrations'));
        $migrationFile = collect($migrations)->filter(function ($file) use ($migrationName) {
            return Str::contains($file->getFilename(), $migrationName);
        })->first();

        return $migrationFile ? $migrationFile->getPathname() : null;
    }

    protected function updateMigrationFile($migrationFilePath, $fields)
    {
        if ($migrationFilePath && File::exists($migrationFilePath)) {
            $migrationContent = File::get($migrationFilePath);
            $fieldsArray = explode(';', $fields);
            $fieldsString = '';

            foreach ($fieldsArray as $field) {
                $fieldDetails = explode(' ', $field);
                $fieldName = $fieldDetails[0];
                $fieldType = $fieldDetails[1];

                $fieldsString .= "\$table->{$fieldType}('{$fieldName}');\n";
            }

            $migrationContent = str_replace('$table->id();', "\$table->id();\n{$fieldsString}", $migrationContent);
            File::put($migrationFilePath, $migrationContent);
        }
    }

    protected function createViews($name)
    {
        $viewPath = resource_path('views/' . Str::snake($name));
        if (!File::exists($viewPath)) {
            File::makeDirectory($viewPath, 0755, true);
        }

        $views = ['index', 'create', 'edit', 'show'];

        foreach ($views as $view) {
            $viewFile = $viewPath . '/' . $view . '.blade.php';
            File::put($viewFile, "<h1>{$view} view for {$name}</h1>");
        }
    }

    protected function addRoutes($name)
    {
        $routePath = base_path('routes/web.php');
        $controllerName = $name . 'Controller';
        $routeContent = "\nRoute::resource('" . Str::snake(Str::plural($name)) . "', '{$controllerName}');";

        File::append($routePath, $routeContent);
    }
}
