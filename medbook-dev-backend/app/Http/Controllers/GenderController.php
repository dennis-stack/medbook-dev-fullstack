<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gender;

class GenderController extends Controller
{
    public function index()
    {
        return Gender::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:genders',
        ]);

        $gender = Gender::create($validated);
        return response()->json($gender, 201);
    }

    public function show(Gender $gender)
    {
        return $gender;
    }

    public function update(Request $request, Gender $gender)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:genders,name,' . $gender->id,
        ]);

        $gender->update($validated);
        return response()->json($gender);
    }

    public function destroy(Gender $gender)
    {
        $gender->delete();
        return response()->json(null, 204);
    }
}
