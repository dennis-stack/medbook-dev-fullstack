<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $services = [
            ['name' => 'Outpatient', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Inpatient', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        DB::table('services')->insert($services);
    }
}
