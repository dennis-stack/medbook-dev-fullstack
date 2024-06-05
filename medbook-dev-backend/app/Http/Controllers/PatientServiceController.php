<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PatientService;

class PatientServiceController extends Controller
{
    public function index()
    {
        return PatientService::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'service_id' => 'required|exists:services,id',
            'comments' => 'nullable|string',
        ]);

        $patientService = PatientService::create($validated);
        return response()->json($patientService, 201);
    }

    public function show(PatientService $patientService)
    {
        return $patientService;
    }

    public function update(Request $request, PatientService $patientService)
    {
        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'service_id' => 'required|exists:services,id',
            'comments' => 'nullable|string',
        ]);

        $patientService->update($validated);
        return response()->json($patientService);
    }

    public function destroy(PatientService $patientService)
    {
        $patientService->delete();
        return response()->json(null, 204);
    }
}
