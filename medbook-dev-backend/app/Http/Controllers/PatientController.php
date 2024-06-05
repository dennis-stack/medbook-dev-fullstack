<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Gender;
use App\Models\PatientService;

class PatientController extends Controller
{
    public function index()
    {
        return Patient::with(['gender', 'services.service'])->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender_id' => 'required|exists:genders,id',
            'services.*.service_id' => 'required|exists:services,id',
            'services.*.comments' => 'nullable|string',
        ]);

        $patient = Patient::create($validated);

        if (isset($validated['services'])) {
            foreach ($validated['services'] as $serviceData) {
                $serviceData['patient_id'] = $patient->id;
                PatientService::create($serviceData);
            }
        }

        return response()->json($patient->load(['gender', 'services.service']), 201);
    }

    public function show(Patient $patient)
    {
        return $patient->load(['gender', 'services.service']);
    }

    public function update(Request $request, Patient $patient)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'gender_id' => 'required|exists:genders,id',
            'services.*.service_id' => 'required|exists:services,id',
            'services.*.comments' => 'nullable|string',
        ]);

        $patient->update($validated);

        if (isset($validated['services'])) {
            // Delete old services
            $patient->services()->delete();

            // Add new services
            foreach ($validated['services'] as $serviceData) {
                $serviceData['patient_id'] = $patient->id;
                PatientService::create($serviceData);
            }
        }

        return response()->json($patient->load(['gender', 'services.service']));
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();
        return response()->json(null, 204);
    }
}
