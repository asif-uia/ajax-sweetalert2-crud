$(document).ready(function() {
    load_data();
    $(".test").on('click', function() {
        // To redirect: window.location.href = "location";
        // usage: Swal.fire("Header Text", "Body Text", "icon-name");

        // sweet alert button with bootstrap4 theme
        const swalwithBootstrap = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-danger btn-left-mr',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        });

        swalwithBootstrap.fire({
            icon: 'error', // 'success'
            title: "Alert",
            text: 'Insert Dummy Values?',
            width: '400px',
            type: "danger",
            showCancelButton: true,
            confirmButtonText: "Proceed",
            confirmButtonColor: "#ff0055",
            cancelButtonColor: "#999999",
            reverseButtons: true,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "action.php",
                    method: "POST",
                    data: { // data -> hardcoding
                        first_name: Math.random().toString(),
                        last_name: Math.random().toString()
                    },
                    success: function(data) {
                        load_data();
                        Swal.fire('Inserted!', '', 'success');
                    },
                    error: function(xhr, status, error) {
                        console.log("error");
                    },
                });
            } else {
                // Do Nothing
            }
        });
    });

    function load_data() {
        $.ajax({
            url: "fetch.php",
            method: "POST",
            success: function(data) {
                $('#dummy_data').html(data);
            }
        });
    }
});