/*
 * JavaScript file for the application to demonstrate
 * using the API
 */

// Create the namespace instance
let ns = {};

// Create the model instance
ns.model = (function() {
    'use strict';

    let $event_pump = $('body');

    // Return the API
    return {
    };
}());

// Create the view instance
ns.view = (function() {
    'use strict';

    /*
    let $fname = $('#fname'),
        $lname = $('#lname');
    */
    // return the API
    return {
        error: function(error_msg) {
            $('.error')
                .text(error_msg)
                .css('visibility', 'visible');
            setTimeout(function() {
                $('.error').css('visibility', 'hidden');
            }, 3000)
        }
    };
}());

// Create the controller
ns.controller = (function(m, v) {
    'use strict';

    /*
    let model = m,
        view = v,
        $event_pump = $('body'),
        $fname = $('#fname'),
        $lname = $('#lname');
    */

    // Get the data from the model after the controller is done initializing
    setTimeout(function() {
        //model.read();
    }, 100)

    // Validate input
    function validate() {
        return false;
    }

    $('#run').click(function() {
        alert('run was clicked!');
    })

    $event_pump.on('model_create_success', function(e, data) {
        alert('model_create_success!');
        //model.read();
    });

    $event_pump.on('model_error', function(e, xhr, textStatus, errorThrown) {
        let error_msg = textStatus + ': ' + errorThrown + ' - ' + xhr.responseJSON.detail;
        view.error(error_msg);
        console.log(error_msg);
    })
}(ns.model, ns.view));

