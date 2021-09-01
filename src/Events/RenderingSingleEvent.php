<?php

namespace LidyaPos\Theme\Events;

use LidyaPos\Base\Events\Event;
use LidyaPos\Slug\Models\Slug;
use Illuminate\Queue\SerializesModels;

class RenderingSingleEvent extends Event
{
    use SerializesModels;

    /**
     * @var Slug
     */
    public $slug;

    /**
     * RenderingSingleEvent constructor.
     * @param Slug $slug
     */
    public function __construct(Slug $slug)
    {
        $this->slug = $slug;
    }
}
