<?php

use LidyaPos\Setting\Models\Setting as SettingModel;
use LidyaPos\Widget\Models\Widget as WidgetModel;
use Illuminate\Database\Migrations\Migration;

class FixOldThemeOptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        try {
            $theme = Theme::getThemeName();

            if ($theme) {
                foreach (SettingModel::where('key', 'LIKE', 'theme--%')->get() as $item) {
                    $item->key = str_replace('theme--', 'theme-' . $theme . '-', $item->key);

                    if (DB::table('settings')->where('key', $item->key)->count() == 0) {
                        $item->save();
                    }
                }

                SettingModel::insertOrIgnore(['theme' => $theme]);

                WidgetModel::whereNull('theme')->update(['theme' => $theme]);
            }
        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
