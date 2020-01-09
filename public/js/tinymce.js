configurations = {

    selector: 'textarea#content-area',
    height: 340,
    menubar: false,
    statusbar: true,
    branding: false,
    plugins: [
        'fullscreen lists advlist link autolink link image visualchars',
        'charmap media paste help anchor pagebreak directionality'
    ],
    toolbar: 'undo redo | bold italic permanentpen formatpainter | link image pageembed | alignleft aligncenter alignright | numlist bullist outdent indent | charmap',
    formats: {
        italic: {
            inline: 'span',
            styles: {
                'font-style': 'italic'
            }
        },
    },
    forced_root_block: "",
    entity_encoding: 'raw',
    image_title: true,
    automatic_uploads: true,
    paste_data_images: true,
};

tinymce.init(configurations);
