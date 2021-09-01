<?php

namespace LidyaPos\Theme\Events;

use LidyaPos\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RenderingHomePageEvent extends Event
{
    use SerializesModels;
}