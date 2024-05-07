<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        return Student::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'age' => 'required|numeric',
            'email' => 'required|email|unique:students',
            'phonenumber' => 'required',
            'gender' => 'required',
            'class' => 'required',
        ]);

        return Student::create($validatedData);
    }

    public function show($id)
    {
        return Student::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'age' => 'required|numeric',
            'email' => 'required|email|unique:students,email,'.$id,
            'phonenumber' => 'required',
            'gender' => 'required',
            'class' => 'required',
        ]);

        $student = Student::findOrFail($id);
        $student->update($validatedData);

        return $student;
    }

    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        return response()->json(['message' => 'Student deleted successfully']);
    }
}
