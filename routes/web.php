<?php

Route::view('/{any}', 'welcome')->where('any', '.*');