$(document).ready(function() {
    $('#info_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            contact: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your contact number'
                    },
                    contact: {
                        country: 'IN',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your country'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            City:{
               validators:{
                   notEmpty:{
                       message: 'Please select your city'
                   }
               }
            }
        
            }
        })
       .on('success.form.bv', function(e) {
           //$('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#info_form').data('bootstrapValidator').resetForm();

            // e.preventDefault();

            var $form = $(e.target);

            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});