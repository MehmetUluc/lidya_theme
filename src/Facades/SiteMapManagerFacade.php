<?php

namespace LidyaPos\Theme\Facades;

use LidyaPos\Theme\Supports\SiteMapManager;
use Illuminate\Support\Facades\Facade;

class SiteMapManagerFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return SiteMapManager::class;
    }
}
