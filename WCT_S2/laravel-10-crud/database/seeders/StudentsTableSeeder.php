<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Define sample student data
        $students = [
            [
                'firstname' => 'John',
                'lastname' => 'Doe',
                'age' => 20,
                'email' => 'john@example.com',
                'phonenumber' => '123456789',
                'gender' => 'Male',
                'class' => '10th Grade'
            ],
            [
                'firstname' => 'Jane',
                'lastname' => 'Doe',
                'age' => 18,
                'email' => 'jane@example.com',
                'phonenumber' => '987654321',
                'gender' => 'Female',
                'class' => '12th Grade'
            ],
        ];

        // Insert sample student data into the database
        foreach ($students as $studentData) {
            Student::create($studentData);
        }
    }
}
