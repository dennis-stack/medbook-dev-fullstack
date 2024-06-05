<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function patients(): BelongsToMany
    {
        return $this->belongsToMany(Patient::class, 'patient_services')->withPivot('comments');
    }
}
