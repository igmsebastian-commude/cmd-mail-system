var textArea = $(".codemirror-textarea")[0];
var editor = CodeMirror.fromTextArea(textArea, {
    mode: "css",
    lineNumbers: true
});
