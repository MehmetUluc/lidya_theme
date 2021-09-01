<?php

namespace LidyaPos\Theme\Events;

use LidyaPos\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RenderingSiteMapEvent extends Event
{
    use SerializesModels;
}
