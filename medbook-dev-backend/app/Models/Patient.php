<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'date_of_birth', 'gender_id'];

    public function gender(): BelongsTo
    {
        return $this->belongsTo(Gender::class);
    }

    public function services(): HasMany
    {
        return $this->hasMany(PatientService::class);
    }
}
